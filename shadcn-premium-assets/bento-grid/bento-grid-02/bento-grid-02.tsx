import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/global-tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'

import NotificationStack from '@/components/shadcn-studio/blocks/bento-grid-02/notification-stack'
import type { NotificationCard } from '@/components/shadcn-studio/blocks/bento-grid-02/notification-stack'

const BentoGrid = ({ notifications }: { notifications: NotificationCard[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Header Section */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              New Features
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
          >
            Ship your website Quickly with Shadcn Studio
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
            className='text-muted-foreground text-xl'
          >
            Use our templates and components for a stunning, professional look. Save time with user-friendly,
            customizable designs.
          </MotionPreset>
        </div>

        {/* Grid Section */}
        <div className='space-y-6'>
          {/* Grid Row 1 */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Card 1 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={0.9}
              transition={{ duration: 0.5 }}
            >
              <Card className='bg-destructive/10 group relative flex h-full items-end gap-y-9 overflow-hidden border-0 pl-6 shadow-none lg:flex-row'>
                <div className='space-y-4 opacity-100 transition-opacity duration-700 group-hover:opacity-0 max-lg:pr-6'>
                  <h3 className='text-3xl font-semibold'>Launch your website swiftly with Shadcn Studio.</h3>
                  <p className='text-muted-foreground text-lg'>
                    Use our templates and components for a stunning, professional look.
                  </p>
                </div>

                <div className='h-82 w-64 shrink-0 overflow-hidden'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-6.png'
                    alt='Prebuilt template'
                    className='absolute right-0 h-82 w-99 translate-x-35 transition-all duration-700 group-hover:-translate-x-6'
                  />
                </div>
              </Card>
            </MotionPreset>

            {/* Card 2 */}
            <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={1} transition={{ duration: 0.5 }}>
              <Card className='bg-primary/10 h-full border-0 shadow-none'>
                <CardContent className='flex h-full flex-col justify-between gap-15'>
                  {/* Notifications stack */}
                  <NotificationStack notifications={notifications} />

                  <div className='space-y-4'>
                    <h3 className='text-3xl font-semibold'>Ship your website Quickly with Shadcn Studio</h3>
                    <p className='text-muted-foreground text-lg'>
                      Use our templates and components for a stunning, professional look. Save time with user-friendly,
                      customizable designs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </MotionPreset>
          </div>

          {/* Grid Row 2 */}
          <div className='grid gap-6 lg:grid-cols-5'>
            {/* Card 3 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.1}
              transition={{ duration: 0.5 }}
              className='lg:col-span-2'
            >
              <Card className='h-full border-0 bg-green-600/10 shadow-none dark:bg-green-400/10'>
                <CardContent className='flex flex-1 flex-col gap-4'>
                  <div className='flex min-h-38.5 flex-1 items-center justify-center -space-x-4'>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar className='ring-ring size-16.5 ring-2'>
                            <AvatarImage
                              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png'
                              alt='avatar'
                            />
                            <AvatarFallback>HL</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>Howard Lloyd</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar className='ring-ring size-19 ring-2'>
                            <AvatarImage
                              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png'
                              alt='avatar'
                            />
                            <AvatarFallback>OS</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>Olivia Sparks</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar className='ring-ring size-24 ring-2'>
                            <AvatarImage
                              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
                              alt='avatar'
                            />
                            <AvatarFallback>HR</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>Hallie Richards</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar className='ring-ring size-19 ring-2'>
                            <AvatarImage
                              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png'
                              alt='avatar'
                            />
                            <AvatarFallback>TH</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>Tom Hardy</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar className='ring-ring size-16.5 ring-2'>
                            <AvatarImage
                              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png'
                              alt='avatar'
                            />
                            <AvatarFallback>JW</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>Jenny Wilson</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <div className='space-y-4'>
                    <h3 className='text-3xl font-semibold'>Ship your website Quickly with Shadcn Studio</h3>
                    <p className='text-muted-foreground text-lg'>Save time with user-friendly, customizable designs.</p>
                  </div>
                </CardContent>
              </Card>
            </MotionPreset>

            {/* Card 4 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.2}
              transition={{ duration: 0.5 }}
              className='lg:col-span-3'
            >
              <Card className='group h-full overflow-hidden border-0 bg-amber-600/10 shadow-none dark:bg-amber-400/10'>
                <CardContent className='flex flex-1 items-end gap-4 max-sm:flex-wrap'>
                  <div className='space-y-4'>
                    <h3 className='text-3xl font-semibold'>Save time with customizable designs.</h3>
                    <p className='text-muted-foreground text-lg'>Save time with user-friendly, customizable designs.</p>
                  </div>

                  <div className='flex shrink-0 grow justify-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-7.png'
                      className='-mb-6 h-75 w-auto transition-all duration-500 group-hover:scale-105'
                      alt='Prebuilt template'
                    />
                  </div>
                </CardContent>
              </Card>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
