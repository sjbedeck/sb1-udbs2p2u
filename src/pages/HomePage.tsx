import { useState } from 'react';
import {
  Send, Bot, ListTodo, GitBranch, Terminal, Activity,
  ArrowUpRight, Cpu, Zap, CheckCircle2, AlertCircle, Clock
} from 'lucide-react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { useSupabaseQuery } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { Task, Agent, ActivityLogEntry } from '@/types';

function ChatInput() {
  const [message, setMessage] = useState('');

  return (
    <div className="relative">
      <div className="rounded-xl border bg-card shadow-sm">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your swarm anything... e.g. 'Deploy the auth service to staging'"
          className="w-full resize-none bg-transparent px-4 pt-4 pb-14 text-sm outline-none placeholder:text-muted-foreground min-h-[100px]"
          rows={3}
        />
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Press Enter to send</span>
          <Button size="sm" disabled={!message.trim()}>
            <Send className="h-4 w-4 mr-1" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

function QuickActions() {
  const [, setLocation] = useLocation();

  const actions = [
    { label: 'New Task', icon: ListTodo, path: '/tasks', color: 'text-blue-500' },
    { label: 'Launch Agent', icon: Bot, path: '/agents', color: 'text-green-500' },
    { label: 'Open Terminal', icon: Terminal, path: '/terminal', color: 'text-orange-500' },
    { label: 'Run Workflow', icon: GitBranch, path: '/workflows', color: 'text-cyan-500' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => setLocation(action.path)}
          className="flex items-center gap-3 rounded-lg border bg-card p-4 text-sm font-medium transition-all hover:shadow-md hover:border-primary/30 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
            <action.icon className={`h-4 w-4 ${action.color}`} />
          </div>
          <span>{action.label}</span>
          <ArrowUpRight className="h-3 w-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      ))}
    </div>
  );
}

function HealthWidgets() {
  const { data: tasks } = useSupabaseQuery<Task>('tasks');
  const { data: agents } = useSupabaseQuery<Agent>('agents');

  const runningTasks = tasks?.filter((t) => t.status === 'running').length || 0;
  const completedTasks = tasks?.filter((t) => t.status === 'completed').length || 0;
  const failedTasks = tasks?.filter((t) => t.status === 'failed').length || 0;
  const activeAgents = agents?.filter((a) => a.status === 'working').length || 0;

  const widgets = [
    { label: 'Active Tasks', value: runningTasks, icon: Clock, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { label: 'Completed', value: completedTasks, icon: CheckCircle2, color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { label: 'Failed', value: failedTasks, icon: AlertCircle, color: 'text-red-500', bgColor: 'bg-red-500/10' },
    { label: 'Agents Online', value: activeAgents, icon: Cpu, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {widgets.map((w) => (
        <Card key={w.label}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{w.label}</p>
                <p className="text-2xl font-bold mt-1">{w.value}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${w.bgColor}`}>
                <w.icon className={`h-5 w-5 ${w.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ActivityFeed() {
  const { data: activities, isLoading } = useSupabaseQuery<ActivityLogEntry>('activity_log');
  const recent = activities?.slice(0, 10) || [];

  const getIcon = (type: string) => {
    if (type.includes('task')) return ListTodo;
    if (type.includes('agent')) return Bot;
    if (type.includes('workflow')) return GitBranch;
    return Activity;
  };

  return (
    <Card className="flex-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Activity className="h-4 w-4" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-3 animate-pulse">
                <div className="h-8 w-8 rounded-full bg-muted" />
                <div className="flex-1 space-y-1">
                  <div className="h-3 w-3/4 rounded bg-muted" />
                  <div className="h-2 w-1/2 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {recent.map((entry) => {
              const Icon = getIcon(entry.event_type);
              return (
                <div key={entry.id} className="flex items-start gap-3 rounded-lg p-2 hover:bg-accent/50 transition-colors">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted mt-0.5">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs truncate">{entry.description}</p>
                    <p className="text-[10px] text-muted-foreground">{formatRelativeTime(entry.created_at)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function RecentTasks() {
  const { data: tasks } = useSupabaseQuery<Task>('tasks');
  const recent = tasks?.slice(0, 6) || [];

  return (
    <Card className="flex-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Zap className="h-4 w-4" />
          Recent Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {recent.map((task) => (
            <div key={task.id} className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent/50 transition-colors">
              <StatusBadge status={task.status} />
              <span className="text-xs truncate flex-1">{task.title}</span>
              <span className="text-[10px] text-muted-foreground shrink-0">
                {formatRelativeTime(task.created_at)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-lg font-semibold">Welcome back</h2>
        <p className="text-sm text-muted-foreground">Here is what your swarm has been up to.</p>
      </div>

      <ChatInput />
      <HealthWidgets />
      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ActivityFeed />
        <RecentTasks />
      </div>
    </div>
  );
}
