'use client'

import { useEffect, useState } from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@/lib/utils'

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
  className: string
}

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
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
    <div className='space-y-10'>
      <Carousel
        opts={{ loop: true, align: 'center' }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnFocusIn: false
          })
        ]}
        setApi={setApi}
        className='w-full'
      >
        <CarouselContent className='-ml-6 pt-5'>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <CarouselItem
              key={index}
              className='relative flex flex-col items-center justify-center pb-20 pl-6 sm:basis-1/3 lg:basis-1/5'
            >
              <div
                className={cn(
                  'flex items-end justify-center overflow-hidden rounded-xl transition-all duration-300 ease-in-out',
                  testimonial.className,
                  {
                    'ring-border shadow-lg sm:scale-110 sm:ring-3': current === index
                  }
                )}
              >
                <img
                  className='mx-auto w-auto rounded-lg transition-all duration-600 sm:w-full'
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
              </div>

              {current === index && (
                <div className='absolute bottom-0 mt-6 w-full px-4 text-center'>
                  <p className='mb-1 font-bold'>{testimonial.name}</p>
                  <p className='text-muted-foreground text-sm'>
                    {testimonial.role} at <span className='text-foreground font-semibold'>{testimonial.company}</span>
                  </p>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='mt-6 flex items-center justify-center gap-4'>
          <CarouselPrevious
            variant='default'
            className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
          />
          <CarouselNext
            variant='default'
            className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
          />
        </div>
      </Carousel>
    </div>
  )
}

export default TestimonialsComponent
