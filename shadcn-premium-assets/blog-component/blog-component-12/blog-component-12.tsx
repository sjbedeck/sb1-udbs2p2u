import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

type BlogCard = {
  title: string
  description: string
  blogLink: string
  bgColor: string
  textColor?: string
  img?: string
  alt?: string
  gridSpan?: string
}[]

const Blog = ({ blogCards }: { blogCards: BlogCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Our
              <span className='relative z-10 ml-2'>
                Blogs
                <span className='bg-primary absolute bottom-0 left-0 -z-10 h-px w-full' aria-hidden='true' />
              </span>
            </h2>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur delay={0.3} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground mx-auto max-w-2xl text-base lg:text-xl'>
              Explore our gallery to learn more about our amazing products and their features.
            </p>
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {blogCards.map((item, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              slide={{ direction: 'up', offset: 50 }}
              delay={0.6 + index * 0.1}
              transition={{ duration: 0.5 }}
              className={item.gridSpan}
            >
              <a href={item.blogLink}>
                <Card
                  className={cn(
                    'group h-full overflow-hidden border-0 p-6 shadow-none transition-transform duration-300 hover:-translate-y-1',
                    item.bgColor
                  )}
                >
                  <CardContent className='p-0'>
                    <div className='space-y-2'>
                      <CardTitle
                        className={cn(
                          'text-lg leading-tight font-medium transition-colors duration-200 md:text-xl lg:text-3xl',
                          item.textColor || 'text-foreground'
                        )}
                      >
                        {item.title}
                      </CardTitle>
                      <CardDescription
                        className={cn(
                          'text-sm lg:text-base',
                          item.textColor
                            ? item.textColor.replace('text-', 'text-').replace('-foreground', '') + '/80'
                            : 'text-muted-foreground'
                        )}
                      >
                        {item.description}
                      </CardDescription>

                      <div>
                        <Button
                          variant='ghost'
                          size='sm'
                          className={cn(
                            'h-auto cursor-pointer p-0 text-sm font-medium hover:bg-transparent',
                            item.textColor || 'text-foreground'
                          )}
                        >
                          Read More
                          <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                        </Button>

                        {item.img && (
                          <div className='-mb-18 flex justify-end'>
                            <img src={item.img} alt={item.alt} className='relative -bottom-5 -rotate-9' />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
