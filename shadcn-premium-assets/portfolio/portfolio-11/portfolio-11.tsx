import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

export type BadgeItem = {
  text: string
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  className?: string
}

export type PortfolioItem = {
  title: string
  description: string
  image: string
  badges: BadgeItem[]
}

type PortfolioComponentProps = {
  portfolioItems: PortfolioItem[]
}

const Portfolio = ({ portfolioItems }: PortfolioComponentProps) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <MotionPreset
          fade
          slide={{ direction: 'up', offset: 30 }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center sm:mb-16 lg:mb-24'
        >
          <div className='space-y-4 text-center'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Where Ideas Become Experiences</h2>
            <p className='text-muted-foreground text-base md:text-xl'>
              We turn wild ideas into intuitive, delightful designs. Dive into the projects we&apos;ve brought to life.
            </p>
            <Button className='group rounded-lg text-base has-[>svg]:px-6' size='lg' asChild>
              <a href='#'>
                View all
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </div>
        </MotionPreset>

        {/* Portfolio Grid */}
        <div className='space-y-10'>
          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 0
            const imageOrder = isEven ? 'order-1' : 'order-1 lg:order-2'
            const contentOrder = isEven ? 'order-2' : 'order-2 lg:order-1'

            return (
              <MotionPreset
                key={index}
                fade
                slide={{ direction: 'up', offset: 50 }}
                delay={0.3 + index * 0.15}
                transition={{ duration: 0.7 }}
              >
                <Card className='group rounded-md transition-all duration-300 hover:shadow-lg'>
                  <CardContent className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2'>
                    {/* Image Section */}
                    <div className={`relative overflow-hidden rounded-md ${imageOrder}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                    </div>

                    {/* Content Section */}
                    <div className={`space-y-5 ${contentOrder}`}>
                      <div className='flex flex-wrap gap-2.5'>
                        {item.badges.map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            variant={badge.variant || 'default'}
                            className={`px-3 py-1 ${badge.className || ''}`}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </div>
                      <div className='space-y-2.5'>
                        <h3 className='text-xl leading-tight font-semibold lg:text-2xl'>{item.title}</h3>
                        <p className='text-muted-foreground leading-relaxed'>{item.description}</p>
                      </div>
                      <Button
                        variant='outline'
                        className='group rounded-full text-base has-[>svg]:px-6'
                        size='lg'
                        asChild
                      >
                        <a href='#'>
                          Read more
                          <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionPreset>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
