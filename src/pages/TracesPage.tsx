import { useState } from 'react';
import { Search, Activity, ChevronRight, Clock, DollarSign, Hash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime, formatCost, formatDuration, formatTokens } from '@/lib/utils';
import type { Trace, Span } from '@/types';

function TraceDetailSheet({ trace, open, onOpenChange }: { trace: Trace | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  const { data: spans } = useSupabaseQuery<Span>('spans');
  const traceSpans = spans?.filter((s) => s.trace_id === trace?.id) || [];

  if (!trace) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent onClose={() => onOpenChange(false)}>
        <SheetHeader>
          <SheetTitle>{trace.name}</SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <StatusBadge status={trace.status} />
            <Badge variant="secondary" className="font-mono text-[10px]">{trace.model}</Badge>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border p-3 text-center">
              <Clock className="h-4 w-4 mx-auto text-muted-foreground mb-1" />
              <p className="text-sm font-bold">{formatDuration(trace.latency_ms)}</p>
              <p className="text-[10px] text-muted-foreground">Latency</p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <DollarSign className="h-4 w-4 mx-auto text-muted-foreground mb-1" />
              <p className="text-sm font-bold">{formatCost(trace.total_cost)}</p>
              <p className="text-[10px] text-muted-foreground">Cost</p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <Hash className="h-4 w-4 mx-auto text-muted-foreground mb-1" />
              <p className="text-sm font-bold">{formatTokens(trace.total_tokens)}</p>
              <p className="text-[10px] text-muted-foreground">Tokens</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2">
              Span Tree ({traceSpans.length} spans)
            </h4>
            {traceSpans.length === 0 ? (
              <p className="text-xs text-muted-foreground">No spans recorded for this trace.</p>
            ) : (
              <div className="space-y-1">
                {traceSpans.map((span) => (
                  <div key={span.id} className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs font-medium">{span.name}</span>
                        <Badge variant="outline" className="text-[10px]">{span.type}</Badge>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{formatDuration(span.latency_ms)}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground pl-5">
                      <span>{formatTokens(span.tokens)} tokens</span>
                      <span>{formatCost(span.cost)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-[10px] text-muted-foreground">
            Started {formatRelativeTime(trace.created_at)}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function TracesPage() {
  const { data: traces, isLoading } = useSupabaseQuery<Trace>('traces');
  const [search, setSearch] = useState('');
  const [selectedTrace, setSelectedTrace] = useState<Trace | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = (traces || []).filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalCost = traces?.reduce((sum, t) => sum + (t.total_cost || 0), 0) || 0;
  const avgLatency = traces?.length ? traces.reduce((sum, t) => sum + t.latency_ms, 0) / traces.length : 0;

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Traces</h2>
          <p className="text-sm text-muted-foreground">{traces?.length || 0} traces recorded</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Total Traces</p>
            <p className="text-xl font-bold">{traces?.length || 0}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Total Cost</p>
            <p className="text-xl font-bold">{formatCost(totalCost)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Avg Latency</p>
            <p className="text-xl font-bold">{formatDuration(avgLatency)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Success Rate</p>
            <p className="text-xl font-bold">
              {traces?.length ? Math.round((traces.filter((t) => t.status === 'success').length / traces.length) * 100) : 0}%
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search traces..." className="pl-9" />
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="animate-pulse"><CardContent className="p-4"><div className="h-5 w-1/3 rounded bg-muted" /></CardContent></Card>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Activity}
          title="No traces found"
          description={search ? 'Try adjusting your search.' : 'Traces will appear here as your agents run.'}
        />
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-3 font-medium text-muted-foreground">Status</th>
                  <th className="p-3 font-medium text-muted-foreground">Name</th>
                  <th className="p-3 font-medium text-muted-foreground">Model</th>
                  <th className="p-3 font-medium text-muted-foreground">Latency</th>
                  <th className="p-3 font-medium text-muted-foreground">Tokens</th>
                  <th className="p-3 font-medium text-muted-foreground">Cost</th>
                  <th className="p-3 font-medium text-muted-foreground">Time</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((trace) => (
                  <tr
                    key={trace.id}
                    className="border-b last:border-0 hover:bg-accent/30 transition-colors cursor-pointer"
                    onClick={() => { setSelectedTrace(trace); setDetailOpen(true); }}
                  >
                    <td className="p-3"><StatusBadge status={trace.status} /></td>
                    <td className="p-3 font-medium">{trace.name}</td>
                    <td className="p-3"><Badge variant="secondary" className="font-mono text-[10px]">{trace.model}</Badge></td>
                    <td className="p-3 text-xs font-mono">{formatDuration(trace.latency_ms)}</td>
                    <td className="p-3 text-xs font-mono">{formatTokens(trace.total_tokens)}</td>
                    <td className="p-3 text-xs font-mono">{formatCost(trace.total_cost)}</td>
                    <td className="p-3 text-xs text-muted-foreground">{formatRelativeTime(trace.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <TraceDetailSheet trace={selectedTrace} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
