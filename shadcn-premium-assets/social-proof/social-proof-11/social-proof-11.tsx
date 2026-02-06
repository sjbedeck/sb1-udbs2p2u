import * as motion from 'motion/react-client'

import LogoVector from '@/assets/svg/logo-vector'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Badge } from '@/components/ui/badge'
import { PrimaryGrowButton } from '@/components/ui/grow-button'
import { NumberTicker } from '@/components/ui/number-ticker'

const SocialProof = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-20 max-sm:overflow-hidden sm:max-lg:gap-32 lg:grid-cols-2'>
          <div className='flex flex-col gap-7'>
            <div className='space-y-4'>
              <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
                <Badge variant='outline' className='text-sm font-normal'>
                  Social Proof
                </Badge>
              </MotionPreset>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.15}
                transition={{ duration: 0.5 }}
              >
                Real value, real success!
              </MotionPreset>
              <MotionPreset
                component='p'
                className='text-muted-foreground text-xl'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                In construction, success stems from collaboration and shared commitment. By combining diverse skills,
                teams create innovative solutions that achieve project goals and foster lasting relationships.
              </MotionPreset>
            </div>

            <MotionPreset
              className='grid gap-6 md:grid-cols-3'
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.45}
            >
              <div className='bg-muted text-card-foreground flex flex-col items-center gap-3 rounded-md border py-5'>
                <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  <NumberTicker value={40} delay={0.9} />K
                </h3>
                <span className='text-muted-foreground'>Customer</span>
              </div>
              <div className='bg-muted text-card-foreground flex flex-col items-center gap-3 rounded-md border py-5'>
                <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  <NumberTicker value={50} delay={0.9} />K
                </h3>
                <span className='text-muted-foreground'>New Sign-ups</span>
              </div>
              <div className='bg-muted text-card-foreground flex flex-col items-center gap-3 rounded-md border py-5'>
                <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  <NumberTicker value={20} delay={0.9} />K
                </h3>
                <span className='text-muted-foreground'>Monthly inquiry</span>
              </div>
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.6}
              className='max-sm:self-center'
            >
              <PrimaryGrowButton size='lg' asChild>
                <a href='#'>
                  Get Started - Free <LogoVector className='size-6' />
                </a>
              </PrimaryGrowButton>
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.75}
            className='bg-muted relative h-97 rounded-t-full lg:self-end'
          >
            <motion.img
              initial={{ opacity: 0, filter: 'blur(10px)', x: 70, rotate: 0 }}
              animate={{ opacity: 1, filter: 'blur(0px)', x: -85, rotate: -7 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                rotate: { delay: 1.9, duration: 0.5 },
                scale: { delay: 0, duration: 0.3 }
              }}
              whileHover={{ scale: 1.03 }}
              src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/grow/image-01.png'
              alt='user-stats'
              className='absolute right-[calc(50%_-_1rem)] bottom-4 h-60 sm:right-1/2 sm:h-103 dark:hidden'
            />
            <motion.img
              initial={{ opacity: 0, filter: 'blur(10px)', x: -75, rotate: 0 }}
              animate={{ opacity: 1, filter: 'blur(0px)', x: 85, rotate: 7 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                rotate: { delay: 1.9, duration: 0.5 },
                scale: { delay: 0, duration: 0.3 }
              }}
              whileHover={{ scale: 1.03 }}
              src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/grow/image-03.png'
              alt='our-team'
              className='absolute bottom-4 left-[calc(50%_-_1rem)] h-60 sm:left-1/2 sm:h-103 dark:hidden'
            />
            <MotionPreset
              component='img'
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5, scale: { delay: 0, duration: 0.3 } }}
              delay={0.9}
              motionProps={{
                src: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/grow/image-02.png',
                alt: 'best-features',
                whileHover: { scale: 1.03 }
              }}
              className='absolute bottom-5 left-1/2 h-60 -translate-x-1/2 sm:h-103 dark:hidden'
            />

            {/* Dark Images */}
            <motion.img
              initial={{ opacity: 0, filter: 'blur(10px)', x: 70, rotate: 0 }}
              animate={{ opacity: 1, filter: 'blur(0px)', x: -85, rotate: -7 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                rotate: { delay: 1.9, duration: 0.5 },
                scale: { delay: 0, duration: 0.3 }
              }}
              whileHover={{ scale: 1.03 }}
              src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/grow/image-01-dark.png'
              alt='user-stats-dark'
              className='absolute right-[calc(50%_-_1rem)] bottom-4 hidden h-60 sm:right-1/2 sm:h-103 dark:block'
            />
            <motion.img
              initial={{ opacity: 0, filter: 'blur(10px)', x: -75, rotate: 0 }}
              animate={{ opacity: 1, filter: 'blur(0px)', x: 85, rotate: 7 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                rotate: { delay: 1.9, duration: 0.5 },
                scale: { delay: 0, duration: 0.3 }
              }}
              whileHover={{ scale: 1.03 }}
              src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/grow/image-03-dark.png'
              alt='our-team-dark'
              className='absolute bottom-4 left-[calc(50%_-_1rem)] hidden h-60 sm:left-1/2 sm:h-103 dark:block'
            />
            <MotionPreset
              component='img'
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5, scale: { delay: 0, duration: 0.3 } }}
              delay={0.9}
              motionProps={{
                src: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/grow/image-02-dark.png',
                alt: 'best-features-dark',
                whileHover: { scale: 1.03 }
              }}
              className='absolute bottom-5 left-1/2 hidden h-60 -translate-x-1/2 sm:h-103 dark:block'
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
