import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type Feature1 = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  url: string
}

type Feature2 = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  url: string
  stats: {
    title: string
    description: string
  }[]
}

const AboutUs = ({ features1, features2 }: { features1: Feature1; features2: Feature2 }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
        {/* Header */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              About Us
            </Badge>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.2} transition={{ duration: 0.5 }}>
            <h2 className='mx-auto max-w-4xl text-2xl font-semibold md:text-3xl lg:text-4xl'>
              A Legacy in the Making Discover the Meaning Behind Our Mission
            </h2>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground mx-auto max-w-4xl text-xl'>
              Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
              challenges, celebrated victories, and woven a narrative of growth and success.
            </p>
          </MotionPreset>
        </div>

        <div className='grid gap-8 lg:grid-cols-3'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.6} transition={{ duration: 0.8 }}>
            <Card className='h-full shadow-none'>
              <CardContent className='space-y-6'>
                <img
                  src={features1.imageUrl}
                  alt={features1.imageAlt}
                  className='h-50 w-full rounded-md object-cover'
                />
                <div className='space-y-2'>
                  <CardTitle className='flex items-center gap-3 text-xl font-medium'>{features1.title}</CardTitle>
                  <p className='text-muted-foreground'>{features1.description}</p>
                </div>
                <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
                  <a href={features1.url}>
                    Read more
                    <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.7}
            transition={{ duration: 0.8 }}
            className='lg:col-span-2'
          >
            <Card className='h-full shadow-none'>
              <CardContent className='grid h-full grid-cols-1 gap-6 md:grid-cols-2'>
                <img
                  src={features2.imageUrl}
                  alt={features2.imageAlt}
                  className='h-50 w-full rounded-md object-cover md:h-full'
                />
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <CardTitle className='flex items-center gap-3 text-2xl font-medium'>{features2.title}</CardTitle>
                    <p className='text-muted-foreground'>{features2.description}</p>
                  </div>
                  {/* Stats grid */}
                  <div className='grid w-fit grid-cols-2 gap-4'>
                    {features2.stats.map((stat, index) => (
                      <Card
                        key={index}
                        className='border-primary/30 hover:border-primary w-30 rounded-md py-4 shadow-none transition-colors duration-300'
                      >
                        <CardHeader className='px-4'>
                          <CardTitle className='text-xl font-medium'>{stat.title}</CardTitle>
                          <CardDescription>{stat.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                  <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
                    <a href={features2.url}>
                      Read more
                      <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
