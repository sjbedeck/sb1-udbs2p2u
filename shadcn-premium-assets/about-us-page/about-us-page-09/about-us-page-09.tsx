import { PlayIcon } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'

type Avatar = {
  src: string
  fallback: string
  name: string
}[]

type Stat = {
  title: number
  value: string
}[]

const AboutUs = ({ avatars, stats }: { avatars: Avatar; stats: Stat }) => {
  return (
    <section className='bg-background py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-9 lg:grid-cols-2'>
          <div className='flex flex-col gap-9'>
            <div className='flex items-center gap-6 overflow-hidden'>
              <div className='to-primary h-52 w-4 bg-gradient-to-t from-transparent' />
              <MotionPreset slide={{ direction: 'left' }} fade blur transition={{ duration: 0.8 }}>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Our story</h2>
                  <p className='text-muted-foreground text-xl font-semibold md:text-3xl'>
                    Your vision Our Expertise Your Success Get Noticed Generate
                    <span className='text-primary inline-block'>Leads Dominate.</span>
                  </p>
                </div>
              </MotionPreset>
            </div>

            <MotionPreset fade blur slide={{ direction: 'up' }} delay={0.3} transition={{ duration: 0.8 }}>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-4.png'
                alt='Team meeting office'
                className='max-h-91 w-full rounded-lg object-cover'
              />
            </MotionPreset>
          </div>

          {/* Cards */}
          <div className='flex flex-col gap-6'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <MotionPreset fade blur slide={{ direction: 'up' }} delay={0.6} transition={{ duration: 0.8 }}>
                <div className='relative overflow-hidden rounded-md'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-3.png'
                    alt='Team collaboration'
                    className='h-52 w-full rounded-md object-cover'
                  />
                  <div className='absolute top-6 right-6 flex gap-4'>
                    <Badge>Tag blog</Badge>
                    <Badge>Trends</Badge>
                  </div>
                </div>
              </MotionPreset>
              <MotionPreset fade blur slide={{ direction: 'up' }} delay={0.6} transition={{ duration: 0.8 }}>
                <div className='relative overflow-hidden rounded-md'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-2.png'
                    alt='Team collaboration'
                    className='h-52 w-full rounded-md object-cover'
                  />
                  <div className='absolute top-6 right-6 flex gap-4'>
                    <Badge>Tag blog</Badge>
                    <Badge>Trends</Badge>
                  </div>
                </div>
              </MotionPreset>
            </div>

            <div className='flex flex-1 flex-col justify-center gap-9'>
              <MotionPreset fade blur slide={{ direction: 'up' }} delay={0.8} transition={{ duration: 0.5 }}>
                <p className='text-muted-foreground text-xl'>
                  Our story is a testament to the power of collaboration and resilience. Together, we have navigated
                  challenges, celebrated milestones, and crafted a narrative of growth and achievement in the
                  construction industry.
                </p>
              </MotionPreset>

              {/* Stats */}
              <MotionPreset fade blur slide={{ direction: 'up' }} delay={0.9} transition={{ duration: 0.5 }}>
                <div className='grid gap-10 sm:grid-cols-3'>
                  {stats.map((stat, idx) => (
                    <div key={idx} className='flex flex-col items-center gap-2.5'>
                      <h3 className='text-foreground text-4xl font-medium'>
                        <NumberTicker startValue={0} value={stat.title} delay={0.8} stiffness={170} />
                        K+
                      </h3>
                      <p className='text-muted-foreground text-center'>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </MotionPreset>

              {/* Avatar Group */}
              <MotionPreset fade blur slide={{ direction: 'up' }} delay={1} transition={{ duration: 0.6 }}>
                <div className='flex items-center gap-6'>
                  <div className='flex -space-x-3'>
                    {avatars.map((avatar, index) => (
                      <Avatar key={index} className='ring-background size-12 ring-2'>
                        <AvatarImage src={avatar.src} alt={avatar.name} />
                        <AvatarFallback>{avatar.fallback}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>

                  <a href='#' className='flex items-center gap-3'>
                    <Button
                      variant='outline'
                      size='icon-lg'
                      className='border-primary text-primary rounded-full'
                      aria-label='Play video'
                    >
                      <PlayIcon />
                    </Button>
                    <span className='text-base font-medium uppercase'>Watch Intro</span>
                  </a>
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
