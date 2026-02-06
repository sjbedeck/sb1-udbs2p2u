'use client'

import { useEffect, useState } from 'react'

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
import { MotionPreset } from '@/components/ui/motion-preset'

import LogoVector from '@/assets/svg/logo-vector'

type TestimonialItem = {
  name: string
  role: string
  avatar: string
  company: string
  content: string
}

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
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
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-2 lg:px-8'>
        {/* Left Content */}
        <div className='space-y-4'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Testimonial
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
            fade
            blur
            delay={0.3}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Some of our valuable customers feedback
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            delay={0.6}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Predictive analytics, and recommendations to optimize their processes and better business outcomes.
          </MotionPreset>

          <MotionPreset delay={0.9} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              className='relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              asChild
            >
              <a href='#'>More customer stories</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Right Testimonial Carousel */}
        <MotionPreset delay={0.3} fade blur slide={{ direction: 'right', offset: 50 }} transition={{ duration: 0.6 }}>
          <Carousel
            opts={{
              align: 'start'
            }}
            setApi={setApi}
          >
            <CarouselContent className='sm:-ml-6'>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='sm:pl-6'>
                  <Card className='from-primary to-primary/60 bg-gradient-to-br py-0'>
                    <CardContent className='grid items-end justify-between gap-2.5 px-0 md:grid-cols-5 md:px-3.5'>
                      <div className='text-primary-foreground flex flex-col justify-between gap-11 p-6 md:col-span-3'>
                        <p className='line-clamp-3'>&quot;{testimonial.content}&quot;</p>
                        <div>
                          <h4 className='mb-1 font-semibold'>{testimonial.name}</h4>
                          <p className='text-sm'>
                            {testimonial.role} at <span className='font-semibold'>{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                      <div className='relative z-1 mx-auto flex justify-center md:col-span-2 lg:justify-end'>
                        <LogoVector className='text-primary-foreground pointer-events-none absolute -bottom-11.5 -left-15 -z-1 size-40 opacity-20 sm:-left-19' />
                        <img src={testimonial.avatar} alt={testimonial.name} className='h-50 object-cover' />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant='outline'
              className='!bg-background absolute top-1/2 left-0 size-9 -translate-y-1/2 cursor-pointer rounded-full disabled:opacity-100 md:-left-4'
            />
            <CarouselNext
              variant='outline'
              className='!bg-background absolute top-1/2 right-0 size-9 -translate-y-1/2 cursor-pointer rounded-full disabled:opacity-100 md:-right-4'
            />
          </Carousel>

          <div className='mt-5 flex items-center justify-center gap-1'>
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  'size-2.5 cursor-pointer rounded-full transition-colors',
                  index === current ? 'bg-primary' : 'bg-primary/10'
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
