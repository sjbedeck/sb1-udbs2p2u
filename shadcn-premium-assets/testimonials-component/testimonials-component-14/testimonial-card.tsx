'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'
import { Rating } from '@/components/ui/rating'

export type TestimonialItem = {
  name: string
  role: string
  avatar: string
  company: string
  content: string
  rating: number
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
    <div className='space-y-10'>
      <Carousel
        opts={{
          align: 'start'
        }}
        setApi={setApi}
      >
        <CarouselContent className='sm:-ml-6'>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className='sm:pl-6 lg:basis-1/2'>
              <Card className='h-full rounded-lg shadow-none'>
                <CardContent className='flex items-center gap-6 max-sm:flex-col lg:max-xl:flex-col'>
                  <img src={testimonial.avatar} alt={testimonial.name} className='size-63.5 rounded-md object-cover' />
                  <div className='flex-1 space-y-4'>
                    <div className='space-y-1'>
                      <h4 className='font-semibold'>{testimonial.name}</h4>
                      <p className='text-muted-foreground text-sm'>
                        {testimonial.role} at{' '}
                        <span className='text-card-foreground font-semibold'>{testimonial.company}</span>
                      </p>
                    </div>
                    <Separator />
                    <div className='space-y-2'>
                      <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />
                      <p className='text-muted-foreground'>{testimonial.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant='default'
          className='disabled:bg-secondary disabled:text-primary absolute top-1/2 left-0 size-9 -translate-y-1/2 cursor-pointer rounded-full disabled:opacity-100 md:-left-4'
        />
        <CarouselNext
          variant='default'
          className='disabled:bg-secondary disabled:text-primary absolute top-1/2 right-0 size-9 -translate-y-1/2 cursor-pointer rounded-full disabled:opacity-100 md:-right-4'
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
