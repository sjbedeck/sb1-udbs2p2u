import Topology from '@/assets/svg/topology'
import AdvertisementCard from '@/components/shadcn-studio/blocks/hero-section-32/widget-advertisement'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { TextFlip } from '@/components/ui/text-flip'
import { GlowEffect } from '@/components/ui/glow-effect'
import { Marquee } from '@/components/ui/marquee'

type Shows = {
  img: string
  name: string
  time: string
  date: string
  showLink: string
}[]

const HeroSection = ({ upcomingShows }: { upcomingShows: Shows }) => {
  return (
    <section className='flex-1'>
      <div className='flex flex-col py-12 sm:py-16 lg:py-24'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 max-xl:justify-center sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8'>
          <div className='flex flex-col justify-between gap-12'>
            <div className='flex flex-col justify-between gap-3 max-lg:items-center max-lg:text-center'>
              <MotionPreset fade slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
                <Badge variant='outline' className='text-sm font-normal'>
                  Book your Place
                </Badge>
              </MotionPreset>
              <MotionPreset
                fade
                slide={{ direction: 'up', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={0.3}
              >
                <h1 className='inline max-w-3xl text-2xl font-semibold sm:text-3xl lg:text-5xl lg:font-bold'>
                  Book Your Next <br /> <TextFlip words={['Show', 'Event', 'Ticket']} /> in Seconds
                </h1>
              </MotionPreset>
              <MotionPreset
                fade
                slide={{ direction: 'up', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={0.5}
              >
                <p className='text-muted-foreground text-xl'>
                  Skip the long lines and enjoy the best entertainment experiences hassle-free, allowing you to fully
                  immerse yourself in the fun and excitement.
                </p>
              </MotionPreset>

              <MotionPreset
                component='div'
                fade
                slide={{ direction: 'up', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={0.7}
                className='flex flex-wrap items-center gap-4'
              >
                <Button
                  asChild
                  size='lg'
                  className='relative w-fit overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
                >
                  <a href='#'>Book first show</a>
                </Button>
                <Button
                  className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 rounded-lg text-base'
                  size='lg'
                  asChild
                >
                  <a href='#'>Learn more</a>
                </Button>
              </MotionPreset>
            </div>
            <MotionPreset
              fade
              slide={{ direction: 'up', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.7}
              className='flex flex-col gap-5'
            >
              <div className='flex items-center justify-between'>
                <h6 className='text-xl font-semibold'>Upcoming shows</h6>
                <Button className='h-7 px-2 py-1 text-xs' variant='ghost' size='sm' asChild>
                  <a href='#'>View all</a>
                </Button>
              </div>

              <div className='relative'>
                <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-15 bg-gradient-to-r via-85% to-transparent' />
                <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-15 bg-gradient-to-l via-85% to-transparent' />
                <Marquee duration={40} gap={2} pauseOnHover>
                  {upcomingShows.map((item, index) => (
                    <Card className='gap-3 pt-0 pb-3 shadow-none max-lg:last:col-span-full' key={index}>
                      <CardContent className='px-0'>
                        <img
                          src={item.img}
                          alt={item.name}
                          className='aspect-video h-30 w-full rounded-t-xl object-cover'
                        />
                      </CardContent>
                      <CardHeader>
                        <CardTitle className='text-lg font-medium'>
                          <a href={item.showLink}>{item.name}</a>
                        </CardTitle>
                        <div className='text-muted-foreground flex items-center justify-between'>
                          <p className='text-base'>{item.date}</p>
                          <p className='text-base'>{item.time}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </Marquee>
              </div>
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            blur
            zoom
            transition={{ duration: 0.8 }}
            delay={0.4}
            className='relative flex items-center justify-center'
          >
            <Topology className='opacity-35 lg:scale-110' />

            <MotionPreset fade blur zoom transition={{ duration: 0.8 }} delay={0.2} className='absolute max-w-100'>
              <GlowEffect
                colors={['#0284C7', '#16A34A', '#D97706', '#DC2626']}
                mode='colorShift'
                blur='soft'
                className='opacity-60'
              />
              <AdvertisementCard className='relative shadow-none' />
            </MotionPreset>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
