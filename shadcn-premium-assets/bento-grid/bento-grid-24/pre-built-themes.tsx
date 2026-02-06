'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party Imports
import Autoplay from 'embla-carousel-autoplay'

// Component Imports
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'

const themes = [
  { style: 'default', img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-105.png' },
  { style: 'marvel', img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-106.png' },
  { style: 'ghibli-studio', img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-107.png' },
  { style: 'clean-slate', img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-108.png' }
]

const PreBuiltThemes = () => {
  // States
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
    <>
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
        opts={{
          align: 'center',
          loop: true
        }}
        className=''
      >
        {/* Carousel Content */}
        <CarouselContent>
          {[...themes, ...themes].map((theme, index) => (
            <CarouselItem key={index} className='basis-auto'>
              <div
                className='flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 select-none'
                onClick={() => {
                  if (api) api.scrollTo(index)
                }}
              >
                <div className='bg-background relative size-6.5 shrink-0 rounded border p-1'>
                  <img src={theme.img} alt={theme.style} />
                </div>
                <span className='whitespace-nowrap'>
                  {theme.style.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r to-transparent' />
        <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-[25%] bg-gradient-to-l to-transparent' />
      </Carousel>

      <div className='flex justify-center'>
        <img
          src={`https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/basic-features-real-time-${themes[current % 4].style}-light.png?width=444&format=auto`}
          alt='Default Light Theme'
          className='rounded-sm border dark:hidden'
        />
        <img
          src={`https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/basic-features-real-time-${themes[current % 4].style}-dark.png?width=444&format=auto`}
          alt='Default Dark Theme'
          className='hidden rounded-sm border dark:inline-block'
        />
      </div>
    </>
  )
}

export default PreBuiltThemes
