'use client'

import { useRef } from 'react'

import { CircleUserRoundIcon, ClipboardListIcon, CopyIcon, FileCheckIcon, ShieldIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'

const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const icon1Ref = useRef<HTMLSpanElement>(null)
  const icon2Ref = useRef<HTMLSpanElement>(null)
  const icon3Ref = useRef<HTMLSpanElement>(null)
  const icon4Ref = useRef<HTMLSpanElement>(null)

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col items-center gap-4 text-center'>
          <MotionPreset
            component='h2'
            fade
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
          >
            Start serving your first enterprise client in no time
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} delay={0.3} transition={{ duration: 0.5 }}>
            <Button size='lg' className='rounded-lg text-base'>
              Explore the Developer&apos;s Guide to Integration
            </Button>
          </MotionPreset>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Column 1 */}
          <div className='flex flex-col gap-6'>
            {/* Authentication Card */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              <Card className='border-0'>
                <CardContent className='flex flex-col items-center gap-4 text-center'>
                  <Button size='icon-lg'>
                    <ShieldIcon />
                    <span className='sr-only'>Shield</span>
                  </Button>
                  <h3 className='text-2xl font-semibold'>Streamlined Authentication</h3>
                  <p className='text-muted-foreground text-lg'>Your gateway to enterprise-level compatibility</p>
                </CardContent>
              </Card>
            </MotionPreset>

            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {/* OAuth Card */}
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 15 }}
                delay={0.7}
                transition={{ duration: 0.5 }}
              >
                <Card className='h-full border-0'>
                  <CardContent className='flex h-full flex-col items-center gap-4 text-center'>
                    <h3 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>OAuth</h3>
                    <p className='text-muted-foreground text-lg'>Powered by a unified API</p>
                  </CardContent>
                </Card>
              </MotionPreset>

              {/* Authentication Providers Card */}
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 15 }}
                delay={0.8}
                transition={{ duration: 0.5 }}
              >
                <Card className='h-full border-0'>
                  <CardContent className='flex h-full flex-col items-center gap-4 text-center'>
                    <h3 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                      <NumberTicker startValue={10} value={30} delay={0.95} />+
                    </h3>
                    <p className='text-muted-foreground text-lg'>Authentication providers integrated</p>
                  </CardContent>
                </Card>
              </MotionPreset>
            </div>
          </div>

          {/* Column 2 */}
          <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.9} transition={{ duration: 0.5 }}>
            <Card className='h-full border-0'>
              <CardContent className='flex h-full flex-col gap-4'>
                <h3 className='text-2xl font-semibold'>
                  Keep your system, branding, and experience we&apos;ll handle security
                </h3>

                <p className='text-muted-foreground grow text-lg'>
                  Our platform is designed to complement your existing infrastructure without disrupting your workflows,
                  user interface, or branding. We handle the complexities of enterprise-grade authentication and
                  compliance so you can focus on delivering value to your users.
                </p>

                <div ref={containerRef} className='relative flex items-center justify-between gap-2.5'>
                  <span ref={icon1Ref}>
                    <CircleUserRoundIcon strokeWidth={1} className='size-8 shrink-0 text-sky-600 dark:text-sky-400' />
                  </span>
                  <span ref={icon2Ref}>
                    <ClipboardListIcon strokeWidth={1} className='size-8 shrink-0 text-amber-600 dark:text-amber-400' />
                  </span>
                  <span ref={icon3Ref}>
                    <CopyIcon strokeWidth={1} className='text-primary size-8 shrink-0' />
                  </span>
                  <span ref={icon4Ref}>
                    <FileCheckIcon strokeWidth={1} className='size-8 shrink-0 text-green-600 dark:text-green-400' />
                  </span>

                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={icon1Ref}
                    toRef={icon2Ref}
                    duration={6}
                    delay={0.9}
                    startXOffset={26}
                    endXOffset={-26}
                  />
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={icon2Ref}
                    toRef={icon3Ref}
                    duration={6}
                    delay={1.1}
                    startXOffset={26}
                    endXOffset={-26}
                  />
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={icon3Ref}
                    toRef={icon4Ref}
                    duration={6}
                    delay={1.3}
                    startXOffset={26}
                    endXOffset={-26}
                  />
                </div>
              </CardContent>
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
