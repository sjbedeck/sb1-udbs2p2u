import { useState } from 'react';
import {
  Plus, Search, BookOpen, Folder, File, Globe, FileText,
  MoreHorizontal, Eye, Trash2, Lock, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery, useSupabaseDelete } from '@/hooks/useSupabaseQuery';
import { formatRelativeTime } from '@/lib/utils';
import type { KnowledgeFolder, KnowledgeItem } from '@/types';

const typeIcons: Record<string, typeof File> = {
  file: File,
  url: Globe,
  markdown: FileText,
};

export default function KnowledgePage() {
  const { data: folders, isLoading: foldersLoading } = useSupabaseQuery<KnowledgeFolder>('knowledge_folders');
  const { data: items, isLoading: itemsLoading } = useSupabaseQuery<KnowledgeItem>('knowledge_items');
  const deleteItem = useSupabaseDelete('knowledge_items');
  const [search, setSearch] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const isLoading = foldersLoading || itemsLoading;

  const filteredItems = (items || []).filter((item) => {
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
    const matchFolder = !selectedFolder || item.folder_id === selectedFolder;
    return matchSearch && matchFolder;
  });

  const selectedFolderName = folders?.find((f) => f.id === selectedFolder)?.name;

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Knowledge Base</h2>
          <p className="text-sm text-muted-foreground">
            {folders?.length || 0} folders, {items?.length || 0} items
          </p>
        </div>
        <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Knowledge</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground uppercase tracking-wider">Folders</CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <button
                onClick={() => setSelectedFolder(null)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${!selectedFolder ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'}`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                All Items
                <Badge variant="secondary" className="ml-auto text-[10px]">{items?.length || 0}</Badge>
              </button>
              {(folders || []).map((folder) => {
                const count = items?.filter((i) => i.folder_id === folder.id).length || 0;
                return (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${selectedFolder === folder.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'}`}
                  >
                    <Folder className="h-3.5 w-3.5" />
                    <span className="truncate flex-1 text-left">{folder.name}</span>
                    {folder.locked && <Lock className="h-3 w-3" />}
                    <Badge variant="secondary" className="text-[10px] shrink-0">{count}</Badge>
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <div className="flex items-center gap-2">
            {selectedFolder && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>All</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground font-medium">{selectedFolderName}</span>
              </div>
            )}
            <div className="relative flex-1 max-w-sm ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search knowledge..." className="pl-9" />
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="animate-pulse"><CardContent className="p-4"><div className="h-4 w-1/3 rounded bg-muted" /></CardContent></Card>
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="No knowledge items"
              description={search ? 'Try a different search term.' : 'Add files, URLs, or markdown to build your knowledge base.'}
            />
          ) : (
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="p-3 font-medium text-muted-foreground">Name</th>
                      <th className="p-3 font-medium text-muted-foreground">Type</th>
                      <th className="p-3 font-medium text-muted-foreground">Author</th>
                      <th className="p-3 font-medium text-muted-foreground">Status</th>
                      <th className="p-3 font-medium text-muted-foreground">Updated</th>
                      <th className="p-3 w-10" />
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => {
                      const TypeIcon = typeIcons[item.type] || File;
                      return (
                        <tr key={item.id} className="border-b last:border-0 hover:bg-accent/30 transition-colors">
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <TypeIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                              <span className="font-medium truncate">{item.name}</span>
                            </div>
                          </td>
                          <td className="p-3"><Badge variant="secondary" className="text-[10px]">{item.type}</Badge></td>
                          <td className="p-3 text-muted-foreground text-xs">{item.author}</td>
                          <td className="p-3">
                            <Badge variant={item.enabled ? 'default' : 'outline'} className="text-[10px]">
                              {item.enabled ? 'Enabled' : 'Disabled'}
                            </Badge>
                          </td>
                          <td className="p-3 text-muted-foreground text-xs">{formatRelativeTime(item.updated_at)}</td>
                          <td className="p-3">
                            <DropdownMenu
                              trigger={
                                <Button variant="ghost" size="icon" className="h-7 w-7">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              }
                            >
                              <DropdownMenuItem><Eye className="h-3 w-3 mr-2" /> View</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => deleteItem.mutate(item.id)} className="text-destructive">
                                <Trash2 className="h-3 w-3 mr-2" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenu>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
