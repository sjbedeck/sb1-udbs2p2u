import type { ComponentType } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type StatCard = {
  icon: ComponentType
  title: string
  description: string
}[]

const AboutUs = ({ stats }: { stats: StatCard }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-24 flex items-center justify-between gap-16 max-md:flex-col'>
          <div className='max-w-5xl space-y-4'>
            <p className='text-primary text-sm font-medium uppercase'>About Us</p>
            <h2 className='text-xl font-semibold md:text-3xl lg:text-4xl'>The Adventure of Our Success</h2>
            <p className='text-muted-foreground text-xl'>
              Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
              challenges, celebrated victories, and woven a narrative of growth and success.
            </p>
          </div>
          <Button className='rounded-lg text-base max-lg:self-center' size='lg' asChild>
            <a href='#'>Read More</a>
          </Button>
        </div>

        <div className='grid gap-16 lg:grid-cols-2'>
          <div className='relative flex h-max justify-center'>
            {/* Decorative SVG Lines */}
            <svg
              width='191'
              height='159'
              className='text-primary absolute -top-14 -left-7 opacity-30 sm:-left-3 md:-top-4 md:left-10 lg:-top-3 lg:-left-4'
              viewBox='0 0 191 159'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M161.576 24.5939L137.902 24.5938H88.9971C68.8234 25.4582 28.5105 39.2264 28.6488 87.3839C28.7871 135.541 28.7064 131.37 28.6488 133.878'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeDasharray='3 3'
              />
              <path
                opacity='0.5'
                d='M174.806 13.3049L143.576 13.3047H86.2089C62.5444 14.3187 15.2561 30.4693 15.4184 86.9595C15.5807 143.45 15.486 142.23 15.4184 145.172'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeDasharray='3 3'
              />
              <path
                opacity='0.2'
                d='M189.224 1.00026L149.759 1H83.1702C55.7018 2.17701 0.812128 20.9237 1.00048 86.4945C1.18884 152.065 1.07896 154.061 1.00048 157.476'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeDasharray='3 3'
              />
            </svg>

            {/* Main Image */}
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-9.png'
              alt='About Us'
              className='z-10 w-5/6 max-md:scale-110 md:p-6 lg:w-full'
            />

            {/* Decorative Dot Pattern - Bottom Left */}
            <div className='absolute bottom-5 left-12 grid grid-cols-7 gap-1 opacity-50 sm:bottom-11 sm:left-22 md:bottom-22 md:left-38 lg:bottom-36 lg:left-35 xl:bottom-21 xl:left-21'>
              {Array.from({ length: 98 }).map((_, i) => (
                <div key={i} className='bg-primary/50 size-1 rounded-full' />
              ))}
            </div>

            {/* Decorative Dot Pattern - Bottom Right */}
            <div className='absolute right-2.5 -bottom-7 grid grid-cols-7 gap-1 opacity-50 sm:right-6 sm:-bottom-11 md:right-21 md:bottom-1 lg:right-7'>
              {Array.from({ length: 98 }).map((_, i) => (
                <div key={i} className='bg-primary/50 size-1 rounded-full' />
              ))}
            </div>
          </div>

          <div className='grid gap-6 sm:grid-cols-2'>
            {stats.map((stat, index) => (
              <Card key={index} className='border-none shadow-none transition-shadow duration-300 hover:shadow-sm'>
                <CardContent className='flex h-full flex-col items-center justify-center text-center'>
                  <Avatar className='border-primary mb-6 size-11.5 rounded-md border'>
                    <AvatarFallback className='bg-transparent [&>svg]:size-5'>
                      <stat.icon />
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className='mb-2 text-xl'>{stat.title}</CardTitle>
                  <p className='text-muted-foreground'>{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
