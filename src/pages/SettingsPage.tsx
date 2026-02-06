import { useState } from 'react';
import { User, Key, Cpu, Palette, Bell, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectItem } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '@/stores/app-store';
import { MODEL_OPTIONS } from '@/lib/constants';

const settingsSections = [
  { id: 'general', label: 'General', icon: User },
  { id: 'api-keys', label: 'API Keys', icon: Key },
  { id: 'models', label: 'Models', icon: Cpu },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('general');
  const { theme, setTheme } = useAppStore();
  const [defaultModel, setDefaultModel] = useState('claude-sonnet-4');

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your workspace configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <nav className="space-y-0.5">
            {settingsSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${activeSection === section.id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent'}`}
              >
                <section.icon className="h-4 w-4" />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-3 space-y-6">
          {activeSection === 'general' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">General Settings</CardTitle>
                <CardDescription>Manage your profile and workspace preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Display Name</label>
                    <Input defaultValue="Yogi" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Email</label>
                    <Input defaultValue="yogi@swarm.dev" type="email" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Workspace Name</label>
                  <Input defaultValue="Swarm Dashboard" />
                </div>
                <Separator />
                <Button size="sm">Save Changes</Button>
              </CardContent>
            </Card>
          )}

          {activeSection === 'api-keys' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">API Keys</CardTitle>
                <CardDescription>Manage provider API keys for your agents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Anthropic', 'OpenAI', 'Google AI'].map((provider) => (
                  <div key={provider} className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">{provider} API Key</label>
                      <Input type="password" placeholder={`sk-...`} />
                    </div>
                    <Badge variant="outline" className="text-[10px] mt-4">Not set</Badge>
                  </div>
                ))}
                <Separator />
                <Button size="sm">Save Keys</Button>
              </CardContent>
            </Card>
          )}

          {activeSection === 'models' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Model Configuration</CardTitle>
                <CardDescription>Set default models and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Default Model</label>
                  <Select value={defaultModel} onValueChange={setDefaultModel}>
                    {MODEL_OPTIONS.map((m) => (
                      <SelectItem key={m.id} value={m.id}>{m.name} ({m.provider})</SelectItem>
                    ))}
                  </Select>
                </div>
                <Separator />
                <h4 className="text-xs font-medium">Available Models</h4>
                <div className="space-y-2">
                  {MODEL_OPTIONS.map((m) => (
                    <div key={m.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div>
                        <p className="text-sm font-medium">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.provider} | {m.context_window.toLocaleString()} ctx</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-[10px]">{m.tier}</Badge>
                        <span className="text-xs font-mono text-muted-foreground">
                          ${m.cost_per_1k_input}/1K
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Appearance</CardTitle>
                <CardDescription>Customize the look and feel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Theme</p>
                    <p className="text-xs text-muted-foreground">Switch between light and dark mode</p>
                  </div>
                  <Select value={theme} onValueChange={(v) => setTheme(v as 'light' | 'dark')}>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </Select>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Compact Mode</p>
                    <p className="text-xs text-muted-foreground">Reduce spacing for denser layouts</p>
                  </div>
                  <Switch checked={false} onCheckedChange={() => {}} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Sidebar Collapsed by Default</p>
                    <p className="text-xs text-muted-foreground">Start with a collapsed sidebar</p>
                  </div>
                  <Switch checked={false} onCheckedChange={() => {}} />
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Notifications</CardTitle>
                <CardDescription>Configure alert preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: 'Task Completed', desc: 'Notify when a task finishes' },
                  { label: 'Task Failed', desc: 'Notify when a task encounters errors' },
                  { label: 'Agent Status Change', desc: 'Notify when agents go online/offline' },
                  { label: 'Workflow Triggers', desc: 'Notify on workflow execution events' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch checked={true} onCheckedChange={() => {}} />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {activeSection === 'security' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Security</CardTitle>
                <CardDescription>Manage security and access controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Require Approval for Destructive Actions</p>
                    <p className="text-xs text-muted-foreground">Agents must get approval before deleting files or data</p>
                  </div>
                  <Switch checked={true} onCheckedChange={() => {}} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Audit Logging</p>
                    <p className="text-xs text-muted-foreground">Log all agent actions for compliance</p>
                  </div>
                  <Switch checked={true} onCheckedChange={() => {}} />
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium mb-2">Session Timeout</p>
                  <Select value="30" onValueChange={() => {}}>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </Select>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
