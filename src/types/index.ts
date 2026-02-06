export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed' | 'blocked' | 'cancelled';
export type TaskPriority = 'P0' | 'P1' | 'P2' | 'P3';
export type AgentStatus = 'idle' | 'working' | 'offline';
export type SessionType = 'tmux' | 'shell' | 'ide';
export type SessionStatus = 'active' | 'inactive' | 'terminated';
export type WorkflowStatus = 'draft' | 'published' | 'running' | 'archived';
export type TraceStatus = 'success' | 'error' | 'running';
export type KnowledgeType = 'file' | 'url' | 'markdown';
export type PlaybookScope = 'team' | 'community';

export interface Task {
  id: string;
  title: string;
  description: string;
  prompt: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigned_agent_id: string | null;
  branch: string | null;
  tags: string[];
  metadata: Record<string, unknown>;
  conversation_thread: ConversationMessage[];
  created_at: string;
  updated_at: string;
}

export interface ConversationMessage {
  id: string;
  role: 'user' | 'agent' | 'system';
  content: string;
  agent_name?: string;
  timestamp: string;
  type?: 'message' | 'delegation' | 'error' | 'step';
}

export interface Agent {
  id: string;
  role: string;
  name: string;
  description: string;
  status: AgentStatus;
  scopes: string[];
  skills: Record<string, unknown>;
  commands: string[];
  mcp_servers: string[];
  model: string;
  temperature: number;
  max_tokens: number;
  system_prompt: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  status: WorkflowStatus;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  created_at: string;
  updated_at: string;
}

export interface WorkflowNode {
  id: string;
  type: 'agent' | 'task' | 'trigger' | 'decision' | 'note';
  position: { x: number; y: number };
  data: Record<string, unknown>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

export interface TerminalSession {
  id: string;
  name: string;
  agent_id: string | null;
  task_id: string | null;
  type: SessionType;
  model: string;
  branch: string | null;
  status: SessionStatus;
  output_log: string;
  created_at: string;
  last_activity: string;
}

export interface KnowledgeFolder {
  id: string;
  name: string;
  parent_id: string | null;
  locked: boolean;
  created_at: string;
}

export interface KnowledgeItem {
  id: string;
  name: string;
  type: KnowledgeType;
  content: string | null;
  file_path: string | null;
  url: string | null;
  folder_id: string | null;
  author: string;
  enabled: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  path: string;
  readme_content: string;
  installed_by: string[];
  created_at: string;
}

export interface Playbook {
  id: string;
  name: string;
  description: string;
  steps: PlaybookStep[];
  success_criteria: string[];
  guardrails: string[];
  variables: Record<string, unknown>;
  author: string;
  scope: PlaybookScope;
  created_at: string;
  updated_at: string;
}

export interface PlaybookStep {
  id: string;
  order: number;
  title: string;
  description: string;
  agent_id?: string;
}

export interface Trace {
  id: string;
  name: string;
  status: TraceStatus;
  total_cost: number;
  latency_ms: number;
  total_tokens: number;
  model: string;
  task_id: string | null;
  created_at: string;
}

export interface Span {
  id: string;
  trace_id: string;
  parent_id: string | null;
  name: string;
  type: string;
  status: string;
  latency_ms: number;
  tokens: number;
  cost: number;
  input_messages: SpanMessage[];
  output_messages: SpanMessage[];
  attributes: Record<string, unknown>;
  created_at: string;
}

export interface SpanMessage {
  role: 'system' | 'user' | 'assistant' | 'function';
  content: string;
  name?: string;
}

export interface Experiment {
  id: string;
  name: string;
  prompt_version: string;
  model: string;
  dataset_id: string;
  scores: Record<string, number>;
  trace_ids: string[];
  created_at: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  provider: string;
  inputs: ToolParam[];
  outputs: ToolParam[];
  documentation: string;
  verified: boolean;
  created_at: string;
}

export interface ToolParam {
  name: string;
  type: string;
  description: string;
  required: boolean;
}

export interface ActivityLogEntry {
  id: string;
  event_type: string;
  actor_type: 'agent' | 'user' | 'system';
  actor_id: string;
  description: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  context_window: number;
  max_output: number;
  cost_per_1k_input: number;
  cost_per_1k_output: number;
  tier: 'performance' | 'balanced' | 'cost-optimized';
}

export interface NavItem {
  path: string;
  label: string;
  icon: string;
  badge?: number;
}
