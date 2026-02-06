import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'
import { BorderBeam } from '@/components/ui/border-beam'

import Users from '@/assets/svg/users'
import Medal from '@/assets/svg/medal'
import Support from '@/assets/svg/support'

const features = [
  { img: <Users />, label: 'Trusted by 5,000+ clients' },
  { img: <Medal />, label: 'Projects delivered with excellence' },
  { img: <Support />, label: 'Verified top-rated freelancers' }
]

const HeroSection = () => {
  return (
    <section className='flex-1 overflow-hidden pt-8 sm:pt-16 lg:pt-24'>
      <div className='relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        {/* Hero Content */}
        <div className='flex w-full max-w-4xl flex-col items-center gap-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Check new updates
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h1'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='text-2xl font-semibold sm:text-3xl lg:text-5xl lg:font-bold'
          >
            Turn Your Data Into Action Now
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='text-muted-foreground text-xl'
          >
            Get crystal-clear insights that help you scale faster. Track performance, analyse trends, and make smarter
            decisions with powerful, real-time marketing analytics.
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.9}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex flex-wrap items-center gap-4'
          >
            <Button
              size='lg'
              className='group relative w-fit overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              asChild
            >
              <a href='#'>
                Start Building now
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </MotionPreset>
        </div>
        <div className='grid grid-cols-2 items-center gap-x-14 gap-y-6 sm:grid-cols-3'>
          {features.map((feature, index) => (
            <MotionPreset
              component='div'
              key={`${feature.label}-${index}`}
              fade
              blur
              slide={{ direction: 'down', offset: 30 }}
              transition={{ duration: 0.45 }}
              delay={1 + index * 0.15}
              className='group flex flex-col items-center gap-5 text-center max-sm:last:col-span-full sm:max-w-30'
            >
              <div className='transition-all duration-300 group-hover:scale-115'>{feature.img}</div>
              <div className='text-muted-foreground text-sm'>{feature.label}</div>
            </MotionPreset>
          ))}
        </div>
        <MotionPreset
          component='div'
          fade
          zoom
          delay={1.4}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='outline-border relative mb-12 h-fit overflow-hidden rounded-xl p-0.5 outline-2 -outline-offset-2 outline-solid'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-64.png'
            alt='adminTemplate light'
            className='relative w-full dark:hidden'
          />
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-64-dark.png'
            alt='adminTemplate dark'
            className='relative hidden w-full dark:block'
          />
          <BorderBeam
            borderWidth={2}
            duration={9}
            size={300}
            className='from-destructive dark:from-destructive via-amber-600 to-transparent max-md:hidden dark:via-amber-400'
          />
          <BorderBeam
            duration={9}
            delay={3}
            size={300}
            borderWidth={2}
            className='from-green-600 via-sky-600 to-transparent max-md:hidden dark:from-green-400 dark:via-sky-400'
          />
          <BorderBeam
            duration={9}
            delay={6}
            size={350}
            borderWidth={2}
            className='from-primary/80 via-primary/30 to-transparent max-md:hidden'
          />
          <BorderBeam
            borderWidth={2}
            duration={9}
            size={300}
            className='from-destructive dark:from-destructive via-amber-600 to-transparent md:hidden dark:via-amber-400'
          />
          <BorderBeam
            duration={9}
            delay={13}
            size={300}
            borderWidth={2}
            className='from-green-600 via-sky-600 to-transparent md:hidden dark:from-green-400 dark:via-sky-400'
          />
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
