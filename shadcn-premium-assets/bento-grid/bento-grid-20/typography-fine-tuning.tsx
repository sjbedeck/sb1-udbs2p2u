'use client'

import Autoplay from 'embla-carousel-autoplay'
import { SparklesIcon, WandSparklesIcon } from 'lucide-react'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import { cn } from '@/lib/utils'

const data = [
  {
    text: 'Heading 1',
    textClassName: 'text-4xl font-semibold'
  },
  {
    text: 'Heading 2',

    textClassName: 'text-3xl font-semibold'
  },
  {
    text: 'Heading 3',

    textClassName: 'text-2xl font-medium'
  },
  {
    text: 'Paragraph'
  }
]

const TypographyFineTuning = () => {
  return (
    <Carousel
      opts={{ loop: true, align: 'center' }}
      plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
      orientation='vertical'
      className='w-full'
    >
      <CarouselContent className='h-70 gap-4'>
        {[...data, ...data].map((item, index) => (
          <CarouselItem
            key={index}
            className={cn('flex basis-1/6 items-center justify-center pt-0 text-center', item.textClassName, {
              'pt-4': index === 0
            })}
          >
            {item.text}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='from-card pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b to-transparent' />
      <div className='from-card pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t to-transparent' />
      <WandSparklesIcon className='text-primary/40 absolute bottom-20 left-8 rotate-x-180' />
      <SparklesIcon className='text-primary/40 absolute top-20 right-8 rotate-120' />
    </Carousel>
  )
}

export default TypographyFineTuning
