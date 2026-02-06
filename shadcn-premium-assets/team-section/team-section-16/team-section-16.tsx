'use client'

import { useEffect, useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'

import { MotionPreset } from '@/components/ui/motion-preset'

type TeamMember = {
  img: string
  name: string
  role: string
  imgDark?: string
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className='relative overflow-hidden py-8 before:pointer-events-none before:absolute before:inset-0 before:size-full before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-105.png)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-40 sm:py-16 lg:py-24 dark:before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-105-dark.png)] dark:before:opacity-30'>
      <div className='absolute top-0 left-1/2 size-160 -translate-x-1/2'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-106.png'
          alt='gradient bg'
          className='opacity-15 dark:opacity-25'
        />
      </div>
      <div className='mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:mb-24 lg:px-8'>
        <div className='mx-auto space-y-4 text-center'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.1}>
            <Badge variant='outline' className='text-sm font-normal'>
              Creative team
            </Badge>
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.1}
          >
            Get to Know the People Behind the Progress
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
            Driven by purpose, our team blends creativity, innovation, and expertise to shape remarkable outcomes.
          </MotionPreset>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.3} transition={{ duration: 0.5 }}>
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
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnFocusIn: false
          })
        ]}
        opts={{ loop: true, align: 'center' }}
        setApi={setApi}
        className='w-full'
      >
        <CarouselContent className='-ml-6 max-lg:-ml-12'>
          {[...teamMembers, ...teamMembers].map((member, index) => {
            const isActive = current === index

            return (
              <CarouselItem key={`${member.name}-${index}`} className='pl-6 max-lg:pl-12 md:basis-1/3 xl:basis-1/5'>
                {member.imgDark ? (
                  <>
                    <img src={member.img} alt={member.name} className='h-84.25 w-full object-contain dark:hidden' />
                    <img
                      src={member.imgDark}
                      alt={member.name}
                      className='hidden h-84.25 w-full object-contain dark:block'
                    />
                  </>
                ) : (
                  <img src={member.img} alt={member.name} className='h-84.25 w-full object-contain' />
                )}

                {isActive && (
                  <MotionPreset
                    fade
                    slide={{ direction: 'down', offset: 10 }}
                    blur
                    transition={{ duration: 0.5 }}
                    delay={0.1}
                  >
                    <div className='mt-7 space-y-0.5 text-center'>
                      <p className='text-foreground text-xl font-medium'>{member.name}</p>
                      <p className='text-muted-foreground'>{member.role}</p>
                    </div>
                  </MotionPreset>
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Team
