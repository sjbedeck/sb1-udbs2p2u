'use client'

import { useEffect, useState } from 'react'

import Spline from '@splinetool/react-spline'

import { ArrowUpRightIcon } from 'lucide-react'

import { motion } from 'motion/react'

import InfoSvg from '@/components/shadcn-studio/blocks/features-section-29/info-svg'

import { MotionPreset } from '@/components/ui/motion-preset'
import { MatterButton } from '@/components/ui/matter-button'
import { NumberTicker } from '@/components/ui/number-ticker'
import { TextScramble } from '@/components/shadcn-studio/blocks/text-scramble'
import { cn } from '@/lib/utils'

const Features = () => {
  const [hoveredDot1, setHoveredDot1] = useState<boolean>(false)
  const [hoveredDot2, setHoveredDot2] = useState<boolean>(false)
  const [hoveredDot3, setHoveredDot3] = useState<boolean>(false)
  const [hoveredDot4, setHoveredDot4] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setHoveredDot1(true)
    }, 3100)
  }, [])

  return (
    <section className='relative flex h-full min-h-[calc(100vh-84px)] flex-1 flex-col overflow-hidden py-6 sm:py-8 lg:py-12'>
      <div className='flex flex-1 flex-col justify-center gap-12 sm:gap-16 lg:gap-24'>
        <div className='flex items-start justify-between gap-6'>
          <div className='divide-border flex flex-col divide-y max-sm:w-full'>
            {/* Height */}
            <MotionPreset
              fade
              slide
              delay={3}
              transition={{ duration: 0.8 }}
              inView={false}
              className='px-8 py-3 md:px-16 lg:px-24'
            >
              <div className='space-y-1'>
                <h3 className='text-muted-foreground text-xl'>Height</h3>
                <p className='text-4xl font-semibold'>
                  <NumberTicker startValue={0} value={5} delay={3.2} />
                  &rsquo;
                  <NumberTicker startValue={0} value={8} delay={3.2} />
                </p>
              </div>
            </MotionPreset>

            <MotionPreset
              fade
              slide
              delay={3 + 0.1}
              transition={{ duration: 0.8 }}
              inView={false}
              className='px-8 py-3 md:px-16 lg:px-24'
            >
              <div className='space-y-1'>
                <h3 className='text-muted-foreground text-xl'>Weight</h3>
                <p className='text-4xl font-semibold'>
                  <NumberTicker startValue={0} value={48} delay={3.3} />
                  KG
                </p>
              </div>
            </MotionPreset>
            <MotionPreset
              fade
              slide
              delay={3 + 0.2}
              transition={{ duration: 0.8 }}
              inView={false}
              className='px-8 py-3 md:px-16 lg:px-24'
            >
              <div className='space-y-1'>
                <h3 className='text-muted-foreground text-xl'>Payload</h3>
                <p className='text-4xl font-semibold'>
                  <NumberTicker startValue={0} value={18} delay={3.4} />
                  KG
                </p>
              </div>
            </MotionPreset>
            <MotionPreset
              fade
              slide
              delay={3 + 0.3}
              transition={{ duration: 0.8 }}
              inView={false}
              className='px-8 py-3 md:px-16 lg:px-24'
            >
              <div className='space-y-1'>
                <h3 className='text-muted-foreground text-xl'>Battery life</h3>
                <p className='text-4xl font-semibold'>
                  <NumberTicker startValue={0} value={12} delay={3.5} />
                  HR
                </p>
              </div>
            </MotionPreset>
            <MotionPreset
              fade
              slide
              delay={3 + 0.4}
              transition={{ duration: 0.8 }}
              inView={false}
              className='px-8 py-3 md:px-16 lg:px-24'
            >
              <div className='space-y-1'>
                <h3 className='text-muted-foreground text-xl'>Speed</h3>
                <p className='text-4xl font-semibold'>
                  <NumberTicker startValue={0} value={1.2} decimalPlaces={2} delay={3.6} />
                  M/S
                </p>
              </div>
            </MotionPreset>
            <MotionPreset
              fade
              slide
              delay={3 + 0.5}
              transition={{ duration: 0.8 }}
              inView={false}
              className='px-8 py-3 md:px-16 lg:px-24'
            >
              <div className='space-y-1'>
                <h3 className='text-muted-foreground text-xl'>System</h3>
                <TextScramble className='text-4xl font-semibold uppercase' delay={3.7}>
                  Electric
                </TextScramble>
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>

      <div className='absolute top-1/2 aspect-2/1 w-full -translate-y-1/2 max-lg:h-[70%] lg:left-1/2 lg:h-[75%] lg:max-w-[1600px] lg:-translate-x-1/2'>
        <div className='absolute inset-0 h-full max-lg:-right-1/2 max-sm:-right-full'>
          <Spline scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode' />
          <div className='from-background absolute inset-x-0 -bottom-0.5 h-10 bg-linear-to-t to-transparent'></div>

          <MotionPreset
            fade
            delay={3}
            transition={{ duration: 0.5 }}
            inView={false}
            className='absolute top-32 left-1/2 -translate-x-1/2 hover:z-1 max-xl:hidden'
          >
            <div
              className={cn('group relative size-7.5 animate-pulse rounded-full bg-white/40 p-1', {
                'animate-none': hoveredDot1
              })}
              onMouseEnter={() => {
                setHoveredDot1(true)
                setHoveredDot2(false)
                setHoveredDot3(false)
                setHoveredDot4(false)
              }}
              onMouseLeave={() => setHoveredDot1(false)}
            >
              <div className='size-5.5 rounded-full bg-white' />
              <div
                className={cn(
                  'absolute top-4 left-4 -z-1',
                  hoveredDot1 ? 'inline-block' : 'hidden group-hover:inline-block'
                )}
              >
                <div className='relative'>
                  <InfoSvg className='text-border' isHovered={hoveredDot1} />
                  <motion.div
                    key={hoveredDot1 ? 'visible' : 'hidden'}
                    className='bg-background absolute top-25 right-5 w-full min-w-sm translate-x-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:bottom-1/4 before:left-1/6 before:-z-1 before:-translate-x-full before:-translate-y-[54%]'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={hoveredDot1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      ease: 'easeInOut'
                    }}
                  >
                    <h6 className='text-2xl font-medium'>Precision Optics</h6>
                    <p className='text-muted-foreground mb-6'>
                      Equipped with high-resolution cameras and advanced depth sensors, the robot captures its
                      surroundings with exceptional clarity, allowing it to navigate complex environments effectively.
                    </p>
                    <MatterButton size='lg' asChild>
                      <a href='#'>
                        Learn more
                        <ArrowUpRightIcon />
                      </a>
                    </MatterButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            delay={3.1}
            transition={{ duration: 0.5 }}
            inView={false}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:z-1 max-xl:hidden'
          >
            <div
              className={cn('group relative size-7.5 animate-pulse rounded-full bg-white/40 p-1 delay-500', {
                'animate-none': hoveredDot2
              })}
              onMouseEnter={() => {
                setHoveredDot2(true)
                setHoveredDot1(false)
                setHoveredDot3(false)
                setHoveredDot4(false)
              }}
              onMouseLeave={() => setHoveredDot2(false)}
            >
              <div className='size-5.5 rounded-full bg-white' />

              <div
                className={cn(
                  'absolute bottom-10 left-0 -z-1',
                  hoveredDot2 ? 'inline-block' : 'hidden group-hover:inline-block'
                )}
              >
                <div className='relative'>
                  <InfoSvg className='text-border -rotate-60' isHovered={hoveredDot2} />
                  <motion.div
                    key={hoveredDot2 ? 'visible' : 'hidden'}
                    className='bg-background absolute -top-25 right-5 w-full min-w-sm translate-x-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:top-1/4 before:left-1/6 before:-z-1 before:-translate-x-full'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={hoveredDot2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      ease: 'easeInOut'
                    }}
                  >
                    <h6 className='text-2xl font-medium'>Intelligent Core</h6>
                    <p className='text-muted-foreground mb-6'>
                      The central processing unit powers the robot&apos;s decision-making, AI behaviour, and complex
                      task execution.
                    </p>
                    <MatterButton size='lg' asChild>
                      <a href='#'>
                        Learn more
                        <ArrowUpRightIcon />
                      </a>
                    </MatterButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            delay={3.2}
            transition={{ duration: 0.5 }}
            inView={false}
            className='absolute top-[44%] left-[57%] -translate-x-1/2 -translate-y-1/2 hover:z-1 max-xl:hidden'
          >
            <div
              className={cn('group relative size-7.5 animate-pulse rounded-full bg-white/40 p-1 delay-700', {
                'animate-none': hoveredDot3
              })}
              onMouseEnter={() => {
                setHoveredDot3(true)
                setHoveredDot1(false)
                setHoveredDot2(false)
                setHoveredDot4(false)
              }}
              onMouseLeave={() => setHoveredDot3(false)}
            >
              <div className='size-5.5 rounded-full bg-white' />

              <div
                className={cn(
                  'absolute bottom-22.5 -left-15 -z-1',
                  hoveredDot3 ? 'inline-block' : 'hidden group-hover:inline-block'
                )}
              >
                <div className='relative'>
                  <InfoSvg className='text-border -rotate-90' isHovered={hoveredDot3} />
                  <motion.div
                    key={hoveredDot3 ? 'visible' : 'hidden'}
                    className='bg-background absolute top-20 right-20 w-full min-w-sm translate-x-full -translate-y-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:bottom-1/4 before:left-1/4 before:-z-1 before:-translate-x-full before:translate-y-full'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={hoveredDot3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      ease: 'easeInOut'
                    }}
                  >
                    <h6 className='text-2xl font-medium'>Adaptive Movement</h6>
                    <p className='text-muted-foreground mb-6'>
                      State-of-the-art actuators in the shoulder joints allow fluid, natural, and responsive motion.
                    </p>
                    <MatterButton size='lg' asChild>
                      <a href='#'>
                        Learn more
                        <ArrowUpRightIcon />
                      </a>
                    </MatterButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            delay={3.3}
            transition={{ duration: 0.5 }}
            inView={false}
            className='absolute top-[77%] left-[54%] -translate-x-1/2 -translate-y-1/2 hover:z-1 max-xl:hidden'
          >
            <div
              className={cn('group size-7.5 animate-pulse rounded-full bg-white/40 p-1 delay-200', {
                'animate-none': hoveredDot4
              })}
              onMouseEnter={() => {
                setHoveredDot4(true)
                setHoveredDot1(false)
                setHoveredDot2(false)
                setHoveredDot3(false)
              }}
              onMouseLeave={() => setHoveredDot4(false)}
            >
              <div className='size-5.5 rounded-full bg-white' />

              <div
                className={cn(
                  'absolute -top-2 -left-10 -z-1',
                  hoveredDot4 ? 'inline-block' : 'hidden group-hover:inline-block'
                )}
              >
                <div className='relative'>
                  <InfoSvg className='text-border scale-60' isHovered={hoveredDot4} />
                  <motion.div
                    key={hoveredDot4 ? 'visible' : 'hidden'}
                    className='bg-background absolute -top-5 right-17 w-full min-w-sm translate-x-full space-y-2.5 rounded-lg rounded-tl-4xl rounded-br-4xl border px-5 py-9 shadow-md [corner-bottom-right-shape:superellipse(0)] [corner-top-left-shape:superellipse(0)] before:absolute before:inset-0 before:left-[30%] before:-z-1 before:-translate-x-full'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={hoveredDot4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: 'easeIn'
                    }}
                  >
                    <h6 className='text-2xl font-medium'>Dynamic Balance</h6>
                    <ul className='text-muted-foreground mb-6 list-disc pl-6'>
                      <li>Distributes weight intelligently during motion.</li>
                      <li>Maintain stability on uneven or shifting surfaces.</li>
                    </ul>
                    <MatterButton size='lg' asChild>
                      <a href='#'>
                        Learn more
                        <ArrowUpRightIcon />
                      </a>
                    </MatterButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default Features
