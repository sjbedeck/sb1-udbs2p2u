'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'

export type TestimonialItem = {
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
    <div className='space-y-7'>
      <Carousel
        opts={{
          align: 'start'
        }}
        setApi={setApi}
      >
        <CarouselContent className='sm:-ml-6'>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className='pt-4 sm:pl-6 lg:basis-1/2'>
              <Card className='relative h-full rounded-md shadow-none'>
                <span className='absolute -top-8 left-1/2 -translate-x-1/2 text-9xl'>&ldquo;</span>
                <CardContent className='flex h-full items-center gap-6 max-sm:flex-col lg:max-xl:flex-col'>
                  <div className='flex h-full flex-1 flex-col justify-between gap-4'>
                    <p className='text-muted-foreground'>&quot;{testimonial.content}&quot;</p>
                    <div className='space-y-1'>
                      <h4 className='font-bold'>{testimonial.name}</h4>
                      <p className='text-muted-foreground text-sm'>
                        {testimonial.role} at{' '}
                        <span className='text-card-foreground font-semibold'>{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                  <div className='bg-primary/20 flex h-48 w-55 items-center justify-center rounded-md max-sm:w-full lg:max-xl:w-full'>
                    <img src={testimonial.avatar} className='h-48' alt={testimonial.name} />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant='default'
          className='disabled:bg-secondary disabled:text-primary absolute top-1/2 -left-3 size-9 -translate-y-1/2 cursor-pointer rounded-full disabled:opacity-100 md:-left-4'
        />
        <CarouselNext
          variant='default'
          className='disabled:bg-secondary disabled:text-primary absolute top-1/2 -right-3 size-9 -translate-y-1/2 cursor-pointer rounded-full disabled:opacity-100 md:-right-4'
        />
      </Carousel>

      <div className='flex items-center justify-center gap-1'>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'size-2.5 cursor-pointer rounded-full transition-colors',
              index === current ? 'bg-primary' : 'bg-primary/20'
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsComponent
