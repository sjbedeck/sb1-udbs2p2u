import { useLocation } from 'wouter';
import { Sun, Moon, Command, Bell } from 'lucide-react';
import { useAppStore } from '@/stores/app-store';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const routeLabels: Record<string, string> = {
  '/': 'Command Center',
  '/tasks': 'Tasks',
  '/agents': 'Agents',
  '/workflows': 'Workflows',
  '/terminal': 'Terminal',
  '/knowledge': 'Knowledge',
  '/skills': 'Skills',
  '/playbooks': 'Playbooks',
  '/traces': 'Traces',
  '/experiments': 'Experiments',
  '/tools': 'Tools',
  '/settings': 'Settings',
};

export function TopBar() {
  const [location] = useLocation();
  const { theme, toggleTheme, setCommandPaletteOpen } = useAppStore();

  const pageLabel = routeLabels[location] || 'Dashboard';

  return (
    <header className="flex items-center justify-between border-b bg-card px-6 h-14 shrink-0">
      <div className="flex items-center gap-2">
        <h1 className="text-sm font-semibold">{pageLabel}</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground"
          onClick={() => setCommandPaletteOpen(true)}
        >
          <Command className="h-3 w-3" />
          <span>Search...</span>
          <kbd className="pointer-events-none ml-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">&#8984;</span>K
          </kbd>
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarFallback className="text-xs bg-primary/10 text-primary">YB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
