import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'wouter';
import {
  Home, ListTodo, Bot, GitBranch, Terminal, BookOpen,
  Puzzle, FileText, Activity, FlaskConical, Wrench, Settings, Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores/app-store';

const commands = [
  { id: 'home', label: 'Home', icon: Home, path: '/', group: 'Navigation' },
  { id: 'tasks', label: 'Tasks', icon: ListTodo, path: '/tasks', group: 'Navigation' },
  { id: 'agents', label: 'Agents', icon: Bot, path: '/agents', group: 'Navigation' },
  { id: 'workflows', label: 'Workflows', icon: GitBranch, path: '/workflows', group: 'Navigation' },
  { id: 'terminal', label: 'Terminal', icon: Terminal, path: '/terminal', group: 'Navigation' },
  { id: 'knowledge', label: 'Knowledge', icon: BookOpen, path: '/knowledge', group: 'Navigation' },
  { id: 'skills', label: 'Skills', icon: Puzzle, path: '/skills', group: 'Navigation' },
  { id: 'playbooks', label: 'Playbooks', icon: FileText, path: '/playbooks', group: 'Navigation' },
  { id: 'traces', label: 'Traces', icon: Activity, path: '/traces', group: 'Navigation' },
  { id: 'experiments', label: 'Experiments', icon: FlaskConical, path: '/experiments', group: 'Navigation' },
  { id: 'tools', label: 'Tools', icon: Wrench, path: '/tools', group: 'Navigation' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings', group: 'Navigation' },
];

export function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useAppStore();
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback((cmd: typeof commands[0]) => {
    setCommandPaletteOpen(false);
    setQuery('');
    setLocation(cmd.path);
  }, [setCommandPaletteOpen, setLocation]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  useEffect(() => {
    if (commandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      handleSelect(filtered[selectedIndex]);
    } else if (e.key === 'Escape') {
      setCommandPaletteOpen(false);
    }
  };

  if (!commandPaletteOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setCommandPaletteOpen(false)} />
      <div className="fixed left-1/2 top-[20%] z-[101] w-full max-w-lg -translate-x-1/2 animate-fade-in">
        <div className="overflow-hidden rounded-xl border bg-popover shadow-2xl">
          <div className="flex items-center border-b px-4">
            <Search className="h-4 w-4 text-muted-foreground mr-2 shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search..."
              className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="ml-2 inline-flex h-5 shrink-0 items-center rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>
          <div className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
            {filtered.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">No results found.</p>
            ) : (
              filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => handleSelect(cmd)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                    i === selectedIndex
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50'
                  )}
                >
                  <cmd.icon className="h-4 w-4" />
                  <span>{cmd.label}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{cmd.group}</span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
