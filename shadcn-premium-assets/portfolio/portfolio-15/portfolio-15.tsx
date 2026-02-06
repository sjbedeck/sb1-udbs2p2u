import { Fragment } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type PortfolioItem = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  category: string[]
}

type PortfolioProps = {
  portfolioItems: PortfolioItem[]
}

type ProjectGridProps = {
  projects: PortfolioItem[]
  baseDelay: number
}

const ProjectGrid = ({ projects, baseDelay }: ProjectGridProps) => {
  return (
    <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2'>
      {projects.map((project, index) => (
        <MotionPreset
          key={index}
          fade
          blur
          zoom={{ initialScale: 0.9 }}
          delay={baseDelay + index * 0.01}
          transition={{ duration: 0.5 }}
        >
          <Card className='group h-full overflow-hidden transition-all duration-300 hover:shadow-lg'>
            <CardContent className='space-y-4'>
              <div className='overflow-hidden rounded-md'>
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className='w-full object-cover transition-transform duration-300 group-hover:scale-105 lg:max-h-60.5'
                />
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl leading-tight font-semibold'>{project.title}</h3>
                <p className='text-muted-foreground leading-relaxed'>{project.description}</p>
              </div>
              <div className='flex flex-wrap items-center gap-2'>
                {project.category.map((cat, catIndex) => (
                  <Fragment key={catIndex}>
                    <span key={catIndex} className='text-muted-foreground inline-block font-medium'>
                      {cat}
                    </span>
                    {catIndex < project.category.length - 1 && (
                      <span className='bg-muted-foreground inline-block h-1.5 w-1.5 rounded-full'></span>
                    )}
                  </Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      ))}
    </div>
  )
}

const Portfolio = ({ portfolioItems }: PortfolioProps) => {
  // Fixed category list for sidebar navigation
  const categories = [
    'UI/UX Design',
    'Web Development',
    'Graphic Design',
    'Product Management',
    'Content Writing',
    'Web Design'
  ]

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Header */}
        <div className='space-y-4'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            OUR PORTFOLIO
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='relative z-1 text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Crafted with Care,{' '}
            <span className='relative'>
              Designed to
              <span
                className='from-primary absolute bottom-0 left-0 -z-1 h-0.5 w-full rounded-full bg-gradient-to-r to-transparent'
                aria-hidden='true'
              />
            </span>{' '}
            Connect
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-base md:text-xl'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Every project is a collaboration. These are the stories we&apos;ve helped shape through design, content, and
            strategy.
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.9} transition={{ duration: 0.5 }}>
            <Button size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
              <a href='#'>
                View all
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </MotionPreset>
        </div>

        {/* Portfolio Content with Sidebar */}
        <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={1.2} transition={{ duration: 0.6 }}>
          <Tabs defaultValue='UI/UX Design' orientation='vertical' className='relative gap-6 md:flex-row'>
            {/* Categories Sidebar */}
            <Card className='w-full flex-shrink-0 gap-2.5 rounded-md p-5 md:sticky md:top-5 md:h-235 md:w-70 xl:w-83'>
              <h3 className='text-lg leading-relaxed font-semibold'>Categories</h3>
              <hr className='border-t' />
              <div className='flex h-full flex-1 flex-col justify-between gap-2 overflow-auto'>
                <ScrollArea className='max-w-119'>
                  <TabsList className='flex h-auto w-full gap-2.5 bg-transparent p-0 max-md:pb-2 md:flex-col'>
                    <TabsTrigger
                      value='all-projects'
                      className='hover:bg-muted data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground text-muted-foreground w-full justify-start rounded-md border bg-transparent px-4 py-1.5 text-left text-base font-medium shadow-none transition-all'
                    >
                      All Projects
                    </TabsTrigger>
                    {categories.map(category => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className='hover:bg-muted data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground text-muted-foreground w-full justify-start rounded-md border bg-transparent px-4 py-1.5 text-left text-base font-medium shadow-none transition-all'
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <ScrollBar orientation='horizontal' />
                </ScrollArea>

                <Card className='bg-primary/10 hidden gap-0 overflow-hidden rounded-md border-none pt-4 pb-0 shadow-none md:flex'>
                  <CardContent className='space-y-2 px-5'>
                    <h6 className='text-lg font-semibold'>Ready to start your next project?</h6>
                    <p className='text-sm'>We’re always open to new ideas, collaborations, and challenges</p>
                    <Button size='sm' className='group rounded-md' asChild>
                      <a href='#'>
                        Contact Us
                        <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                      </a>
                    </Button>
                  </CardContent>
                  <div className='-z-1 -mt-8 flex justify-end'>
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-73.png?width=120'
                      alt='Contact Us'
                      className='w-1/2 max-w-30'
                    />
                  </div>
                </Card>
              </div>
            </Card>

            {/* Content Area */}
            <div className='flex-1'>
              {/* All Projects Tab */}
              <TabsContent value='all-projects' className='mt-0'>
                <ProjectGrid projects={portfolioItems} baseDelay={0} />
              </TabsContent>

              {/* Category-specific Tabs */}
              {categories.map((category, index) => (
                <TabsContent key={index} value={category} className='mt-0'>
                  <ProjectGrid
                    projects={portfolioItems.filter(item => item.category.includes(category))}
                    baseDelay={0.2}
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </MotionPreset>
      </div>
    </section>
  )
}

export default Portfolio
