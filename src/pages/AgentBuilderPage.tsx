import { useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { ArrowLeft, Save, Bot, Cpu, Shield, Code2, BookOpen, Wrench, Puzzle, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { MODEL_OPTIONS } from '@/lib/constants';

export default function AgentBuilderPage() {
  const [, setLocation] = useLocation();
  const params = useParams();
  const isNew = params?.id === 'new';
  const [activeTab, setActiveTab] = useState('general');

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('claude-sonnet-4');
  const [temperature, setTemperature] = useState('0.7');
  const [maxTokens, setMaxTokens] = useState('8192');
  const [systemPrompt, setSystemPrompt] = useState('');

  const tabs = [
    { value: 'general', label: 'General', icon: Bot },
    { value: 'model', label: 'Model', icon: Cpu },
    { value: 'prompt', label: 'Prompt', icon: Code2 },
    { value: 'scopes', label: 'Scopes', icon: Shield },
    { value: 'skills', label: 'Skills', icon: Puzzle },
    { value: 'tools', label: 'Tools', icon: Wrench },
    { value: 'knowledge', label: 'Knowledge', icon: BookOpen },
    { value: 'testing', label: 'Testing', icon: TestTube },
  ];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setLocation('/agents')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-lg font-semibold">{isNew ? 'New Agent' : 'Edit Agent'}</h2>
            <p className="text-sm text-muted-foreground">Configure agent capabilities and behavior</p>
          </div>
        </div>
        <Button size="sm">
          <Save className="h-4 w-4 mr-1" /> Save Agent
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="gap-1.5">
              <tab.icon className="h-3 w-3" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader><CardTitle className="text-sm">General Information</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Name</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Agent name..." />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Role</label>
                  <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. Code Reviewer, DevOps..." />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Description</label>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What does this agent do?" rows={3} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="model">
          <Card>
            <CardHeader><CardTitle className="text-sm">Model Configuration</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Select Model</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {MODEL_OPTIONS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setModel(m.id)}
                      className={`flex items-start gap-3 rounded-lg border p-3 text-left transition-all ${model === m.id ? 'border-primary bg-primary/5' : 'hover:border-primary/30'}`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{m.name}</span>
                          <Badge variant="secondary" className="text-[10px]">{m.tier}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{m.provider}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">
                          ${m.cost_per_1k_input}/1K in | ${m.cost_per_1k_output}/1K out
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Temperature</label>
                  <Input type="number" step="0.1" min="0" max="2" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Max Tokens</label>
                  <Input type="number" value={maxTokens} onChange={(e) => setMaxTokens(e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prompt">
          <Card>
            <CardHeader><CardTitle className="text-sm">System Prompt</CardTitle></CardHeader>
            <CardContent>
              <Textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                placeholder="You are a helpful agent that..."
                className="font-mono text-xs min-h-[300px]"
                rows={15}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scopes">
          <Card>
            <CardHeader><CardTitle className="text-sm">Permission Scopes</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {['file:read', 'file:write', 'terminal:execute', 'git:push', 'api:external', 'db:read', 'db:write'].map((scope) => (
                <div key={scope} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium font-mono">{scope}</p>
                    <p className="text-xs text-muted-foreground">Allow agent to {scope.replace(':', ' ')}</p>
                  </div>
                  <Switch checked={false} onCheckedChange={() => {}} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader><CardTitle className="text-sm">Assigned Skills</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Select skills from the skill library to assign to this agent.</p>
              <div className="mt-4 rounded-lg border border-dashed p-8 text-center">
                <Puzzle className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No skills assigned yet. Browse the skill library to add skills.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools">
          <Card>
            <CardHeader><CardTitle className="text-sm">Available Tools</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Configure which tools this agent can access.</p>
              <div className="mt-4 rounded-lg border border-dashed p-8 text-center">
                <Wrench className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No tools configured yet. Add tools from the tools page.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge">
          <Card>
            <CardHeader><CardTitle className="text-sm">Knowledge Base</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Attach knowledge sources for retrieval-augmented generation.</p>
              <div className="mt-4 rounded-lg border border-dashed p-8 text-center">
                <BookOpen className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No knowledge sources attached yet.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing">
          <Card>
            <CardHeader><CardTitle className="text-sm">Test Agent</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Send a test message to preview agent behavior.</p>
              <div className="rounded-lg border bg-muted/30 p-4 min-h-[200px] mb-4">
                <p className="text-xs text-muted-foreground text-center mt-16">Test responses will appear here</p>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Type a test message..." className="flex-1" />
                <Button size="sm">Send Test</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
