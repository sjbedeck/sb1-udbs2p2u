'use client'

import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'

import { BubbleBackground } from '@/components/ui/bubble-background'
import { Rating } from '@/components/ui/rating'
import { MotionPreset } from '@/components/ui/motion-preset'

import { WavesCanvas } from '@/components/shadcn-studio/blocks/testimonials-component-11/waves-canvas'

type TestimonialItem = {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

type Avatar = {
  src: string
  className: string
}[]

const TestimonialsComponent = ({ avatars, testimonials }: { avatars: Avatar; testimonials: TestimonialItem[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const handleResize = () => {
      setCount(api.scrollSnapList().length)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [api])

  return (
    <section className='relative overflow-hidden bg-black py-8 sm:py-16 lg:py-24'>
      <BubbleBackground interactive className='absolute inset-0 flex items-center justify-center opacity-15' />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Content */}
        <div className='space-y-4 text-neutral-50'>
          <MotionPreset
            component='p'
            className='text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Real Customers
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
            fade
            blur
            delay={0.2}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Helping thousands of students to succeed with speed
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-xl text-white/80'
            fade
            blur
            delay={0.4}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Find out how our happy clients are raving about us.
          </MotionPreset>

          <MotionPreset fade blur delay={0.6} slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              className='bg-neutral-100 text-neutral-900 hover:bg-neutral-100/90 focus-visible:ring-neutral-100/20'
              asChild
            >
              <a href='#'> View all reviews</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Waves Section */}
        <MotionPreset
          fade
          blur
          delay={0.8}
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.5 }}
          className='relative my-8 h-80 sm:my-12 lg:my-16'
        >
          <WavesCanvas />

          {avatars.map((avatar, index) => (
            <MotionPreset
              fade
              key={index}
              className={cn('absolute size-10', avatar.className)}
              motionProps={{
                animate: {
                  y: [0, -10, 0],
                  opacity: 1
                },
                transition: {
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: Math.random() * 2
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 0.6
                  }
                }
              }}
            >
              <Avatar className='size-10 transition-all duration-500 hover:scale-120'>
                <AvatarImage src={avatar.src} alt='Hallie Richards' />
                <AvatarFallback className='text-xs'>HR</AvatarFallback>
              </Avatar>
            </MotionPreset>
          ))}
        </MotionPreset>

        {/* Testimonials Carousel */}
        <MotionPreset fade blur delay={1} slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
          <Carousel
            className='relative w-full space-y-5'
            opts={{
              align: 'start',
              slidesToScroll: 1
            }}
            setApi={setApi}
          >
            <CarouselContent className='-ml-6'>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='pl-6 md:basis-1/2 lg:basis-1/3'>
                  <Card className='h-full border-none bg-neutral-100/20 shadow-none'>
                    <CardContent className='space-y-8'>
                      <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />

                      <p className='text-white/80'>{testimonial.content}</p>
                      <div className='flex items-center gap-2'>
                        <Avatar className='size-10'>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(' ', 2)
                              .map(n => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className='space-y-0.5'>
                          <h3 className='font-medium text-white'>{testimonial.name}</h3>
                          <p className='text-xs text-white/80'>
                            {testimonial.role} at{' '}
                            <span className='font-semibold text-white'>{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}

            <CarouselPrevious
              variant='outline'
              className='absolute top-28 -left-3 translate-y-0 cursor-pointer rounded-full !bg-white disabled:opacity-100 sm:size-9 md:-left-4'
            />
            <CarouselNext
              variant='outline'
              className='absolute top-28 -right-3 translate-y-0 cursor-pointer rounded-full !bg-white disabled:opacity-100 sm:size-9 md:-right-4'
            />

            <div className='flex items-center justify-center gap-1'>
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'size-2.5 cursor-pointer rounded-full transition-colors',
                    index === current ? 'bg-neutral-100' : 'bg-neutral-100/20'
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
