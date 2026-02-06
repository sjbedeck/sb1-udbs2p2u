import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

type GalleryImage = {
  src: string
  alt: string
  className?: string
}[]

const Gallery = ({ galleryImage }: { galleryImage: GalleryImage }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Gallery
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Our Work in Pictures
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Explore our gallery to learn more about our amazing products and their features.
          </MotionPreset>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          {galleryImage.map((image, index) => (
            <MotionPreset
              key={index}
              className={cn('overflow-hidden rounded-lg', image.className)}
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              transition={{ duration: 0.8 }}
              delay={0.9 + index * 0.15}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
              />
            </MotionPreset>
          ))}
        </div>

        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} transition={{ duration: 0.8 }} delay={1.6}>
          <div className='mt-12 flex items-center justify-between gap-6 sm:mt-16 lg:mt-24'>
            <div className='space-y-2'>
              <p className='font-semibold'>Choose your right plan!</p>
              <p className='text-muted-foreground'>22 photos, 6 videos</p>
            </div>
            <Button className='rounded-lg text-base' size='lg' asChild>
              <a href='#'>View all</a>
            </Button>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default Gallery
