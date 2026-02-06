import { CircleCheckBigIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type Achievements = {
  number: string
  description: string
}[]

const AboutUs = ({ achievementsList }: { achievementsList: Achievements }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 flex items-center justify-between gap-6 max-lg:flex-col md:mb-16 lg:mb-24'>
          <div className='space-y-4'>
            <Badge variant='outline' className='text-sm font-normal'>
              About Us
            </Badge>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Our Story & Mission</h2>
            <p className='text-muted-foreground text-xl'>
              Built on innovation, integrity, and excellence, we strive to create meaningful impact through our work.
            </p>
          </div>
          <Button asChild className='rounded-lg text-base' size='lg'>
            <a href='#'>Read More</a>
          </Button>
        </div>

        <div className='grid gap-16 lg:grid-cols-2'>
          {/* Image container */}
          <div className='relative z-1 h-max w-full'>
            {/* Decorative dots */}
            <svg
              width='51'
              height='57'
              viewBox='0 0 51 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute -top-4 -left-6 -z-1 opacity-20 max-lg:hidden'
            >
              <g>
                {/* Primary colored dots pattern */}
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => (
                    <ellipse
                      key={`${row}-${col}`}
                      cx='2.5'
                      cy='2.5'
                      rx='2.5'
                      ry='2.5'
                      transform={`translate(${5 + col * 7}, ${4 + row * 6})`}
                      fill='var(--primary)'
                      fillOpacity='0.5'
                    />
                  ))
                )}
              </g>
            </svg>

            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-1.png'
              alt='About us image'
              className='h-91 w-full rounded-lg object-cover'
            />

            {/* Decorative dots */}
            <svg
              width='51'
              height='57'
              viewBox='0 0 51 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute -right-8 -bottom-6 -z-1 opacity-20 max-lg:hidden'
            >
              <g>
                {/* Destructive colored dots pattern */}
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => (
                    <ellipse
                      key={`${row}-${col}`}
                      cx='2.5'
                      cy='2.5'
                      rx='2.5'
                      ry='2.5'
                      transform={`translate(${5 + col * 7}, ${4 + row * 6})`}
                      fill='var(--destructive)'
                      fillOpacity='0.5'
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-1 gap-4 md:max-lg:grid-cols-2'>
            {achievementsList.map((achievement, index) => (
              <Card
                key={index}
                className='rounded-lg border-none py-4 shadow-none transition-shadow duration-300 hover:shadow-sm last:max-lg:col-span-full'
              >
                <CardContent>
                  <div className='flex items-center gap-3'>
                    <CircleCheckBigIcon />
                    <span className='flex items-center gap-2.5'>
                      <span className='text-xl font-semibold'>{achievement.number}</span>
                      <span className='text-muted-foreground font-medium'>{achievement.description}</span>
                    </span>
                  </div>
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
