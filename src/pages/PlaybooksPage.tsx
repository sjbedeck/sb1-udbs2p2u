import { useState } from 'react';
import { Plus, Search, FileText, ChevronRight, Users, Shield, MoreHorizontal, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery, useSupabaseDelete } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { Playbook } from '@/types';

function PlaybookDetailSheet({ playbook, open, onOpenChange }: { playbook: Playbook | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  if (!playbook) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent onClose={() => onOpenChange(false)}>
        <SheetHeader>
          <SheetTitle>{playbook.name}</SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground">{playbook.description}</p>
          <div className="flex gap-2">
            <Badge variant={playbook.scope === 'team' ? 'default' : 'secondary'}>
              {playbook.scope === 'team' ? <Users className="h-3 w-3 mr-1" /> : null}
              {playbook.scope}
            </Badge>
            <Badge variant="outline">{playbook.author}</Badge>
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2">Steps</h4>
            <div className="space-y-2">
              {playbook.steps?.map((step, i) => (
                <div key={step.id || i} className="flex gap-3 rounded-lg border p-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {step.order || i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {playbook.success_criteria && playbook.success_criteria.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Success Criteria</h4>
              <ul className="space-y-1">
                {playbook.success_criteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <ChevronRight className="h-3 w-3 mt-0.5 text-green-500 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {playbook.guardrails && playbook.guardrails.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Guardrails</h4>
              <ul className="space-y-1">
                {playbook.guardrails.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <Shield className="h-3 w-3 mt-0.5 text-orange-500 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-[10px] text-muted-foreground">
            Created {formatRelativeTime(playbook.created_at)}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function PlaybooksPage() {
  const { data: playbooks, isLoading } = useSupabaseQuery<Playbook>('playbooks');
  const deletePlaybook = useSupabaseDelete('playbooks');
  const [search, setSearch] = useState('');
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = (playbooks || []).filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Playbooks</h2>
          <p className="text-sm text-muted-foreground">{playbooks?.length || 0} playbooks</p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-1" /> New Playbook</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search playbooks..." className="pl-9" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="p-5"><div className="h-20 rounded bg-muted" /></CardContent></Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No playbooks found"
          description={search ? 'Try adjusting your search.' : 'Create structured playbooks to guide your agents.'}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((pb) => (
            <Card
              key={pb.id}
              className="group hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
              onClick={() => { setSelectedPlaybook(pb); setDetailOpen(true); }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{pb.name}</h3>
                      <p className="text-xs text-muted-foreground">{pb.steps?.length || 0} steps</p>
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
                      <DropdownMenuItem onClick={() => { setSelectedPlaybook(pb); setDetailOpen(true); }}>
                        <Eye className="h-3 w-3 mr-2" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => deletePlaybook.mutate(pb.id)} className="text-destructive">
                        <Trash2 className="h-3 w-3 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenu>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{pb.description}</p>
                <div className="flex items-center gap-2">
                  <Badge variant={pb.scope === 'team' ? 'default' : 'secondary'} className="text-[10px]">{pb.scope}</Badge>
                  <span className="text-[10px] text-muted-foreground">{pb.author}</span>
                  <span className="text-[10px] text-muted-foreground ml-auto">{formatRelativeTime(pb.created_at)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <PlaybookDetailSheet playbook={selectedPlaybook} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
