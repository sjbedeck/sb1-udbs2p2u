import { useState } from 'react';
import { Search, FlaskConical, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { Experiment } from '@/types';

function ScoreBar({ label, value }: { label: string; value: number }) {
  const pct = Math.round(value * 100);
  const color = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono font-medium">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ExperimentDetailSheet({ experiment, open, onOpenChange }: { experiment: Experiment | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  if (!experiment) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent onClose={() => onOpenChange(false)}>
        <SheetHeader>
          <SheetTitle>{experiment.name}</SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-mono text-[10px]">{experiment.model}</Badge>
            <Badge variant="outline" className="text-[10px]">v{experiment.prompt_version}</Badge>
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-3">Scores</h4>
            <div className="space-y-3">
              {Object.entries(experiment.scores || {}).map(([key, value]) => (
                <ScoreBar key={key} label={key} value={value} />
              ))}
            </div>
          </div>

          {experiment.trace_ids && experiment.trace_ids.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">
                Linked Traces ({experiment.trace_ids.length})
              </h4>
              <div className="flex flex-wrap gap-1">
                {experiment.trace_ids.map((id) => (
                  <Badge key={id} variant="outline" className="font-mono text-[10px]">
                    {id.slice(0, 8)}...
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <p className="text-[10px] text-muted-foreground">
            Created {formatRelativeTime(experiment.created_at)}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function ExperimentsPage() {
  const { data: experiments, isLoading } = useSupabaseQuery<Experiment>('experiments');
  const [search, setSearch] = useState('');
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = (experiments || []).filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Experiments</h2>
          <p className="text-sm text-muted-foreground">{experiments?.length || 0} experiments</p>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search experiments..." className="pl-9" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="p-5"><div className="h-28 rounded bg-muted" /></CardContent></Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={FlaskConical}
          title="No experiments found"
          description={search ? 'Try adjusting your search.' : 'Run experiments to compare model performance.'}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((exp) => {
            const scoreEntries = Object.entries(exp.scores || {});
            const avgScore = scoreEntries.length
              ? scoreEntries.reduce((sum, [, v]) => sum + v, 0) / scoreEntries.length
              : 0;

            return (
              <Card
                key={exp.id}
                className="group hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
                onClick={() => { setSelectedExperiment(exp); setDetailOpen(true); }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <FlaskConical className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{exp.name}</h3>
                        <div className="flex items-center gap-1">
                          <Badge variant="secondary" className="font-mono text-[10px]">{exp.model}</Badge>
                          <Badge variant="outline" className="text-[10px]">v{exp.prompt_version}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    {scoreEntries.slice(0, 3).map(([key, value]) => (
                      <ScoreBar key={key} label={key} value={value} />
                    ))}
                    {scoreEntries.length > 3 && (
                      <p className="text-[10px] text-muted-foreground">+{scoreEntries.length - 3} more metrics</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Avg: {Math.round(avgScore * 100)}%</span>
                    </div>
                    <span>{formatRelativeTime(exp.created_at)}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <ExperimentDetailSheet experiment={selectedExperiment} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
