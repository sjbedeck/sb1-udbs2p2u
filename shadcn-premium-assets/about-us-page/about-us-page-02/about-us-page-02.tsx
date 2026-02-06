import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type StatCardData = {
  value: string
  title: string
  description: string
}

type ImageCardData = {
  src: string
  alt: string
  buttonText: string
  buttonLink: string
}

type AboutUsData = {
  leftImage: ImageCardData
  rightImage: ImageCardData
  stats: StatCardData[]
}

const AboutUs = ({ aboutUs }: { aboutUs: AboutUsData }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            The{' '}
            <span className='relative'>
              Adventure of Our
              <span className='bg-primary absolute bottom-0 left-0 h-px w-full'></span>
            </span>{' '}
            Success
          </h2>
          <p className='text-muted-foreground max-w-6xl text-xl'>
            Our journey showcases the power of collaboration and determination. Together, we have faced challenges,
            celebrated our victories, and woven a story of progress and achievement.
          </p>
          <Button size='lg' className='group rounded-full text-base has-[>svg]:px-6' asChild>
            <a href='#'>
              Read more
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Left Image */}
          <div className='group relative h-142 overflow-hidden rounded-xl'>
            <img
              src={aboutUs.leftImage.src}
              alt={aboutUs.leftImage.alt}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute top-6 right-6 flex gap-3'>
              <Button variant='secondary' size='lg' className='rounded-full text-base' asChild>
                <a href={aboutUs.leftImage.buttonLink}>{aboutUs.leftImage.buttonText}</a>
              </Button>
              <Button variant='secondary' size='lg' className='size-10 rounded-full' asChild>
                <a href={aboutUs.leftImage.buttonLink}>
                  <ArrowUpRightIcon className='transition-all duration-300 group-hover:rotate-45' />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className='grid gap-6'>
            {aboutUs.stats.map((stat, index) => (
              <Card key={index} className='shadow-none'>
                <CardContent className='flex h-full flex-col items-center justify-center gap-2.5 text-center'>
                  <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{stat.value}</h3>
                  <div className='text-muted-foreground text-xl font-medium'>{stat.title}</div>
                  <div className='text-muted-foreground text-xl'>{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Image */}
          <div className='group relative h-142 overflow-hidden rounded-xl md:max-lg:col-span-2'>
            <img
              src={aboutUs.rightImage.src}
              alt={aboutUs.rightImage.alt}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute right-6 bottom-6 flex gap-3'>
              <Button variant='secondary' size='lg' className='rounded-full text-base' asChild>
                <a href={aboutUs.rightImage.buttonLink}>{aboutUs.rightImage.buttonText}</a>
              </Button>
              <Button variant='secondary' size='lg' className='size-10 rounded-full' asChild>
                <a href={aboutUs.rightImage.buttonLink}>
                  <ArrowUpRightIcon className='transition-all duration-300 group-hover:rotate-45' />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
