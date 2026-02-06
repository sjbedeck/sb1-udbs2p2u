import { ArrowRightIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const AboutUs = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 max-xl:justify-items-center sm:gap-16 lg:gap-24 xl:grid-cols-2'>
          <div className='space-y-4'>
            <MotionPreset fade blur slide transition={{ duration: 0.5 }} delay={0.1}>
              <Badge className='text-sm font-normal' variant='outline'>
                Build intuitive Dashboards with ease
              </Badge>
            </MotionPreset>
            <MotionPreset
              component='h2'
              className='text-2xl font-semibold md:text-3xl lg:text-4xl'
              fade
              blur
              slide
              transition={{ duration: 0.5 }}
              delay={0.3}
            >
              We Are More Than a Brand — We Are a Mission in Motion
            </MotionPreset>
            <MotionPreset
              component='p'
              fade
              blur
              slide
              transition={{ duration: 0.5 }}
              className='text-muted-foreground text-xl'
              delay={0.4}
            >
              We’re a passionate team united by a common goal — to create meaningful solutions that make a real impact.
              From humble beginnings to ambitious visions, our journey is driven by innovation, trust, and a commitment
              to excellence.
            </MotionPreset>
            <MotionPreset fade blur slide transition={{ duration: 0.5 }} delay={0.7}>
              <Button
                className='group relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
                size='lg'
                asChild
              >
                <a href='#'>
                  Read more
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
            </MotionPreset>
          </div>

          <div className='relative flex w-full max-w-140 flex-col items-center gap-4.5'>
            {/* Dash lines */}
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1}
              className='text-border absolute top-6 left-48.5 max-md:hidden'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='174' height='327' viewBox='0 0 174 327' fill='none'>
                <path
                  d='M86.3438 0.604492V91.9772M86.3438 91.9772H30.2278C13.8678 91.9772 0.605469 105.24 0.605469 121.6L0.605469 188.25C0.605469 204.61 13.8678 217.872 30.2278 217.872H86.3438M86.3438 91.9772H143.125C159.485 91.9772 172.747 105.24 172.747 121.599V188.25C172.747 204.61 159.485 217.872 143.125 217.872H86.3438M86.3438 217.872V326.104'
                  stroke='currentColor'
                  strokeWidth='1.20907'
                  strokeLinecap='round'
                  strokeDasharray='12.7 12.7'
                />
              </svg>
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1}
              className='text-border absolute right-22 bottom-15 -z-1 max-md:hidden'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='39' height='74' viewBox='0 0 39 74' fill='none'>
                <path
                  d='M37.6055 0.60498C36.336 42.7844 45.3807 51.5256 0.605469 72.605'
                  stroke='currentColor'
                  strokeWidth='1.21'
                  strokeLinecap='round'
                  strokeDasharray='8.7 8.7'
                />
              </svg>
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1}
              className='text-border absolute top-16 left-21 -z-1 max-md:hidden'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='36' height='61' viewBox='0 0 36 61' fill='none'>
                <path
                  d='M34.5607 0.605257C6.30817 22.4964 -3.82479 21.1848 2.34349 59.8594'
                  stroke='currentColor'
                  strokeWidth='1.21'
                  strokeLinecap='round'
                  strokeDasharray='8.7 8.7'
                />
              </svg>
            </MotionPreset>
            {/* Icons and badge */}
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1}
              className='bg-primary absolute top-18 left-18 z-1 flex size-8 items-center justify-center rounded-full max-md:hidden'
            >
              💡
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1.6}
              className='bg-primary absolute top-6 left-66 z-1 flex size-8 items-center justify-center rounded-full max-md:hidden'
            >
              😍
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1.7}
              className='bg-primary absolute right-19 bottom-19 z-1 flex size-8 items-center justify-center rounded-full max-md:hidden'
            >
              ✌🏻️
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1.8}
              className='bg-primary absolute bottom-8 left-66 z-1 flex size-8 items-center justify-center rounded-full max-md:hidden'
            >
              🔥
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1.3}
              className='bg-primary text-primary-foreground absolute top-8 right-4 z-1 flex rotate-8 items-center justify-center rounded-md px-2 py-0.5 text-xs max-sm:hidden'
            >
              Driven by Passion 🤩
            </MotionPreset>
            <MotionPreset
              fade
              blur
              transition={{ duration: 0.5 }}
              delay={1.9}
              className='bg-primary text-primary-foreground absolute bottom-15 left-6 z-1 flex -rotate-8 items-center justify-center rounded-md px-2 py-0.5 text-xs max-sm:hidden'
            >
              Rooted in Values 🙌🏻
            </MotionPreset>

            {/* Images */}
            <div className='bg-background flex items-center gap-4.5 max-sm:flex-wrap'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={0.7}
              >
                <div className='bg-primary group h-27 w-38.25 overflow-hidden rounded-[27px]'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-37.png'
                    alt='image-37'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={0.75}
              >
                <div className='group h-27 w-38.25 overflow-hidden rounded-[27px] bg-amber-600/60 dark:bg-amber-400/60'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-38.png'
                    alt='image-38'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
            </div>
            <div className='bg-background flex items-center gap-4.5 max-sm:order-1 max-sm:flex-wrap max-sm:justify-center'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={0.9}
              >
                <div className='group h-27 w-38.25 overflow-hidden rounded-[27px] bg-sky-600/60 dark:bg-sky-400/60'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-39.png'
                    alt='image-39'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={0.95}
              >
                <div className='bg-primary/60 group h-27 w-38.25 overflow-hidden rounded-[27px]'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-40.png'
                    alt='image-40'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={1}
              >
                <div className='group h-27 w-38.25 overflow-hidden rounded-[27px] bg-sky-600/60 dark:bg-sky-400/60'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-41.png'
                    alt='image-41'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
            </div>
            <div className='bg-background flex items-center gap-4.5 max-sm:flex-wrap'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={1.15}
              >
                <div className='bg-destructive/60 group h-27 w-38.25 overflow-hidden rounded-[27px]'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-42.png'
                    alt='image-42'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={1.2}
              >
                <div className='group h-27 w-38.25 overflow-hidden rounded-[27px] bg-green-600/60 dark:bg-green-400/60'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-43.png'
                    alt='image-43'
                    className='w-full origin-bottom transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </MotionPreset>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
