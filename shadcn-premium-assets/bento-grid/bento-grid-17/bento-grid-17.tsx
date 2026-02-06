import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

import AssignTaskCard from '@/components/shadcn-studio/blocks/bento-grid-17/assign-task-card'
import type { TeamImagesType } from '@/components/shadcn-studio/blocks/bento-grid-17/assign-task-card'
import Checklist from '@/components/shadcn-studio/blocks/bento-grid-17/checklist'
import { Cover } from '@/components/shadcn-studio/blocks/bento-grid-17/cover'
import Globe from '@/components/shadcn-studio/blocks/bento-grid-17/globe'

const TeamImages: TeamImagesType[] = [
  {
    images: [
      { index: 0, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-81.png' },
      { index: 2, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-79.png' },
      { index: 3, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-78.png' },
      { index: 7, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-80.png' }
    ],
    team: 'Frontend developers'
  },
  {
    images: [
      { index: 1, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-76.png' },
      { index: 3, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-77.png' },
      { index: 5, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-82.png' },
      { index: 8, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-78.png' }
    ],
    team: 'Marketing members'
  },
  {
    images: [
      { index: 0, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-78.png' },
      { index: 3, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-81.png' },
      { index: 5, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-80.png' },
      { index: 7, src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-77.png' }
    ],
    team: 'UI/UX Designers'
  }
]

const BentoGrid = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3'>
        {/* Column 1 */}
        {/* Assign Task Card */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} transition={{ duration: 0.5 }}>
          <AssignTaskCard TeamImages={TeamImages} />
        </MotionPreset>

        {/* Column 2 */}
        <div className='grid grid-rows-2 gap-6'>
          {/* Boost Efficiency Card */}
          <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.6} transition={{ duration: 0.5 }}>
            <Card className='h-full'>
              <Cover className='flex h-27 items-center justify-center overflow-hidden'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-97.png'
                  alt='rocket'
                  className='h-19.25'
                />
              </Cover>
              <CardContent className='flex flex-col gap-1'>
                <MotionPreset
                  component='h3'
                  fade
                  blur
                  slide={{ direction: 'down', offset: 15 }}
                  delay={0.75}
                  transition={{ duration: 0.5 }}
                  className='text-lg font-medium'
                >
                  Boost Efficiency
                </MotionPreset>
                <MotionPreset
                  component='p'
                  fade
                  blur
                  slide={{ direction: 'down', offset: 15 }}
                  delay={0.9}
                  transition={{ duration: 0.5 }}
                  className='text-muted-foreground'
                >
                  Help your team achieve greater efficiency with tools that support focus, reduce bottlenecks, and
                  encourage smoother collaboration.
                </MotionPreset>
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Task Tracking Card */}
          <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={1.05} transition={{ duration: 0.5 }}>
            <Card className='h-full items-center justify-between'>
              <div className='relative px-6'>
                <Checklist />
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_50%,var(--card)_100%)]' />
              </div>
              <CardContent className='flex flex-col gap-1'>
                <MotionPreset
                  component='h3'
                  fade
                  blur
                  slide={{ direction: 'down', offset: 15 }}
                  delay={1.2}
                  transition={{ duration: 0.5 }}
                  className='text-lg font-medium'
                >
                  Task Tracking
                </MotionPreset>
                <MotionPreset
                  component='p'
                  fade
                  blur
                  slide={{ direction: 'down', offset: 15 }}
                  delay={1.35}
                  transition={{ duration: 0.5 }}
                  className='text-muted-foreground'
                >
                  Maintain accurate accounting of tasks, ensuring visibility into progress and completion history across
                  the team.
                </MotionPreset>
              </CardContent>
            </Card>
          </MotionPreset>
        </div>

        {/* Column 3 */}
        {/* Global Schedule Card */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={1.5}
          transition={{ duration: 0.5 }}
          className='h-full min-h-150 md:max-xl:col-span-2'
        >
          <Card className='h-full justify-between overflow-hidden pb-0'>
            <CardContent className='flex flex-col gap-1'>
              <MotionPreset
                component='h3'
                fade
                blur
                slide={{ direction: 'down', offset: 15 }}
                delay={1.65}
                transition={{ duration: 0.5 }}
                className='text-lg font-medium'
              >
                Global Schedule
              </MotionPreset>
              <MotionPreset
                component='p'
                fade
                blur
                slide={{ direction: 'down', offset: 15 }}
                delay={1.8}
                transition={{ duration: 0.5 }}
                className='text-muted-foreground'
              >
                Collaborate seamlessly across time zones with built-in scheduling that keeps deadlines aligned for
                global teammates.
              </MotionPreset>
            </CardContent>
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.95}
              transition={{ duration: 0.5 }}
              className='relative flex-1'
            >
              <Globe className='-bottom-70 -left-12 size-200 md:max-xl:-bottom-90 md:max-xl:left-1/2 md:max-xl:-translate-x-1/2' />
            </MotionPreset>
          </Card>
        </MotionPreset>
      </div>
    </section>
  )
}

export default BentoGrid
