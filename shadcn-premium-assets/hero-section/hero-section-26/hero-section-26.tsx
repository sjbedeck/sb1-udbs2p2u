import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import { BounceButton } from '@/components/ui/bounce-button'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { BorderBeam } from '@/components/ui/border-beam'

import StatisticsIncomeCard from '@/components/shadcn-studio/blocks/statistics-income-card'
import StatisticsTotalProfitCard from '@/components/shadcn-studio/blocks/hero-section-26/statistics-total-profit-card-hero'
import RatingsCard from '@/components/shadcn-studio/blocks/statistics-card-04'
import GeneralFinanceReviewsCard from '@/components/shadcn-studio/blocks/widget-general-finance-reviews'

import SessionCardSvg from '@/assets/svg/session-card-svg'

const stats = [
  {
    className: 'bg-primary',
    label: 'Profit',
    value: '$8,042',
    change: 16,
    changeType: 'decrease'
  },
  {
    className: 'bg-primary/10',
    label: 'Sales',
    value: '42',
    change: 6,
    changeType: 'increase'
  }
]

const HeroSection = () => {
  return (
    <section className='flex-1 overflow-hidden pb-8 sm:pb-16 lg:pb-24'>
      <div className='relative flex flex-col items-center gap-8 sm:gap-16 lg:gap-24'>
        <BackgroundRippleEffect cellSize={80} rows={10} />
        {/* Hero Content */}
        <div className='relative flex h-180 w-full items-center justify-center'>
          <div className='before:bg-background/90 flex w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center before:absolute before:z-9 before:h-145 before:w-190 before:rounded-[50%] before:blur-xl sm:px-6 lg:px-8'>
            <MotionPreset fade zoom transition={{ duration: 0.5, ease: 'easeOut' }} className='z-10'>
              <Badge variant='outline' className='bg-background relative text-sm font-normal'>
                Try 7 Days for free
                <BorderBeam colorFrom='var(--primary)' colorTo='var(--primary)' size={35} duration={6} />
              </Badge>
            </MotionPreset>
            <MotionPreset
              component='h1'
              fade
              zoom
              delay={0.3}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='z-10 text-2xl font-semibold sm:text-3xl lg:text-5xl lg:font-bold'
            >
              Launch Your Best Website with Ease
            </MotionPreset>
            <MotionPreset
              component='p'
              fade
              zoom
              delay={0.6}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-muted-foreground z-10 text-xl'
            >
              Build beautiful, functional websites in record time with our premium UI kits. Enjoy ready-to-use elements
              for a seamless user experience.
            </MotionPreset>

            <MotionPreset
              fade
              zoom
              delay={0.7}
              transition={{ duration: 0.5 }}
              className='flex flex-wrap items-center gap-4'
            >
              <BounceButton className='z-10 h-10 gap-3 rounded-full text-base has-[>svg]:px-6'>
                <a href='#' className='flex items-center gap-2'>
                  7 Days free trial <ArrowRightIcon />
                </a>
              </BounceButton>
              <Button
                size='lg'
                asChild
                className='bg-primary/10 hover:bg-primary/20 text-primary z-10 rounded-full text-base'
              >
                <a href='#'>Learn more</a>
              </Button>
            </MotionPreset>
          </div>

          {/* Charts */}
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
                  delay: 0.7
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.9
                }
              }
            }}
            className='absolute top-105 right-3 z-10 flex w-full max-w-80 scale-90 justify-center max-lg:hidden xl:right-20 xl:max-w-100'
          >
            <GeneralFinanceReviewsCard
              title='General Finance Reviews'
              amount='$50,232'
              period='Last 6 months Statics'
              progressLabel='Current Activity'
              progressValue={25}
              stats={stats}
              className='w-full'
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
                  delay: 0.9
                }
              }
            }}
            className='absolute top-10 right-10 z-10 flex w-full max-w-68 scale-90 justify-center max-lg:hidden xl:right-45'
          >
            <RatingsCard
              title='Sessions'
              badgeContent='Last month'
              value='12.2k'
              changePercentage={-25.5}
              svg={<SessionCardSvg />}
              className='size-full'
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
                  delay: 0.8
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.9
                }
              }
            }}
            className='absolute top-10 left-30 z-10 flex w-full max-w-68 scale-90 justify-center max-lg:hidden xl:left-50'
          >
            <StatisticsTotalProfitCard />
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
                  delay: 1.1
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.9
                }
              }
            }}
            className='absolute bottom-10 left-10 z-10 flex w-full max-w-104 scale-90 justify-center max-lg:hidden xl:left-30'
          >
            <StatisticsIncomeCard className='w-full' />
          </MotionPreset>
        </div>
        <div className='relative mx-auto w-full px-8 sm:px-16 lg:px-24'>
          <div className='to-background absolute inset-x-0 -top-1/2 z-10 h-10 bg-gradient-to-b from-transparent max-lg:hidden' />
          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.9}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-15 bg-gradient-to-r via-85% to-transparent' />
            <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-15 bg-gradient-to-l via-85% to-transparent' />
            <Marquee
              pauseOnHover
              duration={20}
              reverse
              className='gap-10 *:items-center md:gap-15 lg:gap-25 xl:gap-40 [&>div]:gap-10 md:[&>div]:gap-15 lg:[&>div]:gap-25 xl:[&>div]:gap-40'
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png'
                alt='University of Mississippi'
                className='h-10.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png'
                alt='Star Health'
                className='h-13 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/dhl-logo.png'
                alt='DHL'
                className='h-5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png'
                alt='Sense Arena'
                className='h-15 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png'
                alt='Shemaroo'
                className='h-10.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/mercedes-benz-logo.png'
                alt='Mercedes Benz'
                className='h-10.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
              />
            </Marquee>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
