import { ArrowRightIcon } from 'lucide-react'

import * as motion from 'motion/react-client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/global-tooltip'

type Avatar = {
  src: string
  fallback: string
  name: string
}

type Logo = {
  image: string
  alt: string
}

const AboutUs = ({ avatars, logos }: { avatars: Avatar[]; logos: Logo[] }) => {
  return (
    <section className='relative overflow-hidden py-8 sm:py-16 lg:py-24'>
      {/* Background Ripple Effect */}
      <motion.svg
        width='1em'
        height='1em'
        viewBox='0 0 600 600'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='pointer-events-none absolute top-1/2 left-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 sm:size-[1200px] lg:size-[1600px]'
        initial='hidden'
        animate='visible'
      >
        <motion.circle
          strokeOpacity={0.05}
          cx='300'
          cy='300'
          r='295'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.08}
          cx='300'
          cy='300'
          r='255'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.1, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.1}
          cx='300'
          cy='300'
          r='215'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.2, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.12}
          cx='300'
          cy='300'
          r='175'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.3, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.15}
          cx='300'
          cy='300'
          r='135'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.4, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.18}
          cx='300'
          cy='300'
          r='95'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.5, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.2}
          cx='300'
          cy='300'
          r='55'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.6, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
        <motion.circle
          strokeOpacity={0.25}
          cx='300'
          cy='300'
          r='25'
          fill='none'
          stroke='var(--border)'
          strokeWidth='1'
          variants={{
            visible: {
              scale: [1, 0.9, 1],
              transition: {
                scale: { delay: 0.7, duration: 3, repeat: Infinity, ease: 'easeOut' }
              }
            }
          }}
        />
      </motion.svg>

      <div className='relative mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
        <div className='space-y-4 text-center'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            We Are More{' '}
            <span className='relative'>
              Than a Brand for Mission
              <span className='bg-primary absolute bottom-0 left-0 h-px w-full max-sm:hidden'></span>
            </span>{' '}
            in Motion
          </h2>
          <p className='text-muted-foreground max-w-6xl text-xl'>
            We&apos;re a passionate team united by a common goal - to create meaningful solutions that make a real
            impact. From humble beginnings to ambitious visions, our journey is driven by innovation, trust, and a
            commitment to excellence.
          </p>

          <div className='flex justify-center gap-4'>
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
              <a href='#'>
                Read more
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
            <Button size='lg' variant='outline' className='group rounded-lg text-base shadow-none' asChild>
              <a href='#'>Free trial</a>
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-45.png'
            alt='Image'
            className='h-full max-h-91 min-h-52 w-full rounded-lg object-cover'
          />

          <div className='space-y-6 max-lg:text-center'>
            <h3 className='text-xl font-semibold'>
              We&apos;re all about creating awesome resources that help you succeed!
            </h3>
            <p className='text-muted-foreground'>
              We understand the immense importance of high-quality educational materials in fostering effective learning
              experiences. That&apos;s why we are deeply committed to supporting educators in their vital roles. Our
              mission is to provide our users with exceptional resources, comprehensive tools, and steadfast support,
              ensuring they have everything they need to thrive in their teaching endeavors. We believe that by
              empowering educators with the best materials and assistance, we can significantly enhance the learning
              journey for students everywhere.
            </p>
            <div className='flex flex-col gap-4 max-lg:items-center max-lg:justify-center'>
              <p className='text-muted-foreground text-xs'>Trusted by Founders and Entrepreneurs all over the world</p>

              <div className='flex -space-x-2'>
                <TooltipProvider>
                  {avatars.map((avatar, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger>
                        <Avatar className='ring-ring size-10 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:scale-105'>
                          <AvatarImage src={avatar.src} alt={avatar.name} />
                          <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{avatar.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-9'>
          {logos.map((logo, index) => (
            <img key={index} src={logo.image} alt={logo.alt} className='h-7' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
