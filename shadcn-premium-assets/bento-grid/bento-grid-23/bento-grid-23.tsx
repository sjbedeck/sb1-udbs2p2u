import { CircleStopIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Orbiting } from '@/components/ui/orbiting'

import MCPServer from '@/components/shadcn-studio/blocks/bento-grid-23/mcp-server'
import FigmaToCode from '@/components/shadcn-studio/blocks/bento-grid-23/figma-to-code'
import ChatAnimation from '@/components/shadcn-studio/blocks/bento-grid-23/chat-animation'
import CopyPrompt from '@/components/shadcn-studio/blocks/bento-grid-23/copy-prompt'

const BentoGrid = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          <div className='flex flex-col gap-6 md:max-md:flex-row'>
            {/* MCP Server Card */}
            <Card className='border-0 shadow-none'>
              <CardHeader>
                <CardTitle className='text-xl'>MCP Server</CardTitle>
                <CardDescription className='text-base'>
                  Seamlessly integrates into your favorite IDE, generating stunning components, blocks, and pages by
                  leveraging shadcn/studio premium components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MCPServer />
              </CardContent>
            </Card>

            {/* Figma to Code Card */}
            <Card className='flex-1 border-0 shadow-none'>
              <CardHeader>
                <CardTitle className='text-xl'>Figma to Code</CardTitle>
                <CardDescription className='text-base'>
                  A comprehensive, fully customizable library of component variants, blocks, & templates to speed up
                  development.
                </CardDescription>
              </CardHeader>
              <div className='flex flex-1 items-center justify-center'>
                <FigmaToCode />
              </div>
            </Card>
          </div>

          {/* Theme Builder Card */}
          <Card className='border-0 shadow-none'>
            <CardHeader>
              <CardTitle className='text-xl'>AI-Powered shadcn Theme Builder</CardTitle>
              <CardDescription className='text-base'>
                Design your shadcn theme with AI or from scratch, and preview changes in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent className='px-3'>
              <div className='divide-y overflow-hidden rounded-xl border'>
                <div className='px-4 py-3 text-center font-semibold'>AI Theme Generator</div>
                <div className='flex items-center justify-between gap-6 px-4 py-3'>
                  <div className='font-semibold'>LLM Configuration</div>
                  <div className='text-muted-foreground flex items-center gap-1.5'>claude-3-7-sonnet</div>
                </div>

                <div className='h-122 px-2 py-3'>
                  <ChatAnimation />
                </div>

                <div className='text-muted-foreground px-4 py-3 text-sm'>Describe your theme or ask for changes...</div>
                <div className='text-muted-foreground flex items-center justify-between p-2 text-sm'>
                  <Button variant='ghost' className='h-7 cursor-pointer px-2 py-1 text-xs'>
                    <PlusIcon className='size-3' />
                    New chat
                  </Button>
                  <Button variant='ghost' className='h-7 cursor-pointer px-2 py-1 text-xs'>
                    <span>Enhance</span>
                  </Button>
                  <span className='text-xs'>25/500</span>
                  <Button variant='destructive' className='h-7 cursor-pointer px-2 py-1 text-xs'>
                    <CircleStopIcon />
                    Stop
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className='grid grid-cols-1 gap-6 md:max-xl:col-span-2 md:max-xl:grid-cols-2'>
            {/* Copy Prompt Card */}
            <Card className='border-0 shadow-none'>
              <CardHeader>
                <CardTitle className='text-xl'>Copy Prompt & Open in V0</CardTitle>
                <CardDescription className='text-base'>
                  Easily copy prompts to your preferred AI tool - v0, Bolt, or Lovable - or open component or block
                  directly in v0.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CopyPrompt />
              </CardContent>
            </Card>

            {/* AI Stack Card */}
            <Card className='relative overflow-hidden border-0 shadow-none'>
              <CardHeader className='flex flex-1 flex-col'>
                <CardTitle className='text-xl'>Ultimate AI Stack</CardTitle>
                <CardDescription className='text-base'>
                  React.js, TypeScript, Tailwind with CVA, and shadcn-like components - designed for flawless AI
                  integration.
                </CardDescription>
              </CardHeader>
              <CardContent className='overflow-hidden pt-5'>
                <div className='flex h-34 items-start justify-center'>
                  <div className='relative flex size-80 shrink-0 flex-col items-center justify-center'>
                    <Orbiting radius={156} duration={30} dashed={true} dashedGap={10}>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/react-logo.png?width=32&format=auto'
                          alt='React Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/tailwind-logo.png?width=32&format=auto'
                          alt='Tailwind Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/cva-icon.png?width=32&format=auto'
                          alt='CVA Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/nextjs-logo.png?width=32&format=auto'
                          alt='Next.js Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shadcn-logo.png?width=32&format=auto'
                          alt='Shadcn Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/react-logo.png?width=32&format=auto'
                          alt='React Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/tailwind-logo.png?width=32&format=auto'
                          alt='Tailwind Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/typescript-icon.png?width=32&format=auto'
                          alt='TypeScript Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/nextjs-logo.png?width=32&format=auto'
                          alt='Next.js Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                      <div className='flex size-10.5 items-center justify-center rounded-full border bg-white dark:bg-neutral-700'>
                        <img
                          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shadcn-logo.png?width=32&format=auto'
                          alt='Shadcn Logo'
                          className='w-8 rounded-full'
                        />
                      </div>
                    </Orbiting>
                  </div>
                </div>
              </CardContent>
              <div className='from-background absolute bottom-6 z-1 h-15 w-full bg-gradient-to-t to-transparent' />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
