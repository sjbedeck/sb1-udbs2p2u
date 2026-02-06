'use client'

import { useEffect, useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'motion/react'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

export type TeamImagesType = {
  images: {
    index: number
    src: string
  }[]
  team: string
}

const AssignTaskCard = ({ TeamImages }: { TeamImages: TeamImagesType[] }) => {
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
    <Card className='h-full justify-between'>
      <CardContent className='flex flex-col gap-1'>
        <MotionPreset
          component='h3'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.15}
          transition={{ duration: 0.5 }}
          className='text-lg font-medium'
        >
          Assign tasks with ease
        </MotionPreset>

        <MotionPreset
          component='p'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.3}
          transition={{ duration: 0.5 }}
          className='text-muted-foreground'
        >
          Delegate work to the right people in just a few clicks, keeping projects structured, accountable, and moving
          forward.
        </MotionPreset>
      </CardContent>
      <MotionPreset
        fade
        blur
        slide={{ direction: 'down', offset: 15 }}
        delay={0.45}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-8 py-5'
      >
        <div className='grid grid-cols-3 gap-3 px-8.75'>
          {Array.from({ length: 9 }, (_, i) => {
            const activeTeam = TeamImages[current]
            const imageData = activeTeam?.images.find(img => img.index === i)
            const hasImage = !!imageData

            return (
              <motion.div
                key={i}
                layout
                animate={{ opacity: 1 }}
                transition={{
                  layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3 }
                }}
                className={cn(
                  'h-27.5 rounded-xl border grayscale transition-all duration-300',
                  hasImage && 'border-card border-2 shadow-sm hover:shadow-xl hover:grayscale-0'
                )}
              >
                <AnimatePresence mode='wait'>
                  {hasImage && (
                    <motion.img
                      key={`${current}-${imageData.src}`}
                      src={imageData.src}
                      alt=''
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, ease: [0.44, 1.24, 0.84, 1.12] }}
                      className='h-full w-full rounded-xl object-cover'
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <Carousel
          opts={{
            align: 'center',
            loop: true,
            slidesToScroll: 1
          }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          setApi={setApi}
          className='max-md:px-4'
        >
          <CarouselContent className='-ml-3 max-h-31 items-center'>
            {TeamImages.map((teamData, index) => (
              <CarouselItem key={teamData.team} className='basis-3/5 pl-3 sm:basis-1/2'>
                <div
                  className={cn('text-primary text-center text-sm font-medium', {
                    'bg-primary/10 rounded-full px-3 py-1.5': current === index
                  })}
                >
                  {teamData.team}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MotionPreset>
    </Card>
  )
}

export default AssignTaskCard
