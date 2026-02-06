import { useState } from 'react';
import { Search, Wrench, CheckCircle2, ExternalLink, Play, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery } from '@/hooks/useSupabaseQuery';
import { TOOL_CATEGORIES } from '@/lib/constants';
import type { Tool } from '@/types';

function ToolDetailSheet({ tool, open, onOpenChange }: { tool: Tool | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  if (!tool) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent onClose={() => onOpenChange(false)}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            {tool.name}
          </SheetTitle>
        </SheetHeader>
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground">{tool.description}</p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{tool.category}</Badge>
            <Badge variant="outline">{tool.provider}</Badge>
            {tool.verified && (
              <Badge variant="default" className="text-[10px]">
                <CheckCircle2 className="h-3 w-3 mr-1" /> Verified
              </Badge>
            )}
          </div>

          {tool.inputs && tool.inputs.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Inputs</h4>
              <div className="space-y-2">
                {tool.inputs.map((input) => (
                  <div key={input.name} className="rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium">{input.name}</span>
                      <Badge variant="outline" className="text-[10px]">{input.type}</Badge>
                      {input.required && <Badge variant="destructive" className="text-[10px]">required</Badge>}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{input.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.outputs && tool.outputs.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Outputs</h4>
              <div className="space-y-2">
                {tool.outputs.map((output) => (
                  <div key={output.name} className="rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium">{output.name}</span>
                      <Badge variant="outline" className="text-[10px]">{output.type}</Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{output.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.documentation && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Documentation</h4>
              <div className="rounded-lg border bg-muted/30 p-3 max-h-[200px] overflow-y-auto scrollbar-thin">
                <p className="text-xs whitespace-pre-wrap">{tool.documentation}</p>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              <Play className="h-3 w-3 mr-1" /> Test Tool
            </Button>
            <Button size="sm" variant="outline">
              <Code2 className="h-3 w-3 mr-1" /> View Source
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function ToolsPage() {
  const { data: tools, isLoading } = useSupabaseQuery<Tool>('tools');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Tools');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = (tools || []).filter((t) => {
    const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === 'All Tools' ||
      (category === 'Verified' && t.verified) ||
      t.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Tools</h2>
          <p className="text-sm text-muted-foreground">{tools?.length || 0} tools available</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tools..." className="pl-9" />
        </div>
      </div>

      <Tabs value={category} onValueChange={setCategory}>
        <TabsList className="w-full justify-start overflow-x-auto">
          {TOOL_CATEGORIES.map((cat) => (
            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={category}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="animate-pulse"><CardContent className="p-5"><div className="h-20 rounded bg-muted" /></CardContent></Card>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={Wrench}
              title="No tools found"
              description={search || category !== 'All Tools' ? 'Try adjusting your filters.' : 'No tools available yet.'}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filtered.map((tool) => (
                <Card
                  key={tool.id}
                  className="group hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
                  onClick={() => { setSelectedTool(tool); setDetailOpen(true); }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                          <Wrench className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-sm font-semibold">{tool.name}</h3>
                            {tool.verified && <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />}
                          </div>
                          <p className="text-[10px] text-muted-foreground">{tool.provider}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-[10px]">{tool.category}</Badge>
                      <span className="text-[10px] text-muted-foreground">
                        {tool.inputs?.length || 0} inputs, {tool.outputs?.length || 0} outputs
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <ToolDetailSheet tool={selectedTool} open={detailOpen} onOpenChange={setDetailOpen} />
    </div>
  );
}
