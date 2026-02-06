import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

export type PortfolioItem = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

type PortfolioProps = {
  portfolioItems: PortfolioItem[]
}

const Portfolio = ({ portfolioItems }: PortfolioProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            OUR PORTFOLIO
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Work That Speaks for Itself
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground mx-auto max-w-4xl text-base md:text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            From startups to bold brands, we&apos;ve built digital experiences that drive results and make an impact.
            Here&apos;s a look at some of our best.
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.9} transition={{ duration: 0.5 }}>
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
              <a href='#'>
                View Portfolio
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </MotionPreset>
        </div>

        {/* Projects Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {portfolioItems.map((project, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              zoom={{ initialScale: 0.85 }}
              delay={1.2 + index * 0.1}
              transition={{ duration: 0.5 }}
              className='max-lg:last:col-span-full'
            >
              <Card className='group overflow-hidden shadow-none transition-all duration-300 hover:shadow-lg'>
                <CardContent className='space-y-4'>
                  <div className='overflow-hidden rounded-sm'>
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-2xl leading-tight font-semibold'>{project.title}</h3>
                    <p className='text-muted-foreground leading-relaxed'>{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
