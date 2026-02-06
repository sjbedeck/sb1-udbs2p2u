import { useState, useRef, useEffect } from 'react';
import { Plus, Terminal, Cpu, X, Maximize2, Minimize2, TerminalSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { EmptyState } from '@/components/shared/EmptyState';
import { useSupabaseQuery } from '@/hooks/useSupabaseQuery';
import { MODEL_OPTIONS } from '@/lib/constants';
import { formatRelativeTime } from '@/lib/utils';
import type { TerminalSession } from '@/types';

interface LocalSession {
  id: string;
  name: string;
  model: string;
  type: string;
  lines: string[];
  inputValue: string;
}

function TerminalPanel({ session, onInput, onClose, isMaximized, onToggleMaximize }: {
  session: LocalSession;
  onInput: (id: string, value: string) => void;
  onClose: (id: string) => void;
  isMaximized: boolean;
  onToggleMaximize: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [session.lines]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && session.inputValue.trim()) {
      onInput(session.id, session.inputValue);
    }
  };

  return (
    <Card className={`flex flex-col ${isMaximized ? 'fixed inset-4 z-50' : 'h-[400px]'}`}>
      <div className="flex items-center justify-between border-b px-3 py-2 bg-muted/30">
        <div className="flex items-center gap-2">
          <TerminalSquare className="h-3.5 w-3.5 text-green-500" />
          <span className="text-xs font-medium">{session.name}</span>
          <Badge variant="secondary" className="text-[10px] font-mono">{session.model}</Badge>
          <Badge variant="outline" className="text-[10px]">{session.type}</Badge>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onToggleMaximize}>
            {isMaximized ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive" onClick={() => onClose(session.id)}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#0d1117] p-3 font-mono text-xs scrollbar-thin">
        {session.lines.map((line, i) => (
          <div key={i} className="text-green-400 whitespace-pre-wrap leading-5">
            {line}
          </div>
        ))}
      </div>
      <div className="flex items-center border-t bg-[#0d1117] px-3 py-2">
        <span className="text-green-400 text-xs font-mono mr-2">$</span>
        <input
          value={session.inputValue}
          onChange={() => onInput(session.id, '')}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-green-400 text-xs font-mono outline-none placeholder:text-green-800"
          placeholder="Type a command..."
        />
      </div>
    </Card>
  );
}

export default function TerminalPage() {
  const { data: dbSessions } = useSupabaseQuery<TerminalSession>('sessions');
  const [sessions, setSessions] = useState<LocalSession[]>([]);
  const [newSessionModel, setNewSessionModel] = useState('claude-sonnet-4');
  const [newSessionType, setNewSessionType] = useState('shell');
  const [newSessionName, setNewSessionName] = useState('');
  const [maximizedId, setMaximizedId] = useState<string | null>(null);

  const createSession = () => {
    const name = newSessionName.trim() || `Session ${sessions.length + 1}`;
    const newSession: LocalSession = {
      id: crypto.randomUUID(),
      name,
      model: newSessionModel,
      type: newSessionType,
      lines: [
        `[${new Date().toLocaleTimeString()}] Session "${name}" started`,
        `Model: ${newSessionModel} | Type: ${newSessionType}`,
        `Ready for input...`,
        '',
      ],
      inputValue: '',
    };
    setSessions((prev) => [...prev, newSession]);
    setNewSessionName('');
  };

  const handleInput = (id: string, value: string) => {
    setSessions((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        if (!value) return { ...s, inputValue: '' };
        return {
          ...s,
          inputValue: '',
          lines: [
            ...s.lines,
            `$ ${value}`,
            `[${s.model}] Processing: "${value}"...`,
            `> Command executed successfully.`,
            '',
          ],
        };
      })
    );
  };

  const closeSession = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
    if (maximizedId === id) setMaximizedId(null);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Terminal</h2>
          <p className="text-sm text-muted-foreground">
            {sessions.length} active session{sessions.length !== 1 ? 's' : ''}
            {dbSessions && dbSessions.length > 0 && ` | ${dbSessions.length} saved`}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Launch Session</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[150px]">
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <Input value={newSessionName} onChange={(e) => setNewSessionName(e.target.value)} placeholder="Session name..." />
            </div>
            <div className="w-[200px]">
              <label className="text-xs text-muted-foreground mb-1 block">Model</label>
              <Select value={newSessionModel} onValueChange={setNewSessionModel}>
                {MODEL_OPTIONS.map((m) => (
                  <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="w-[120px]">
              <label className="text-xs text-muted-foreground mb-1 block">Type</label>
              <Select value={newSessionType} onValueChange={setNewSessionType}>
                <SelectItem value="shell">Shell</SelectItem>
                <SelectItem value="tmux">Tmux</SelectItem>
                <SelectItem value="ide">IDE</SelectItem>
              </Select>
            </div>
            <Button size="sm" onClick={createSession}>
              <Plus className="h-4 w-4 mr-1" /> Launch
            </Button>
          </div>
        </CardContent>
      </Card>

      {dbSessions && dbSessions.length > 0 && (
        <div>
          <h3 className="text-sm font-medium mb-2">Saved Sessions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {dbSessions.slice(0, 6).map((s) => (
              <Card key={s.id} className="hover:shadow-sm transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{s.name}</span>
                    <StatusBadge status={s.status} />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Cpu className="h-3 w-3" />
                    <span className="font-mono">{s.model}</span>
                    <Badge variant="outline" className="text-[10px]">{s.type}</Badge>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2">
                    Last active {formatRelativeTime(s.last_activity)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {sessions.length === 0 ? (
        <EmptyState
          icon={Terminal}
          title="No active sessions"
          description="Launch a terminal session to start working with your agents."
          actionLabel="Launch Session"
          onAction={createSession}
        />
      ) : (
        <div className={`grid gap-4 ${sessions.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {sessions.map((session) => (
            <TerminalPanel
              key={session.id}
              session={session}
              onInput={handleInput}
              onClose={closeSession}
              isMaximized={maximizedId === session.id}
              onToggleMaximize={() => setMaximizedId(maximizedId === session.id ? null : session.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
