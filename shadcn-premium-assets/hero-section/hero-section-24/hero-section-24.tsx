'use client'

import { useEffect, useRef } from 'react'

import {
  ArrowRightIcon,
  BellRingIcon,
  ChartSplineIcon,
  CreditCardIcon,
  DollarSignIcon,
  LayoutDashboardIcon,
  SparklesIcon
} from 'lucide-react'

import { annotate } from 'rough-notation'

import LogoSvg from '@/assets/svg/logo'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import { Magnetic } from '@/components/ui/magnet-effect'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/motion-toggle-group'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BounceButton } from '@/components/ui/bounce-button'

import StatisticsCard02 from '@/components/shadcn-studio/blocks/statistics-card-02'
import StatisticsCard05 from '@/components/shadcn-studio/blocks/statistics-card-05'
import StatisticsTotalSalesCard from '@/components/shadcn-studio/blocks/statistics-total-sales-card'

const HeroSection = () => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<any>(null)

  useEffect(() => {
    const element = spanRef.current

    if (annotationRef.current) {
      annotationRef.current.remove()
      annotationRef.current = null
    }

    if (element) {
      const timer = setTimeout(() => {
        const annotation = annotate(element, {
          type: 'underline',
          color: 'var(--primary)',
          strokeWidth: 2,
          animationDuration: 700,
          iterations: 2,
          padding: 2,
          multiline: true
        })

        annotation.show()
        annotationRef.current = annotation
      }, 800)

      return () => {
        clearTimeout(timer)

        if (annotationRef.current) {
          annotationRef.current.remove()
          annotationRef.current = null
        }
      }
    }

    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove()
        annotationRef.current = null
      }
    }
  }, [])

  return (
    <section className='flex-1 overflow-hidden'>
      <div className='mx-auto flex h-full max-w-7xl flex-col py-12 sm:py-16 lg:py-24'>
        <div className='relative grid grid-cols-1 gap-12 max-xl:justify-center sm:gap-16 xl:grid-cols-2'>
          <div className='space-y-32 p-6 xl:space-y-46'>
            <div className='flex flex-col justify-center gap-4 max-xl:items-center max-xl:text-center md:max-xl:mx-auto md:max-xl:max-w-150'>
              <MotionPreset fade slide transition={{ duration: 0.5 }}>
                <Badge variant='outline' className='text-sm font-normal'>
                  🏆 #1 Digital Marketing Tools
                </Badge>
              </MotionPreset>
              <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.3}>
                <h1 className='max-w-3xl text-2xl font-semibold sm:text-3xl lg:text-5xl'>
                  Smart Digital Marketing Made Easy
                </h1>
              </MotionPreset>
              <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.5}>
                <p className='text-muted-foreground text-xl'>
                  Equip your business with cutting-edge marketing solutions to reach more customers, build trust, and
                  drive higher conversions.
                </p>
              </MotionPreset>
              <MotionPreset
                component='div'
                fade
                slide={{ offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={0.7}
                className='flex flex-wrap items-center gap-4'
              >
                <BounceButton className='h-10 px-6 text-base'>
                  <a href='#'>Get Started</a>
                </BounceButton>
                <Button
                  size='lg'
                  asChild
                  className='bg-primary/10 hover:bg-primary/20 text-primary group rounded-lg text-base'
                >
                  <a href='#'>
                    Book a demo
                    <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                  </a>
                </Button>
              </MotionPreset>
            </div>
            <div className='space-y-3.5 px-4 py-2'>
              <MotionPreset
                component='p'
                fade
                slide={{ direction: 'down', offset: 50 }}
                delay={0.8}
                transition={{ duration: 0.5 }}
                className='text-muted-foreground max-xl:text-center'
              >
                Trusted by the best in the business
              </MotionPreset>
              <MotionPreset
                fade
                slide={{ direction: 'down', offset: 50 }}
                delay={0.9}
                transition={{ duration: 0.5 }}
                className='relative'
              >
                <div className='w-full'>
                  <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-15 bg-gradient-to-r via-85% to-transparent' />
                  <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-15 bg-gradient-to-l via-85% to-transparent' />
                  <Marquee pauseOnHover duration={20} gap={2} reverse className='*:items-center'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png'
                      alt='University of Mississippi'
                      className='h-7.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png'
                      alt='Star Health'
                      className='h-9 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/dhl-logo.png'
                      alt='DHL'
                      className='h-4 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png'
                      alt='Sense Arena'
                      className='h-11 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png'
                      alt='Shemaroo'
                      className='h-10 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/mercedes-benz-logo.png'
                      alt='Mercedes Benz'
                      className='h-7.5 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                  </Marquee>
                </div>
              </MotionPreset>
            </div>
          </div>
          <div className='relative flex items-center justify-center md:max-xl:h-150'>
            <MotionPreset
              component='div'
              zoom={{ initialScale: 0, scale: 1 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.5}
              className='absolute inset-0 flex items-center overflow-hidden mask-radial-from-0% mask-radial-to-60% mask-circle'
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-56.png'
                alt='backlight'
                className='w-full max-xl:w-1/2 dark:hidden'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-56-dark.png'
                alt='backgroundimage'
                className='hidden size-full max-xl:w-1/2 dark:block'
              />
            </MotionPreset>

            <MotionPreset
              component='div'
              zoom={{ initialScale: 0, scale: 1 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.9}
              className='relative flex items-center justify-center'
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-55.png'
                alt='image'
                className='size-full max-w-80 object-contain'
              />
              <Button
                asChild
                size='lg'
                className='absolute bottom-1/4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white/2.5 px-4 py-2 text-center align-middle font-sans text-sm font-normal text-white antialiased shadow-[inset_1px_0.5px_0px_rgba(255,255,255,0.75),inset_-1px_-0.5px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-300 select-none before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 hover:bg-white/30'
              >
                <a href='#'>
                  <SparklesIcon />
                  Preparing user analysis{' '}
                </a>
              </Button>

              <MotionPreset
                component='div'
                zoom={{ initialScale: 0, scale: 1 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1}
                className='absolute -top-30 -right-27 flex items-center justify-center max-md:hidden xl:-top-42'
              >
                <Magnetic strength={0.5} range={120}>
                  <StatisticsCard05
                    icon={CreditCardIcon}
                    title='Total Expense'
                    time='Last month'
                    value='$1.28K'
                    changePercentage={-12.2}
                  />
                </Magnetic>
              </MotionPreset>

              <MotionPreset
                component='div'
                zoom={{ initialScale: 0, scale: 1 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1}
                className='absolute top-100 right-16 flex w-full max-w-68 items-center justify-center max-md:hidden'
              >
                <Magnetic strength={0.5} range={120} className='w-full'>
                  <StatisticsCard02
                    icon={<DollarSignIcon className='size-3.5' />}
                    title='Total Revenue'
                    value='$12,345'
                    changePercentage={15}
                    className='w-full'
                  />
                </Magnetic>
              </MotionPreset>

              <MotionPreset
                component='div'
                zoom={{ initialScale: 0, scale: 1 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1}
                className='[pointer-events:none] absolute right-79 -bottom-5 flex scale-90 items-center justify-center max-lg:hidden'
              >
                <Magnetic strength={0.5} range={120} className='w-full'>
                  <StatisticsTotalSalesCard />
                </Magnetic>
              </MotionPreset>

              <MotionPreset
                component='div'
                zoom={{ initialScale: 0, scale: 1 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1}
                className='bg-card absolute -top-7 -left-7 flex size-15.5 items-center justify-center rounded-xl border shadow-md max-md:hidden'
              >
                {' '}
                <LogoSvg className='size-8.5' />
              </MotionPreset>

              <MotionPreset
                component='div'
                zoom={{ initialScale: 0, scale: 1 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1}
                className='absolute top-80 left-85 max-md:hidden'
              >
                <ToggleGroup
                  type='single'
                  defaultValue='app'
                  className='bg-muted flex-col overflow-hidden rounded-lg p-0.75'
                >
                  <ToggleGroupItem
                    value='gallery'
                    aria-label='Toggle light'
                    className='s-9 w-8'
                    buttonProps={{
                      className:
                        'aria-[checked=true]:[&_[data-slot=active-toggle-group-item]]:bg-background aria-[checked=true]:[&_[data-slot=active-toggle-group-item]]:shadow-sm text-foreground [&_[data-slot=active-toggle-group-item]]:!rounded-xl'
                    }}
                  >
                    <LayoutDashboardIcon className='text-primary size-4' />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value='notifications'
                    aria-label='Toggle dark'
                    className='s-9 w-8'
                    buttonProps={{
                      className:
                        'aria-[checked=true]:[&_[data-slot=active-toggle-group-item]]:bg-background aria-[checked=true]:[&_[data-slot=active-toggle-group-item]]:shadow-sm text-foreground [&_[data-slot=active-toggle-group-item]]:!rounded-xl relative'
                    }}
                  >
                    <BellRingIcon className='text-primary size-4' />

                    <Badge className='bg-muted-foreground absolute top-0 right-0 flex size-3.5 items-center justify-center px-1 text-xs text-white tabular-nums'>
                      4
                    </Badge>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value='app'
                    aria-label='Toggle system'
                    className='s-9 w-8'
                    buttonProps={{
                      className:
                        'aria-[checked=true]:[&_[data-slot=active-toggle-group-item]]:bg-background aria-[checked=true]:[&_[data-slot=active-toggle-group-item]]:shadow-sm text-foreground [&_[data-slot=active-toggle-group-item]]:!rounded-xl'
                    }}
                  >
                    <ChartSplineIcon className='text-primary size-4' />
                  </ToggleGroupItem>
                </ToggleGroup>
              </MotionPreset>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
