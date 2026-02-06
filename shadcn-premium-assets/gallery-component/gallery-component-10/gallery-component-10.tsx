import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

type GalleryImage = {
  src: string
  alt: string
  className?: string
}[]

const Gallery = ({ data }: { data: GalleryImage }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='row-span-1 space-y-4'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>See What We Create</h2>
            <p className='text-muted-foreground text-xl'>
              A vibrant gallery showcasing the dedication, craftsmanship, and creativity behind our projects.
            </p>
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6'>
              See all
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          </div>

          {/* Image Grids */}
          {data.map((image, index) => (
            <div key={index} className={image.className}>
              <img src={image.src} alt={image.alt} className='h-full w-full rounded-lg object-cover' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
