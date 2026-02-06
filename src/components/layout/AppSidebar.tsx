import { useLocation, Link } from 'wouter';
import {
  Home, ListTodo, Bot, GitBranch, Terminal, BookOpen,
  Puzzle, FileText, Activity, FlaskConical, Wrench, Settings,
  PanelLeftClose, PanelLeft, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores/app-store';
import { Progress } from '@/components/ui/progress';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/tasks', label: 'Tasks', icon: ListTodo },
  { path: '/agents', label: 'Agents', icon: Bot },
  { path: '/workflows', label: 'Workflows', icon: GitBranch },
  { path: '/terminal', label: 'Terminal', icon: Terminal },
  { path: '/knowledge', label: 'Knowledge', icon: BookOpen },
  { path: '/skills', label: 'Skills', icon: Puzzle },
  { path: '/playbooks', label: 'Playbooks', icon: FileText },
  { path: '/traces', label: 'Traces', icon: Activity },
  { path: '/experiments', label: 'Experiments', icon: FlaskConical },
  { path: '/tools', label: 'Tools', icon: Wrench },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function AppSidebar() {
  const [location] = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useAppStore();

  return (
    <aside
      className={cn(
        'flex flex-col border-r bg-card transition-all duration-200',
        sidebarCollapsed ? 'w-16' : 'w-60'
      )}
    >
      <div className="flex items-center gap-2 border-b px-4 h-14">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
          S
        </div>
        {!sidebarCollapsed && (
          <span className="font-semibold text-sm">Swarm</span>
        )}
        <button
          onClick={toggleSidebar}
          className="ml-auto p-1 rounded hover:bg-accent text-muted-foreground"
        >
          {sidebarCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-0.5 scrollbar-thin">
        {navItems.map((item) => {
          const isActive = location === item.path || (item.path !== '/' && location.startsWith(item.path));
          return (
            <Link key={item.path} href={item.path}>
              <div
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      {!sidebarCollapsed && (
        <div className="border-t p-4 space-y-3">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Free Plan
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> Actions</span>
                <span>847 / 1000</span>
              </div>
              <Progress value={84.7} className="h-1" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Credits</span>
                <span>$12.34 / $25.00</span>
              </div>
              <Progress value={49.4} className="h-1" />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
