import { useState } from 'react';
import { Search, Puzzle, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery } from '@/hooks/useSupabaseQuery';
import { SKILL_CATEGORIES } from '@/lib/constants';
import type { Skill } from '@/types';

export default function SkillsPage() {
  const { data: skills, isLoading } = useSupabaseQuery<Skill>('skills');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = (skills || []).filter((s) => {
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all' || s.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Skills</h2>
          <p className="text-sm text-muted-foreground">{skills?.length || 0} skills available</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search skills..." className="pl-9" />
        </div>
      </div>

      <Tabs value={category} onValueChange={setCategory}>
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          {SKILL_CATEGORIES.map((cat) => (
            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={category}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-5">
                    <div className="h-5 w-28 rounded bg-muted mb-2" />
                    <div className="h-3 w-full rounded bg-muted mb-1" />
                    <div className="h-3 w-2/3 rounded bg-muted" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={Puzzle}
              title="No skills found"
              description={search || category !== 'all' ? 'Try adjusting your filters.' : 'No skills are available yet.'}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filtered.map((skill) => (
                <Card key={skill.id} className="group hover:shadow-md hover:border-primary/20 transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                          <Puzzle className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">{skill.name}</h3>
                          <Badge variant="secondary" className="text-[10px]">{skill.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{skill.description}</p>
                    <div className="flex items-center justify-between">
                      {skill.installed_by && skill.installed_by.length > 0 ? (
                        <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Installed by {skill.installed_by.length} agent{skill.installed_by.length > 1 ? 's' : ''}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">Not installed</span>
                      )}
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7"><ExternalLink className="h-3 w-3" /></Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Download className="h-3 w-3" /></Button>
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-mono mt-2 truncate">{skill.path}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
