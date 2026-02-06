import { useState } from 'react';
import { Plus, Search, Bot, Cpu, MoreHorizontal, Eye, Settings, Trash2 } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery, useSupabaseDelete } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { Agent } from '@/types';

function AgentDetailSheet({ agent, open, onOpenChange }: { agent: Agent | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  if (!agent) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent onClose={() => onOpenChange(false)}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            {agent.name}
          </SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <StatusBadge status={agent.status} />
            <Badge variant="outline">{agent.role}</Badge>
          </div>
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Description</h4>
            <p className="text-sm">{agent.description}</p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Model</h4>
            <Badge variant="secondary" className="font-mono text-xs">{agent.model}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">Temperature</h4>
              <p className="text-sm font-mono">{agent.temperature}</p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">Max Tokens</h4>
              <p className="text-sm font-mono">{agent.max_tokens}</p>
            </div>
          </div>
          {agent.scopes && agent.scopes.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">Scopes</h4>
              <div className="flex flex-wrap gap-1">
                {agent.scopes.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </div>
          )}
          {agent.commands && agent.commands.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">Commands</h4>
              <div className="flex flex-wrap gap-1">
                {agent.commands.map((c) => (
                  <Badge key={c} variant="outline" className="font-mono text-[10px]">{c}</Badge>
                ))}
              </div>
            </div>
          )}
          {agent.system_prompt && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-1">System Prompt</h4>
              <div className="rounded-lg border bg-muted/50 p-3 max-h-[200px] overflow-y-auto scrollbar-thin">
                <p className="text-xs font-mono whitespace-pre-wrap">{agent.system_prompt}</p>
              </div>
            </div>
          )}
          <p className="text-[10px] text-muted-foreground">
            Created {formatRelativeTime(agent.created_at)}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function AgentsPage() {
  const { data: agents, isLoading } = useSupabaseQuery<Agent>('agents');
  const deleteAgent = useSupabaseDelete('agents');
  const [, setLocation] = useLocation();
  const [search, setSearch] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = (agents || []).filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Agents</h2>
          <p className="text-sm text-muted-foreground">{agents?.length || 0} agents configured</p>
        </div>
        <Button size="sm" onClick={() => setLocation('/agents/new')}>
          <Plus className="h-4 w-4 mr-1" /> New Agent
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search agents..." className="pl-9" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-muted" />
                  <div className="space-y-1 flex-1">
                    <div className="h-4 w-24 rounded bg-muted" />
                    <div className="h-3 w-16 rounded bg-muted" />
                  </div>
                </div>
                <div className="h-8 rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Bot}
          title="No agents found"
          description={search ? 'Try a different search term.' : 'Create your first agent to get started.'}
          actionLabel={!search ? 'New Agent' : undefined}
          onAction={!search ? () => setLocation('/agents/new') : undefined}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((agent) => (
            <Card
              key={agent.id}
              className="group hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
              onClick={() => { setSelectedAgent(agent); setDetailOpen(true); }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{agent.name}</h3>
                      <p className="text-xs text-muted-foreground">{agent.role}</p>
                    </div>
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu
                      trigger={
                        <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      }
                    >
                      <DropdownMenuItem onClick={() => { setSelectedAgent(agent); setDetailOpen(true); }}>
                        <Eye className="h-3 w-3 mr-2" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLocation(`/agents/${agent.id}`)}>
                        <Settings className="h-3 w-3 mr-2" /> Configure
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => deleteAgent.mutate(agent.id)} className="text-destructive">
                        <Trash2 className="h-3 w-3 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenu>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{agent.description}</p>
                <div className="flex items-center justify-between">
                  <StatusBadge status={agent.status} />
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Cpu className="h-3 w-3" />
                    <span className="font-mono">{agent.model}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AgentDetailSheet agent={selectedAgent} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
