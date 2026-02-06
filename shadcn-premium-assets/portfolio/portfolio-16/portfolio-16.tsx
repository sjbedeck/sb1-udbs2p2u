import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'

export type PortfolioItem = {
  id: number
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  backgroundColor?: string
  btnColor?: string
}

type PortfolioProps = {
  portfolioItems: PortfolioItem[]
}

const Portfolio = ({ portfolioItems }: PortfolioProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-20 lg:px-8'>
        {/* Header */}
        <div className='space-y-4'>
          <MotionPreset fade blur slide={{ direction: 'left', offset: 50 }} transition={{ duration: 0.6 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Our Work
            </Badge>
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'left', offset: 50 }}
            transition={{ duration: 0.6 }}
          >
            Our Digital Showcase
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl leading-relaxed'
            fade
            blur
            slide={{ direction: 'left', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.6 }}
          >
            Step into our portfolio and discover how we bring concepts to life. From sleek interfaces to scalable
            systems, each piece reflects our dedication to excellence in every detail.
          </MotionPreset>
        </div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {portfolioItems.map((project, index) => (
            <MotionPreset
              key={project.id}
              fade
              blur
              zoom={{ initialScale: 0.9 }}
              delay={0.6 + index * 0.2}
              transition={{ duration: 0.6 }}
            >
              <a href={project.link} rel='noopener noreferrer'>
                <Card
                  className={`group relative h-full justify-between overflow-hidden border-none pb-0 shadow-none transition-all duration-300 ${project.backgroundColor}`}
                >
                  <CardContent className='space-y-1.5'>
                    <h4 className='text-xl font-semibold lg:text-2xl'>{project.title}</h4>
                    <p className='text-muted-foreground leading-relaxed'>{project.description}</p>
                  </CardContent>
                  <div>
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <Button
                    size='icon'
                    className={`group absolute right-5 bottom-5 rounded-full text-white ${project.btnColor}`}
                  >
                    <span className='sr-only'>View project details</span>
                    <ArrowRightIcon className='rotate-337 transition-transform duration-200 group-hover:rotate-360' />
                  </Button>
                </Card>
              </a>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
