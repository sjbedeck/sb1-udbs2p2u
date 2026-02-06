import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAppStore } from '@/stores/app-store';
import { AppShell } from '@/components/layout/AppShell';
import { CommandPalette } from '@/components/command/CommandPalette';

const HomePage = lazy(() => import('@/pages/HomePage'));
const TasksPage = lazy(() => import('@/pages/TasksPage'));
const AgentsPage = lazy(() => import('@/pages/AgentsPage'));
const AgentBuilderPage = lazy(() => import('@/pages/AgentBuilderPage'));
const WorkflowsPage = lazy(() => import('@/pages/WorkflowsPage'));
const TerminalPage = lazy(() => import('@/pages/TerminalPage'));
const KnowledgePage = lazy(() => import('@/pages/KnowledgePage'));
const SkillsPage = lazy(() => import('@/pages/SkillsPage'));
const PlaybooksPage = lazy(() => import('@/pages/PlaybooksPage'));
const TracesPage = lazy(() => import('@/pages/TracesPage'));
const ExperimentsPage = lazy(() => import('@/pages/ExperimentsPage'));
const ToolsPage = lazy(() => import('@/pages/ToolsPage'));
const SettingsPage = lazy(() => import('@/pages/SettingsPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
    },
  },
});

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-xs text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function ThemeInit() {
  const { theme } = useAppStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeInit />
      <CommandPalette />
      <AppShell>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/tasks" component={TasksPage} />
            <Route path="/agents" component={AgentsPage} />
            <Route path="/agents/:id" component={AgentBuilderPage} />
            <Route path="/workflows" component={WorkflowsPage} />
            <Route path="/terminal" component={TerminalPage} />
            <Route path="/knowledge" component={KnowledgePage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/playbooks" component={PlaybooksPage} />
            <Route path="/traces" component={TracesPage} />
            <Route path="/experiments" component={ExperimentsPage} />
            <Route path="/tools" component={ToolsPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route>
              <div className="flex items-center justify-center h-64">
                <p className="text-sm text-muted-foreground">Page not found</p>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </AppShell>
    </QueryClientProvider>
  );
}

export default App;
