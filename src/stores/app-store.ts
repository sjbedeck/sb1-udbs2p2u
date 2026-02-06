import { create } from 'zustand';

interface AppState {
  sidebarCollapsed: boolean;
  theme: 'light' | 'dark';
  commandPaletteOpen: boolean;
  selectedTaskId: string | null;
  selectedAgentId: string | null;
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setSelectedTaskId: (id: string | null) => void;
  setSelectedAgentId: (id: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarCollapsed: false,
  theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'dark',
  commandPaletteOpen: false,
  selectedTaskId: null,
  selectedAgentId: null,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    set({ theme });
  },
  toggleTheme: () =>
    set((s) => {
      const next = s.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      return { theme: next };
    }),
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setSelectedAgentId: (id) => set({ selectedAgentId: id }),
}));
