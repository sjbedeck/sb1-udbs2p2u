import { CircleStopIcon, PlusIcon, RedoIcon, UndoIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MotionPreset } from '@/components/ui/motion-preset'

import ThemeSharing from '@/components/shadcn-studio/blocks/bento-grid-21/theme-sharing'
import ColorContrast from '@/components/shadcn-studio/blocks/bento-grid-21/color-contrast'
import ThemeRegistry from '@/components/shadcn-studio/blocks/bento-grid-21/theme-registry'
import ChatAnimation from '@/components/shadcn-studio/blocks/bento-grid-21/chat-animation'

const BentoGrid = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8'>
        <div className='flex flex-col gap-6 md:max-lg:flex-row'>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            transition={{ duration: 0.45 }}
            className='flex-1 md:max-lg:w-1/2'
          >
            <Card className='h-full overflow-hidden border-0 shadow-none'>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>Theme Sharing & Collaboration</CardTitle>
                <CardDescription className='text-base'>
                  Effortlessly save & share your themes with colleagues or the community, enabling collaboration and
                  feedback on your designs.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex justify-center'>
                <ThemeSharing />
              </CardContent>
            </Card>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.15}
            transition={{ duration: 0.45 }}
            className='md:max-lg:w-1/2'
          >
            <Card className='h-full justify-between overflow-hidden border-0 pb-0 shadow-none'>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>Undo & Redo Changes</CardTitle>
                <CardDescription className='text-base'>
                  Keep track of your customizations with our powerful undo/redo system that remembers your last 30
                  changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue='undo' className='items-center gap-6'>
                  <TabsList className='h-9.5'>
                    <TabsTrigger value='undo' className='h-8 px-3 text-base'>
                      <UndoIcon />
                      Undo
                    </TabsTrigger>
                    <TabsTrigger value='redo' className='h-8 px-3 text-base'>
                      <RedoIcon />
                      Redo
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value='undo' className='flex w-full justify-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/pro-features-undo.png?width=398&format=auto'
                      alt='Undo Feature'
                      className='aspect-398/229 w-full max-w-100 rounded-t-md border border-b-0 dark:hidden'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/pro-features-undo-dark.png?width=398&format=auto'
                      alt='Undo Feature'
                      className='hidden aspect-398/229 w-full max-w-100 rounded-t-md border border-b-0 dark:inline-block'
                    />
                  </TabsContent>
                  <TabsContent value='redo' className='flex w-full justify-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/pro-features-redo.png?width=398&format=auto'
                      alt='Redo Feature'
                      className='aspect-398/229 w-full max-w-100 rounded-t-md border border-b-0 dark:hidden'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/pro-features-redo-dark.png?width=398&format=auto'
                      alt='Redo Feature'
                      className='hidden aspect-398/229 w-full max-w-100 rounded-t-md border border-b-0 dark:inline-block'
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </MotionPreset>
        </div>

        <MotionPreset fade blur slide={{ direction: 'down', offset: 75 }} delay={0.3} transition={{ duration: 0.45 }}>
          <Card className='h-full justify-between overflow-hidden border-0 shadow-none'>
            <CardHeader className='text-center'>
              <CardTitle className='text-xl font-semibold'>AI Theme Generation</CardTitle>
              <CardDescription className='text-base'>
                Generate stunning themes with AI prompts, reference designs with @Theme, and track progress with
                checkpoints.
              </CardDescription>
            </CardHeader>
            <CardContent className='px-3'>
              <div className='divide-y overflow-hidden rounded-xl border'>
                <div className='px-4 py-3 text-center font-semibold'>AI Theme Generator</div>
                <div className='flex items-center justify-between gap-6 px-4 py-3'>
                  <div className='text-sm font-medium'>LLM Configuration</div>
                  <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>claude-3-7-sonnet</div>
                </div>
                <div className='h-120 px-2 py-3'>
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
        </MotionPreset>

        <div className='flex flex-col gap-6 md:max-lg:flex-row'>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.45}
            transition={{ duration: 0.45 }}
            className='flex-1 md:max-lg:w-1/2'
          >
            <Card className='h-full justify-between gap-12 overflow-hidden border-0 pb-0 shadow-none md:gap-8'>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>Color contrast validation</CardTitle>
                <CardDescription className='text-base'>
                  Instantly check your theme&apos;s color contrast for WCAG compliance and ensure accessibility with
                  real-time feedback.
                </CardDescription>
              </CardHeader>
              <ColorContrast />
            </Card>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 75 }}
            delay={0.6}
            transition={{ duration: 0.45 }}
            className='md:max-lg:w-1/2'
          >
            <Card className='h-full justify-between overflow-hidden border-0 pb-0 shadow-none'>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>Theme Registry</CardTitle>
                <CardDescription className='text-base'>
                  Access your personal registry of custom themes generated with the Theme Generator, alongside the
                  built-in theme registry.
                </CardDescription>
              </CardHeader>
              <ThemeRegistry />
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
