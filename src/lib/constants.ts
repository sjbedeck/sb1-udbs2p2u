import type { ModelOption } from '@/types';

export const STATUS_CONFIG = {
  pending:   { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-800 dark:text-yellow-300', dot: 'bg-yellow-500', label: 'Pending' },
  running:   { bg: 'bg-blue-100 dark:bg-blue-900/30',     text: 'text-blue-800 dark:text-blue-300',     dot: 'bg-blue-500',   label: 'Running' },
  completed: { bg: 'bg-green-100 dark:bg-green-900/30',   text: 'text-green-800 dark:text-green-300',   dot: 'bg-green-500',  label: 'Completed' },
  failed:    { bg: 'bg-red-100 dark:bg-red-900/30',       text: 'text-red-800 dark:text-red-300',       dot: 'bg-red-500',    label: 'Failed' },
  blocked:   { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-800 dark:text-orange-300', dot: 'bg-orange-500', label: 'Blocked' },
  cancelled: { bg: 'bg-gray-100 dark:bg-gray-800/30',     text: 'text-gray-800 dark:text-gray-300',     dot: 'bg-gray-400',   label: 'Cancelled' },
  idle:      { bg: 'bg-gray-100 dark:bg-gray-800/30',     text: 'text-gray-600 dark:text-gray-400',     dot: 'bg-gray-400',   label: 'Idle' },
  working:   { bg: 'bg-blue-100 dark:bg-blue-900/30',     text: 'text-blue-800 dark:text-blue-300',     dot: 'bg-blue-500',   label: 'Working' },
  offline:   { bg: 'bg-gray-100 dark:bg-gray-800/30',     text: 'text-gray-500 dark:text-gray-500',     dot: 'bg-gray-300',   label: 'Offline' },
  active:    { bg: 'bg-green-100 dark:bg-green-900/30',   text: 'text-green-800 dark:text-green-300',   dot: 'bg-green-500',  label: 'Active' },
  inactive:  { bg: 'bg-gray-100 dark:bg-gray-800/30',     text: 'text-gray-600 dark:text-gray-400',     dot: 'bg-gray-400',   label: 'Inactive' },
  draft:     { bg: 'bg-gray-100 dark:bg-gray-800/30',     text: 'text-gray-600 dark:text-gray-400',     dot: 'bg-gray-400',   label: 'Draft' },
  published: { bg: 'bg-green-100 dark:bg-green-900/30',   text: 'text-green-800 dark:text-green-300',   dot: 'bg-green-500',  label: 'Published' },
  success:   { bg: 'bg-green-100 dark:bg-green-900/30',   text: 'text-green-800 dark:text-green-300',   dot: 'bg-green-500',  label: 'Success' },
  error:     { bg: 'bg-red-100 dark:bg-red-900/30',       text: 'text-red-800 dark:text-red-300',       dot: 'bg-red-500',    label: 'Error' },
} as const;

export const PRIORITY_CONFIG = {
  P0: { bg: 'bg-red-100 dark:bg-red-900/30',    text: 'text-red-700 dark:text-red-300',    border: 'border-red-200 dark:border-red-800',    label: 'Critical' },
  P1: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', label: 'High' },
  P2: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800', label: 'Medium' },
  P3: { bg: 'bg-green-100 dark:bg-green-900/30',  text: 'text-green-700 dark:text-green-300',  border: 'border-green-200 dark:border-green-800',  label: 'Low' },
} as const;

export const MODEL_OPTIONS: ModelOption[] = [
  { id: 'claude-opus-4', name: 'Claude Opus 4', provider: 'Anthropic', context_window: 200000, max_output: 32000, cost_per_1k_input: 0.015, cost_per_1k_output: 0.075, tier: 'performance' },
  { id: 'claude-sonnet-4', name: 'Claude Sonnet 4', provider: 'Anthropic', context_window: 200000, max_output: 64000, cost_per_1k_input: 0.003, cost_per_1k_output: 0.015, tier: 'balanced' },
  { id: 'claude-haiku-3.5', name: 'Claude Haiku 3.5', provider: 'Anthropic', context_window: 200000, max_output: 8192, cost_per_1k_input: 0.0008, cost_per_1k_output: 0.004, tier: 'cost-optimized' },
  { id: 'gpt-4.1', name: 'GPT-4.1', provider: 'OpenAI', context_window: 1047576, max_output: 32768, cost_per_1k_input: 0.002, cost_per_1k_output: 0.008, tier: 'balanced' },
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', context_window: 128000, max_output: 16384, cost_per_1k_input: 0.0025, cost_per_1k_output: 0.01, tier: 'balanced' },
  { id: 'gpt-4o-mini', name: 'GPT-4o Mini', provider: 'OpenAI', context_window: 128000, max_output: 16384, cost_per_1k_input: 0.00015, cost_per_1k_output: 0.0006, tier: 'cost-optimized' },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', context_window: 1000000, max_output: 65536, cost_per_1k_input: 0.00125, cost_per_1k_output: 0.01, tier: 'performance' },
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'Google', context_window: 1000000, max_output: 65536, cost_per_1k_input: 0.00015, cost_per_1k_output: 0.001, tier: 'cost-optimized' },
];

export const TOOL_CATEGORIES = [
  'All Tools',
  'Verified',
  'Community',
  'API Call',
  'Your Tools',
] as const;

export const TOOL_USE_CASES = [
  'Communications',
  'CRM',
  'Calendar',
  'Data Scraper',
  'File Handling',
  'Knowledge',
  'Code Analysis',
  'Search',
] as const;

export const SKILL_CATEGORIES = [
  'Code Generation',
  'Code Review',
  'Testing',
  'Documentation',
  'DevOps',
  'Data Analysis',
  'Research',
  'Communication',
] as const;
