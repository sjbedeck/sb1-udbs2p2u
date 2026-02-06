import { useState } from 'react';
import { Plus, Search, GitBranch, Play, Pause, MoreHorizontal, Eye, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery, useSupabaseDelete } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { Workflow } from '@/types';

function WorkflowMinimap({ nodes }: { nodes: Workflow['nodes']; edges: Workflow['edges'] }) {
  if (!nodes || nodes.length === 0) {
    return (
      <div className="h-24 rounded-lg bg-muted/30 flex items-center justify-center">
        <p className="text-[10px] text-muted-foreground">No nodes</p>
      </div>
    );
  }

  return (
    <div className="h-24 rounded-lg bg-muted/30 p-2 overflow-hidden relative">
      <div className="flex items-center gap-2 h-full">
        {nodes.slice(0, 4).map((node, i) => (
          <div key={node.id} className="flex items-center gap-1">
            <div className="rounded border bg-card px-2 py-1 text-[9px] font-medium truncate max-w-[60px]">
              {(node.data?.label as string) || node.type}
            </div>
            {i < Math.min(nodes.length - 1, 3) && (
              <ArrowRight className="h-2.5 w-2.5 text-muted-foreground shrink-0" />
            )}
          </div>
        ))}
        {nodes.length > 4 && (
          <Badge variant="secondary" className="text-[9px]">+{nodes.length - 4}</Badge>
        )}
      </div>
    </div>
  );
}

export default function WorkflowsPage() {
  const { data: workflows, isLoading } = useSupabaseQuery<Workflow>('workflows');
  const deleteWorkflow = useSupabaseDelete('workflows');
  const [search, setSearch] = useState('');

  const filtered = (workflows || []).filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Workflows</h2>
          <p className="text-sm text-muted-foreground">{workflows?.length || 0} workflows</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" /> New Workflow
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search workflows..." className="pl-9" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-5">
                <div className="h-4 w-32 rounded bg-muted mb-3" />
                <div className="h-24 rounded bg-muted mb-3" />
                <div className="h-3 w-20 rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={GitBranch}
          title="No workflows found"
          description={search ? 'Try adjusting your search.' : 'Create your first workflow to automate agent tasks.'}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((workflow) => (
            <Card key={workflow.id} className="group hover:shadow-md hover:border-primary/20 transition-all">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold">{workflow.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{workflow.description}</p>
                  </div>
                  <DropdownMenu
                    trigger={
                      <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    }
                  >
                    <DropdownMenuItem><Eye className="h-3 w-3 mr-2" /> View</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive" onClick={() => deleteWorkflow.mutate(workflow.id)}>
                      <Trash2 className="h-3 w-3 mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenu>
                </div>

                <WorkflowMinimap nodes={workflow.nodes || []} edges={workflow.edges || []} />

                <div className="flex items-center justify-between mt-3">
                  <StatusBadge status={workflow.status} />
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground">{formatRelativeTime(workflow.updated_at)}</span>
                    {workflow.status === 'published' && (
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Play className="h-3 w-3" />
                      </Button>
                    )}
                    {workflow.status === 'running' && (
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Pause className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
