'use client'

import { useEffect, useRef, useState } from 'react'

import { MoonIcon, SunMediumIcon } from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'
import { AnimatedBeam } from '@/components/ui/animated-beam'
import ThemeItem from '@/components/shadcn-studio/blocks/bento-grid-20/theme-item'

import { cn } from '@/lib/utils'

const themes = [
  {
    name: 'Default',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-105.png'
  },
  {
    name: 'Clean Slate',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-108.png'
  },
  {
    name: 'Ghibli Studio',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-107.png'
  },
  {
    name: 'Marvel',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-106.png'
  },
  {
    name: 'Summer',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-109.png'
  },
  {
    name: 'Claude',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-110.png'
  }
]

const StunningTheme = () => {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }
  }, [api])

  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative flex flex-1 items-center justify-between gap-4 max-sm:flex-col sm:pl-4'>
      <div className='flex gap-12 sm:flex-col sm:gap-15.5'>
        <div
          ref={div2Ref}
          className='bg-background flex items-center justify-center gap-3 rounded-xl border px-3.5 py-2.5 font-medium whitespace-nowrap shadow-sm max-sm:w-35 dark:bg-white dark:text-black'
        >
          <SunMediumIcon className='size-5' />
          Light Mode
        </div>
        <div
          ref={div3Ref}
          className='dark:bg-background dark:text-foreground flex items-center justify-center gap-3 rounded-xl border bg-black px-3.5 py-2.5 font-medium whitespace-nowrap text-white shadow-sm max-sm:w-35'
        >
          <MoonIcon className='size-5' />
          Dark Mode
        </div>
      </div>

      <div className='flex gap-23 sm:flex-col sm:gap-12.75'>
        <span ref={span1Ref} className='size-0.5' />
        <span ref={span2Ref} className='size-0.5' />
        <span ref={span3Ref} className='size-0.5' />
      </div>

      <div ref={div1Ref} className='relative flex items-center sm:h-52.5'>
        <Carousel
          opts={{
            align: 'center',
            loop: true,
            slidesToScroll: 1
          }}
          orientation='vertical'
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          setApi={setApi}
          className='sm:bg-card md:-mr-10'
        >
          <CarouselContent className='max-h-50 sm:-mt-7 md:-ml-3'>
            {themes.map(theme => (
              <CarouselItem key={theme.name} className={cn('sm:basis-1/2 sm:pt-7 md:pl-3')}>
                <ThemeItem theme={theme} className='bg-card' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='from-card pointer-events-none absolute inset-x-0 -top-2 h-[30%] bg-gradient-to-b to-transparent max-sm:hidden' />
          <div className='from-card pointer-events-none absolute inset-x-0 -bottom-2 h-[30%] bg-gradient-to-t to-transparent' />
        </Carousel>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={span2Ref}
        startYOffset={-80}
        className='text-primary -z-1 sm:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={span2Ref}
        className='text-primary -z-1 max-sm:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span1Ref}
        className='text-primary -z-1 max-sm:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span1Ref}
        reverse
        className='text-primary -z-1 sm:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span3Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={div2Ref}
        className='text-primary -z-1 max-sm:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={div2Ref}
        reverse
        className='text-primary -z-1 sm:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={div3Ref}
        className='text-primary -z-1'
        duration={4}
      />
    </div>
  )
}

export default StunningTheme
