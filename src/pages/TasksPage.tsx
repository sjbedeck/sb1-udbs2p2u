import { useState, useMemo } from 'react';
import {
  Plus, Search, Filter, ArrowUpDown, MoreHorizontal,
  Eye, Trash2, ListTodo
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectItem } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { PriorityBadge } from '@/components/shared/PriorityBadge';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery, useSupabaseInsert, useSupabaseDelete } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { Task, TaskStatus, TaskPriority } from '@/types';

function NewTaskDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('P2');
  const insert = useSupabaseInsert<Task>('tasks');

  const handleCreate = () => {
    if (!title.trim()) return;
    insert.mutate({
      title,
      description,
      priority,
      status: 'pending' as TaskStatus,
      prompt: description,
      tags: [],
      metadata: {},
      conversation_thread: [],
    } as Partial<Task>, {
      onSuccess: () => {
        setTitle('');
        setDescription('');
        setPriority('P2');
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)} className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title..." />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Description</label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the task..." rows={3} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Priority</label>
            <Select value={priority} onValueChange={(v) => setPriority(v as TaskPriority)}>
              <SelectItem value="P0">P0 - Critical</SelectItem>
              <SelectItem value="P1">P1 - High</SelectItem>
              <SelectItem value="P2">P2 - Medium</SelectItem>
              <SelectItem value="P3">P3 - Low</SelectItem>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleCreate} disabled={!title.trim() || insert.isPending}>
            {insert.isPending ? 'Creating...' : 'Create Task'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function TaskDetailSheet({ task, open, onOpenChange }: { task: Task | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  if (!task) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent onClose={() => onOpenChange(false)}>
        <SheetHeader>
          <SheetTitle>{task.title}</SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <StatusBadge status={task.status} />
            <PriorityBadge priority={task.priority} />
          </div>
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Description</h4>
            <p className="text-sm">{task.description || 'No description provided.'}</p>
          </div>
          {task.branch && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">Branch</h4>
              <Badge variant="outline" className="font-mono text-xs">{task.branch}</Badge>
            </div>
          )}
          {task.tags && task.tags.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">Tags</h4>
              <div className="flex flex-wrap gap-1">
                {task.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Conversation</h4>
            <div className="space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin">
              {task.conversation_thread && task.conversation_thread.length > 0 ? (
                task.conversation_thread.map((msg, i) => (
                  <div key={i} className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={msg.role === 'user' ? 'default' : 'secondary'} className="text-[10px]">
                        {msg.role}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{formatRelativeTime(msg.timestamp)}</span>
                    </div>
                    <p className="text-xs">{msg.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-muted-foreground">No conversation yet.</p>
              )}
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground">
            Created {formatRelativeTime(task.created_at)} | Updated {formatRelativeTime(task.updated_at)}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function TasksPage() {
  const { data: tasks, isLoading } = useSupabaseQuery<Task>('tasks');
  const deleteTask = useSupabaseDelete('tasks');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortField, setSortField] = useState<'created_at' | 'priority'>('created_at');
  const [sortAsc, setSortAsc] = useState(false);
  const [newDialogOpen, setNewDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = tasks || [];
    if (search) result = result.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
    if (statusFilter !== 'all') result = result.filter((t) => t.status === statusFilter);
    if (priorityFilter !== 'all') result = result.filter((t) => t.priority === priorityFilter);
    result = [...result].sort((a, b) => {
      if (sortField === 'priority') {
        const order = { P0: 0, P1: 1, P2: 2, P3: 3 };
        const diff = order[a.priority] - order[b.priority];
        return sortAsc ? diff : -diff;
      }
      const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return sortAsc ? diff : -diff;
    });
    return result;
  }, [tasks, search, statusFilter, priorityFilter, sortField, sortAsc]);

  const toggleSort = (field: 'created_at' | 'priority') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Tasks</h2>
          <p className="text-sm text-muted-foreground">{tasks?.length || 0} total tasks</p>
        </div>
        <Button size="sm" onClick={() => setNewDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-1" /> New Task
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tasks..." className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={statusFilter} onValueChange={setStatusFilter} className="w-[130px]">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
          </Select>
          <Select value={priorityFilter} onValueChange={setPriorityFilter} className="w-[130px]">
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="P0">P0 Critical</SelectItem>
            <SelectItem value="P1">P1 High</SelectItem>
            <SelectItem value="P2">P2 Medium</SelectItem>
            <SelectItem value="P3">P3 Low</SelectItem>
          </Select>
        </div>
      </div>

      <Card>
        {isLoading ? (
          <div className="p-8">
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-3 animate-pulse">
                  <div className="h-5 w-20 rounded bg-muted" />
                  <div className="h-5 flex-1 rounded bg-muted" />
                  <div className="h-5 w-16 rounded bg-muted" />
                </div>
              ))}
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            icon={ListTodo}
            title="No tasks found"
            description={search || statusFilter !== 'all' ? 'Try adjusting your filters.' : 'Create your first task to get started.'}
            actionLabel={!search ? 'New Task' : undefined}
            onAction={!search ? () => setNewDialogOpen(true) : undefined}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-3 font-medium text-muted-foreground">Status</th>
                  <th className="p-3 font-medium text-muted-foreground">Title</th>
                  <th className="p-3 font-medium text-muted-foreground cursor-pointer select-none" onClick={() => toggleSort('priority')}>
                    <span className="flex items-center gap-1">Priority <ArrowUpDown className="h-3 w-3" /></span>
                  </th>
                  <th className="p-3 font-medium text-muted-foreground">Tags</th>
                  <th className="p-3 font-medium text-muted-foreground cursor-pointer select-none" onClick={() => toggleSort('created_at')}>
                    <span className="flex items-center gap-1">Created <ArrowUpDown className="h-3 w-3" /></span>
                  </th>
                  <th className="p-3 font-medium text-muted-foreground w-10" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((task) => (
                  <tr
                    key={task.id}
                    className="border-b last:border-0 hover:bg-accent/30 transition-colors cursor-pointer"
                    onClick={() => { setSelectedTask(task); setDetailOpen(true); }}
                  >
                    <td className="p-3"><StatusBadge status={task.status} /></td>
                    <td className="p-3 font-medium">{task.title}</td>
                    <td className="p-3"><PriorityBadge priority={task.priority} /></td>
                    <td className="p-3">
                      <div className="flex gap-1">
                        {task.tags?.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                        ))}
                        {task.tags && task.tags.length > 2 && (
                          <Badge variant="secondary" className="text-[10px]">+{task.tags.length - 2}</Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-muted-foreground text-xs">{formatRelativeTime(task.created_at)}</td>
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <DropdownMenu
                        trigger={
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        }
                      >
                        <DropdownMenuItem onClick={() => { setSelectedTask(task); setDetailOpen(true); }}>
                          <Eye className="h-3 w-3 mr-2" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => deleteTask.mutate(task.id)} className="text-destructive">
                          <Trash2 className="h-3 w-3 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <NewTaskDialog open={newDialogOpen} onOpenChange={setNewDialogOpen} />
      <TaskDetailSheet task={selectedTask} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
