import { ArrowRightIcon, ChartColumnStackedIcon, Share2Icon, StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import StatisticsSalesOverviewCard from '@/components/shadcn-studio/blocks/statistics-sales-overview-card'
import StatisticsActivityCard from '@/components/shadcn-studio/blocks/statistics-activity-card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Ripple } from '@/components/shadcn-studio/blocks/motion-ripple'

const AboutUs = () => {
  return (
    <section className='overflow-x-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-16 xl:h-130 xl:grid-cols-2'>
          <div className='max-w-2xl space-y-8 sm:space-y-16 lg:space-y-24'>
            <div className='space-y-4'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                blur
                slide
                transition={{ duration: 0.5 }}
                delay={0.1}
              >
                Behind Every Great Brand Is a Team with a Purpose
              </MotionPreset>
              <MotionPreset
                component='p'
                fade
                blur
                slide
                transition={{ duration: 0.5 }}
                className='text-muted-foreground text-xl'
                delay={0.2}
              >
                We’re a passionate team united by a common goal — to create meaningful solutions that make a real
                impact. From humble beginnings to ambitious visions, our journey is driven by innovation, trust, and a
                commitment to excellence.
              </MotionPreset>

              <div className='flex gap-4'>
                <MotionPreset fade blur slide delay={0.3} transition={{ duration: 0.5 }}>
                  <Button className='group rounded-lg text-base has-[>svg]:px-6' size='lg' asChild>
                    <a href='#'>
                      Read more
                      <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                    </a>
                  </Button>
                </MotionPreset>
                <MotionPreset fade blur slide delay={0.4} transition={{ duration: 0.5 }}>
                  <Button variant='outline' className='rounded-lg text-base' size='lg' asChild>
                    <a href='#'>Free Trial</a>
                  </Button>
                </MotionPreset>
              </div>
            </div>
            <div className='flex gap-9'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.5}
                transition={{ duration: 0.5 }}
              >
                <div className='space-y-4'>
                  <div className='flex items-center gap-0.5'>
                    <p className='font-medium'>4.8</p>
                    <StarIcon className='mb-1 size-4 fill-amber-600 stroke-0 dark:fill-amber-400/60' />
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png'
                    alt='google'
                    className='w-21.5 object-contain'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                <div className='space-y-4'>
                  <div className='flex items-center gap-0.5'>
                    <p className='font-medium'>4.4</p>
                    <StarIcon className='mb-1 size-4 fill-amber-600 stroke-0 dark:fill-amber-400/60' />
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/clutch-logo.png'
                    alt='clutch'
                    className='w-21.5 object-contain'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.7}
                transition={{ duration: 0.5 }}
              >
                <div className='space-y-4'>
                  <div className='flex items-center gap-0.5'>
                    <p className='font-medium'>4.9</p>
                    <StarIcon className='mb-1 size-4 fill-amber-600 stroke-0 dark:fill-amber-400/60' />
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/glassdoor-logo.png'
                    alt='glassdoor'
                    className='w-30 object-contain'
                  />
                </div>
              </MotionPreset>
            </div>
          </div>
          <div className='relative h-full max-xl:h-130'>
            <MotionPreset fade transition={{ duration: 0.5 }} delay={0.8}>
              <Ripple numCircles={3} mainCircleSize={280} className='*:border-0!' />
            </MotionPreset>
            <div className='relative mx-auto w-fit'>
              <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }} delay={0.8}>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-21.png'
                  alt='girl Profile'
                  className='pointer-events-none relative h-120 w-full object-contain max-sm:-bottom-18'
                />
              </MotionPreset>
              <MotionPreset
                fade
                motionProps={{
                  animate: {
                    y: [0, -16, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 2.1,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 1
                    },
                    opacity: {
                      duration: 0.5,
                      delay: 1
                    }
                  }
                }}
                className='absolute top-25 right-[22%]'
              >
                <Button size='icon' variant='outline' className='rotate-[4deg] rounded-lg'>
                  <ChartColumnStackedIcon />
                </Button>
              </MotionPreset>
              <MotionPreset
                fade
                motionProps={{
                  animate: {
                    y: [0, -16, 0],
                    opacity: 1
                  },
                  transition: {
                    y: {
                      duration: 2.1,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 1
                    },
                    opacity: {
                      duration: 0.5,
                      delay: 1
                    }
                  }
                }}
                className='absolute bottom-25 left-[12%]'
              >
                <Button size='icon' variant='outline' className='rotate-[4deg] rounded-lg'>
                  <Share2Icon />
                </Button>
              </MotionPreset>
              <MotionPreset
                fade
                transition={{ duration: 0.5 }}
                delay={1}
                className='absolute -top-20 right-[50%] z-10 origin-left scale-60'
              >
                <StatisticsSalesOverviewCard className='max-md:hidden' />
              </MotionPreset>
              <MotionPreset
                fade
                transition={{ duration: 0.5 }}
                delay={1}
                className='absolute -bottom-15 left-[60%] z-10 origin-left scale-55'
              >
                <StatisticsActivityCard className='max-md:hidden' />
              </MotionPreset>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
