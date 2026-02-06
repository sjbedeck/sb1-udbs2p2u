'use client'

import { CameraIcon, GiftIcon, StarIcon } from 'lucide-react'

import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import RippleBg from '@/components/shadcn-studio/blocks/about-us-page-13/ripple-bg'
import FallingBadge from '@/components/shadcn-studio/blocks/about-us-page-13/falling-badge'
import AnimatedHeading from '@/components/shadcn-studio/blocks/about-us-page-13/animated-heading'

import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const AboutUs = () => {
  return (
    <section className='bg-black py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
          <AnimatedHeading />
          <MotionPreset
            component='p'
            className='text-xl text-white/80'
            fade
            blur
            transition={{ duration: 0.8 }}
            delay={0.7}
          >
            We&apos;re a passionate team united by a common goal - to create meaningful solutions that make a real
            impact. From humble beginnings to ambitious visions, our journey is driven by innovation, trust, and a
            commitment to excellence.
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 items-end gap-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5'>
          {/* Card 1 */}
          <MotionPreset
            fade
            blur
            slide={{ offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={1.1}
            className='order-1 md:max-lg:col-span-2'
          >
            <Card className='h-100 overflow-hidden border-0 bg-neutral-800 pt-7.5 pb-0'>
              <CardContent className='flex h-full flex-col px-7.5'>
                <h3 className='text-5xl font-bold text-white'>
                  <NumberTicker startValue={0} value={800} delay={1.3} stiffness={120} />+
                </h3>
                <p className='text-xl text-white'>Examples</p>
              </CardContent>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-34.png'
                alt='Components Mockup'
              />
            </Card>
          </MotionPreset>

          {/* Card 2 */}
          <MotionPreset
            fade
            blur
            slide={{ offset: 120 }}
            transition={{ duration: 0.5 }}
            delay={1}
            className='order-2 sm:max-md:order-4 md:max-lg:order-4 md:max-lg:col-span-3'
          >
            <Card className='h-75 justify-center border-0 bg-neutral-800'>
              <CardContent className='flex flex-col items-center justify-center gap-9'>
                <MotionPreset fade blur zoom transition={{ duration: 0.8 }} delay={1.3}>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-11.png'
                    alt='GitHub'
                    className='size-14'
                  />
                </MotionPreset>

                <MotionPreset
                  fade
                  blur
                  slide={{ direction: 'down', offset: 50 }}
                  transition={{ duration: 0.8 }}
                  delay={1.5}
                >
                  <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
                    <Button
                      variant='outline'
                      className='rounded-none rounded-l-md bg-transparent font-normal text-white shadow-none hover:bg-transparent hover:text-white focus-visible:z-10'
                    >
                      <StarIcon />
                      Star
                    </Button>
                    <span className='dark:border-input dark:bg-input/30 flex items-center rounded-r-md border bg-transparent px-3 text-sm text-white'>
                      1.6k+
                    </span>
                  </div>
                </MotionPreset>
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Card 3 */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 120 }}
            transition={{ duration: 0.5 }}
            delay={0.9}
            className='order-3 sm:max-md:col-span-2 md:max-lg:order-2 md:max-lg:col-span-2'
          >
            <Card className='relative h-53 overflow-hidden border-0 bg-neutral-800 py-0'>
              <CardContent className='relative z-10 flex h-full flex-col items-center justify-center px-0 text-center'>
                <FallingBadge
                  badges={[
                    {
                      text: 'Minimalist',
                      className: 'bg-white text-black text-sm border-black py-1.5 px-3'
                    },
                    {
                      type: 'circle',
                      text: '',
                      icon: <GiftIcon className='size-5 text-white' />,
                      className: 'bg-gradient-to-b from-neutral-400 to-neutral-600 size-10'
                    },
                    {
                      text: 'Modern Aesthetics',
                      className: 'bg-white text-black text-sm border-black py-1.5 px-3'
                    },
                    {
                      type: 'circle',
                      text: '',
                      icon: <CameraIcon className='size-5 text-white' />,
                      className: 'bg-gradient-to-b from-neutral-400 to-neutral-600 size-10'
                    },
                    {
                      text: 'Rewrite',
                      className: 'bg-white text-black text-sm border-black py-1.5 px-3'
                    },
                    {
                      text: 'Geometry',
                      className: 'bg-white text-black text-sm border-black py-1.5 px-3'
                    }
                  ]}
                  gravity={0.54}
                  className='p-0'
                  autoDelay={1.7}
                />
              </CardContent>
              <svg
                className='absolute -top-12 -left-8'
                width='138'
                height='102'
                viewBox='0 0 138 102'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='46' cy='46' r='38.5' stroke='#F4F4F5' strokeOpacity='0.1' strokeWidth='15' />
                <circle cx='92' cy='56' r='38.5' stroke='#F4F4F5' strokeOpacity='0.1' strokeWidth='15' />
              </svg>
            </Card>
          </MotionPreset>

          {/* Card 4 */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'right', offset: 120 }}
            transition={{ duration: 0.5 }}
            delay={1}
            className='order-4 sm:max-md:order-5 md:max-lg:col-span-3'
          >
            <Card className='relative h-75 border-0 bg-neutral-800'>
              <RippleBg className='absolute inset-0 size-full text-zinc-100' />
              <CardContent className='relative z-10 flex h-full flex-col items-center justify-center text-center'>
                <h3 className='text-5xl leading-19.5 font-bold text-neutral-100'>50K+</h3>
                <p className='text-xl font-medium text-neutral-300'>Downloads</p>
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Card 5 */}
          <MotionPreset
            fade
            blur
            slide={{ direction: 'right', offset: 120 }}
            transition={{ duration: 0.5 }}
            delay={1.1}
            className='order-5 sm:max-md:order-2 md:max-lg:order-3 md:max-lg:col-span-2'
          >
            <Card className='relative h-73 overflow-hidden border-0 bg-neutral-800 py-5 md:h-100'>
              <CardContent className='flex h-full flex-col justify-between gap-4 px-3'>
                <div className='space-y-2'>
                  <div className='flex -space-x-2 hover:space-x-1'>
                    {avatars.map((avatar, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <Avatar className='size-10 ring-2 ring-neutral-400 transition-all duration-300 ease-in-out'>
                            <AvatarImage src={avatar.src} alt={avatar.name} />
                            <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent className='bg-white text-black [&>span>svg]:bg-white [&>span>svg]:fill-white'>
                          {avatar.name}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <p className='text-xs text-white'>Trusted by </p>
                </div>

                <div className='space-y-3.5'>
                  <div className='space-y-1.5'>
                    <div className='flex items-center gap-1'>
                      <p className='text-white'>5.0</p>
                      <StarIcon className='inline-block size-4 fill-amber-400 text-amber-400' />
                    </div>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-35.png'
                      alt='Google'
                      className='h-7.5'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <div className='flex items-center gap-1'>
                      <p className='text-white'>5.0</p>
                      <StarIcon className='inline-block size-4 fill-amber-400 text-amber-400' />
                    </div>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-36.png'
                      alt='Glassdoor'
                      className='h-7'
                    />
                  </div>
                </div>
              </CardContent>
              <svg
                width='114'
                height='337'
                viewBox='0 0 114 337'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute right-0 bottom-0'
              >
                <motion.path
                  d='M192.425 16.0039L103.719 47.7843C82.2491 55.4761 63.1312 68.5849 48.2187 85.8396C21.8148 116.39 10.8012 157.323 18.3095 196.999L19.6308 203.981C23.6846 225.402 32.45 245.654 45.2926 263.271L108.519 350.004'
                  stroke='#F4F4F5'
                  strokeOpacity='0.1'
                  strokeWidth='32'
                  strokeLinecap='round'
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{
                    pathLength: {
                      duration: 2,
                      ease: 'easeInOut',
                      delay: 1.3
                    },
                    opacity: { duration: 0.5, delay: 1.3 }
                  }}
                />
              </svg>
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
