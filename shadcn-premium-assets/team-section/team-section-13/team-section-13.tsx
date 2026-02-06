import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'

const Team = () => {
  return (
    <section className='min-h-screen pt-8 sm:pt-16 lg:pt-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Meet the Innovators Who Make It All Happen
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            A team fueled by passion and purpose—solving problems, building ideas, and shaping the future together.
          </MotionPreset>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.1} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              className='group relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            >
              About Us
            </Button>
          </MotionPreset>
        </div>
      </div>
      {/* Team Members */}
      <div className='relative overflow-hidden'>
        <MotionPreset slide={{ direction: 'down', offset: 50 }} fade delay={0.4} transition={{ duration: 1.5 }}>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-90.png'
            alt='TeamImage'
            className='size-full object-cover'
          />
        </MotionPreset>
      </div>
    </section>
  )
}

export default Team
