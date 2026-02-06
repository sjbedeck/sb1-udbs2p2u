import { ArrowRightIcon, DollarSignIcon, CheckIcon } from 'lucide-react'

import TotalEarningCard from '@/components/shadcn-studio/blocks/chart-total-earning'
import TotalRevenueCard from '@/components/shadcn-studio/blocks/statistics-card-02'
import StatisticsCardWithSvg from '@/components/shadcn-studio/blocks/statistics-card-04'

import { Button } from '@/components/ui/button'
import { MotionPreset } from '@/components/ui/motion-preset'

import RatingsCardSvg from '@/assets/svg/ratings-card-svg'

const Features = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-24'>
          {/* Left content */}
          <div className='space-y-12 lg:space-y-24'>
            <div className='space-y-4'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                slide={{ direction: 'up', offset: 50 }}
                transition={{ duration: 0.45 }}
              >
                Meet shadcn/studio, the most powerful Dashboard UI Kit
              </MotionPreset>
              <MotionPreset
                component='p'
                className='text-muted-foreground text-xl'
                fade
                slide={{ direction: 'up', offset: 50 }}
                delay={0.2}
                transition={{ duration: 0.45 }}
              >
                Using technology to make finance simpler, smarter and more rewarding.
              </MotionPreset>
              <MotionPreset fade slide={{ direction: 'up', offset: 50 }} delay={0.4} transition={{ duration: 0.45 }}>
                <Button className='group rounded-lg text-base has-[>svg]:px-6' size='lg' asChild>
                  <a href='#'>
                    Get Started
                    <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                  </a>
                </Button>
              </MotionPreset>
            </div>
            <div className='space-y-3.5'>
              <MotionPreset
                className='flex gap-3'
                fade
                slide={{ direction: 'up', offset: 50 }}
                delay={1}
                transition={{ duration: 0.45 }}
              >
                <CheckIcon className='text-primary mt-1 size-6 shrink-0' />
                <p className='text-muted-foreground text-lg'>
                  <span className='text-foreground font-medium'>Buit with responsiveness</span> in mind, ensuring your
                  app looks great on all devices with RTL language support.
                </p>
              </MotionPreset>
              <MotionPreset
                className='flex gap-3'
                fade
                slide={{ direction: 'up', offset: 50 }}
                delay={1.2}
                transition={{ duration: 0.45 }}
              >
                <CheckIcon className='text-primary mt-1 size-6 shrink-0' />
                <p className='text-muted-foreground text-lg'>
                  Apply your design decisions with{' '}
                  <span className='text-foreground font-medium'>unlimited themes,</span> all without adding new class
                  names.
                </p>
              </MotionPreset>
              <MotionPreset
                className='flex gap-3'
                fade
                slide={{ direction: 'up', offset: 50 }}
                delay={1.4}
                transition={{ duration: 0.45 }}
              >
                <CheckIcon className='text-primary mt-1 size-6 shrink-0' />
                <p className='text-muted-foreground text-lg'>
                  <span className='text-foreground font-medium'>Buit with responsiveness</span> in mind, ensuring your
                  app looks great on all devices with RTL language support.
                </p>
              </MotionPreset>
            </div>
          </div>

          {/* Right content - Dashboard cards */}
          <div className='relative flex justify-center max-lg:overflow-hidden max-lg:py-22'>
            {/* Customers Card */}
            <MotionPreset
              fade
              className='absolute top-[20%] left-0 z-1 w-72 origin-top-left scale-60 max-sm:hidden lg:-left-4'
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
                    delay: 1.2
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 1.2
                  }
                }
              }}
            >
              <StatisticsCardWithSvg
                title='Ratings'
                badgeContent='Last 6 months'
                value='8.14k'
                changePercentage={18.2}
                svg={<RatingsCardSvg />}
              />
            </MotionPreset>

            {/* Total Earning Card */}
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
                    delay: 1.6
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 1.6
                  }
                }
              }}
              className='absolute top-0 right-0 z-1 w-100 origin-top-right scale-45 max-lg:top-[15%] max-sm:hidden'
            >
              <TotalEarningCard />
            </MotionPreset>

            {/* Total Revenue Card */}
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
                    delay: 1.4
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 1.4
                  }
                }
              }}
              className='absolute right-[10%] bottom-0 z-1 w-72 origin-bottom-right scale-60 max-lg:bottom-[15%]'
            >
              <TotalRevenueCard
                icon={<DollarSignIcon className='size-3.5' />}
                title='Total Revenue'
                value='$12,400'
                changePercentage={15}
              />
            </MotionPreset>

            {/* Phone Image */}
            <MotionPreset
              className='border-primary bg-muted group relative rounded-full border-2'
              fade
              delay={0.6}
              transition={{ duration: 0.9 }}
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-56.png'
                alt='PhoneImage'
                className='bg-muted z-1 mx-auto h-110 rounded-full object-contain lg:h-130'
              />
              <div className='absolute inset-0 -z-1'>
                <div className='border-primary absolute top-1/2 left-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border-2'></div>
                <div className='border-primary/60 absolute top-1/2 left-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border-2'></div>
                <div className='border-primary/40 absolute top-1/2 left-1/2 size-[65%] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border-2'></div>
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
