import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'
import { SpinningText } from '@/components/shadcn-studio/blocks/spinning-text'

import StripsSvg from '@/assets/svg/strips'
import FlowerSvg from '@/assets/svg/flower'
import RainbowSvg from '@/assets/svg/rainbow'
import LogoSvg from '@/assets/svg/logo'

const Team = () => {
  return (
    <section className='relative py-8 before:absolute before:inset-0 before:-z-1 before:size-full before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-103.png)] sm:py-16 lg:py-24 dark:before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-103-dark.png)]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            Meet Our{' '}
            <span className='relative z-10'>
              <span>Fantastic</span>
              <span className='bg-primary absolute bottom-1 left-0 -z-10 h-px w-full' aria-hidden='true' />
            </span>{' '}
            Team
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.1} transition={{ duration: 0.5 }}>
            <Button size='lg' className='rounded-lg text-base'>
              About Us
            </Button>
          </MotionPreset>
        </div>

        {/* Team Members */}
        <div className='relative'>
          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
            className='absolute top-0 left-0 hidden text-[#4850EA] lg:block'
          >
            <StripsSvg />
          </MotionPreset>
          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
            className='absolute end-[16%] -bottom-8 hidden text-[#2ECED4]/85 lg:block'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='76' height='76' viewBox='0 0 76 76' fill='none'>
              <path
                d='M45.2318 24.4722L38.4064 40.113L22.8969 33.3449C16.1349 30.3941 8.26537 33.4657 5.32508 40.2035C2.3848 46.9414 5.48467 54.7997 12.2467 57.7505L52.2423 75.204L69.715 35.1646C72.6553 28.4267 69.5556 20.5683 62.7936 17.6175C56.0316 14.6667 48.1621 17.7383 45.2218 24.4761L45.2318 24.4722Z'
                fill='currentColor'
              />
            </svg>
          </MotionPreset>
          <MotionPreset
            fade
            zoom
            delay={0.5}
            transition={{ duration: 0.5 }}
            className='absolute -top-15 right-42 -z-1 duration-300 max-lg:hidden'
          >
            <div className='relative'>
              <div className='border-foreground outline-foreground flex size-26 items-center justify-center rounded-full border outline outline-offset-24'>
                <LogoSvg className='size-13' />
              </div>
              <div className='absolute inset-0 w-full translate-y-1/2'>
                <SpinningText radius={6}>Meet Our Team • Meet Our Team • Meet Our Team •</SpinningText>
              </div>
            </div>
          </MotionPreset>

          <div className='grid grid-cols-2 items-center gap-6 lg:grid-cols-5'>
            <MotionPreset
              fade
              slide
              delay={1.1}
              transition={{ duration: 0.5 }}
              className='rounded-xl bg-white max-lg:order-8'
            >
              <div className='group relative rounded-xl bg-green-600/30 dark:bg-green-400/30'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-88.png'
                  alt='Team Member'
                  className='size-full rounded-xl object-contain'
                />
                <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='absolute right-4 bottom-4 left-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                  <h3 className='text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    Sarah Wilson
                  </h3>
                  <p className='text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    UI Designer
                  </p>
                </div>
              </div>
            </MotionPreset>

            <div className='space-y-6 max-lg:order-6'>
              <MotionPreset fade slide delay={0.7} transition={{ duration: 0.5 }} className='rounded-xl bg-white'>
                <div className='group relative rounded-xl bg-sky-600/30 dark:bg-sky-400/30'>
                  <div>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-84.png'
                      alt='Team Member'
                      className='size-full rounded-xl object-contain'
                    />
                    <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                    <div className='absolute right-4 bottom-4 left-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                      <h3 className='text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        Michael Chen
                      </h3>
                      <p className='text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
              </MotionPreset>

              <MotionPreset fade slide delay={0.9} transition={{ duration: 0.5 }} className='rounded-xl bg-white'>
                <div className='group dark:amber-400/30 relative rounded-xl bg-amber-600/30'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-83.png'
                    alt='Team Member'
                    className='size-full rounded-xl object-contain'
                  />
                  <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute right-4 bottom-4 left-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      David Park
                    </h3>
                    <p className='text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Product Manager
                    </p>
                  </div>
                  <div className='absolute start-0 bottom-0 z-1 hidden -translate-x-1/2 translate-y-1/2 animate-spin text-[#EA5548] transition-all motion-reduce:animate-none lg:block'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
                      <path
                        d='M48 0C34.7429 0 24 10.7429 24 24C24 10.7429 13.2571 0 0 0C0 13.2571 10.7429 24 24 24C10.7429 24 0 34.7429 0 48C13.2571 48 24 37.2571 24 24C24 37.2571 34.7429 48 48 48C48 34.7429 37.2571 24 24 24C37.2571 24 48 13.2571 48 0Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                </div>
              </MotionPreset>
            </div>

            <MotionPreset
              fade
              zoom
              delay={0.5}
              transition={{ duration: 0.5 }}
              className='max-lg:col-span-2 max-lg:flex max-lg:items-center max-lg:justify-center'
            >
              <div className='rounded-xl bg-white max-lg:max-w-80'>
                <div className='group bg-primary/30 relative rounded-xl'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-89.png'
                    alt='Team Member'
                    className='size-full rounded-xl object-contain'
                  />
                  <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute right-6 bottom-6 left-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Emma Rodriguez
                    </h3>
                    <p className='text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Creative Director
                    </p>
                  </div>
                  <div className='absolute start-10 top-0 z-1 hidden -translate-y-1/2 animate-spin text-[#E4C200] transition-all motion-reduce:animate-none lg:block'>
                    <FlowerSvg />
                  </div>
                </div>
              </div>
            </MotionPreset>

            <div className='space-y-6'>
              <MotionPreset fade slide={{ direction: 'right', offset: 50 }} delay={0.7} className='rounded-xl bg-white'>
                <div className='group dark:amber-400/30 relative rounded-xl bg-amber-600/30'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-86.png'
                    alt='Team Member'
                    className='size-full rounded-xl object-contain'
                  />
                  <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute right-4 bottom-4 left-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Alex Johnson
                    </h3>
                    <p className='text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Marketing Lead
                    </p>
                  </div>
                </div>
              </MotionPreset>

              <MotionPreset
                fade
                slide={{ direction: 'right', offset: 50 }}
                delay={0.9}
                transition={{ duration: 0.5 }}
                className='rounded-xl bg-white'
              >
                <div className='group relative rounded-xl bg-sky-600/30 dark:bg-sky-400/30'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-85.png'
                    alt='Team Member'
                    className='size-full rounded-xl object-contain'
                  />
                  <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                  <div className='absolute right-4 bottom-4 left-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                    <h3 className='text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Lisa Thompson
                    </h3>
                    <p className='text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                      Operations Manager
                    </p>
                  </div>
                </div>
              </MotionPreset>
            </div>

            <MotionPreset
              fade
              slide={{ direction: 'right', offset: 50 }}
              delay={1.1}
              transition={{ duration: 0.5 }}
              className='rounded-xl bg-white max-lg:order-7'
            >
              <div className='group bg-destructive/30 relative rounded-xl'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-87.png'
                  alt='Team Member'
                  className='size-full rounded-xl object-contain'
                />
                <div className='absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                <div className='absolute right-4 bottom-4 left-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0'>
                  <h3 className='text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    Ryan Miller
                  </h3>
                  <p className='text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    Tech Lead
                  </p>
                </div>
                <div className='absolute end-0 top-14 z-1 hidden translate-x-1/2 lg:block'>
                  <RainbowSvg />
                </div>
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
