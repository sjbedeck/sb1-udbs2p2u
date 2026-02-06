import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

export type FeatureItem = {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
}

export type ProjectItem = {
  id: string
  title: string
  description: string
  image: string
  backgroundColor?: string
}

export type PortfolioItem = {
  id: string
  title: string
  description: string
  features: FeatureItem[]
  images: string[]
  projects: ProjectItem[]
}

type PortfolioComponentProps = {
  portfolioItems: PortfolioItem[]
}

const Portfolio = ({ portfolioItems }: PortfolioComponentProps) => {
  // For this design, we'll use the first portfolio item as the featured project
  const featuredProject = portfolioItems[0]

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.8 }}
          className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'
        >
          <MotionPreset fade slide={{ direction: 'down', offset: 30 }} delay={0.2} transition={{ duration: 0.6 }}>
            <p className='text-primary text-sm font-medium tracking-wider uppercase'>Our Portfolio</p>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 40 }} delay={0.4} transition={{ duration: 0.8 }}>
            <h2 className='relative z-1 inline-block text-2xl font-semibold sm:text-3xl lg:text-4xl'>
              Where Intelligent{' '}
              <span className='relative'>
                Design
                <span
                  className='from-primary absolute bottom-0 left-0 -z-1 h-0.5 w-full rounded-full bg-gradient-to-r to-transparent'
                  aria-hidden='true'
                />
              </span>{' '}
              Meets Real-World Impact
            </h2>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 30 }} delay={0.6} transition={{ duration: 0.7 }}>
            <p className='text-muted-foreground text-xl leading-relaxed'>
              We combine thoughtful design with smart technology to create products that truly make a difference.
            </p>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 20 }} delay={0.8} transition={{ duration: 0.6 }}>
            <Button className='rounded-lg text-base' size='lg' asChild>
              <a href='#'>View all</a>
            </Button>
          </MotionPreset>
        </MotionPreset>

        {/* Featured Project Section */}
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 60 }}
          delay={0.4}
          transition={{ duration: 0.9 }}
          className='mb-6'
        >
          <Card className='overflow-hidden border-none bg-amber-600/10 pb-0 shadow-none'>
            <CardContent className='grid grid-cols-1 gap-10 px-8 lg:grid-cols-2 xl:gap-0'>
              {/* Left Content */}
              <div className='space-y-6 lg:max-xl:py-6'>
                <div className='space-y-1.5'>
                  <h3 className='text-2xl font-semibold lg:text-3xl'>{featuredProject.title}</h3>
                  <p className='text-muted-foreground leading-relaxed'>{featuredProject.description}</p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                  {featuredProject.features.map((feature, index) => (
                    <MotionPreset
                      key={feature.id}
                      fade
                      slide={{ direction: 'left', offset: 30 }}
                      delay={0.6 + index * 0.1}
                      transition={{ duration: 0.6 }}
                      className='space-y-1.5'
                    >
                      <div className='flex gap-1.5'>
                        {feature.icon && <div className='mt-1 [&>svg]:size-5'>{feature.icon}</div>}
                        <div>
                          <h4 className='text-xl leading-relaxed font-semibold'>{feature.title}</h4>
                          <p className='text-muted-foreground leading-relaxed'>{feature.description}</p>
                        </div>
                      </div>
                    </MotionPreset>
                  ))}
                </div>
              </div>

              {/* Right Images */}
              <div className='grid grid-cols-1 max-lg:-mb-5 xl:-mb-20 xl:grid-cols-2 xl:gap-4'>
                {featuredProject.images.map((image, index) => (
                  <MotionPreset
                    key={index}
                    fade
                    slide={{ direction: 'right', offset: 40 }}
                    delay={0.8 + index * 0.2}
                    transition={{ duration: 0.7 }}
                    className={index === 0 ? 'flex items-center justify-end xl:col-span-2 min-xl:items-end' : ''}
                  >
                    <img
                      src={image}
                      alt={`${featuredProject.title} interface ${index + 1}`}
                      className={`w-full rounded-md object-cover ${index === 0 ? 'xl:w-[80%]' : ''}`}
                    />
                  </MotionPreset>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {featuredProject.projects.map((project, index) => (
            <MotionPreset
              key={project.id}
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.6 + index * 0.15}
              transition={{ duration: 0.7 }}
            >
              <Card
                className={`group h-full justify-between gap-3 overflow-hidden border-none pt-4 pb-0 shadow-none transition-all duration-300 ${project.backgroundColor}`}
              >
                <CardContent className='space-y-2 px-4'>
                  <h4 className='text-xl font-semibold'>{project.title}</h4>
                  <p className='text-muted-foreground leading-relaxed'>{project.description}</p>
                </CardContent>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
