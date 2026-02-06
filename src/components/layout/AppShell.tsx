import { AppSidebar } from './AppSidebar';
import { TopBar } from './TopBar';
import { useAppStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { sidebarCollapsed } = useAppStore();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AppSidebar />
      <div
        className={cn(
          'flex flex-1 flex-col min-w-0 transition-all duration-200',
          sidebarCollapsed ? 'ml-0' : 'ml-0'
        )}
      >
        <TopBar />
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          {children}
        </main>
      </div>
    </div>
  );
}
