import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type BlogEntry = {
  category: string
  title: string
  date: string
  blogLink: string
}[]

const Blog = ({ blogEntries }: { blogEntries: BlogEntry }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start xl:grid-cols-5'>
          {/* Left Column - Header */}
          <div className='space-y-4 lg:sticky lg:top-8 xl:col-span-2'>
            <MotionPreset fade slide={{ direction: 'left', offset: 50 }} blur transition={{ duration: 0.5 }}>
              <p className='text-primary text-sm font-medium uppercase'>OUR BLOGS</p>
            </MotionPreset>

            <MotionPreset
              fade
              slide={{ direction: 'left', offset: 50 }}
              blur
              delay={0.2}
              transition={{ duration: 0.5 }}
            >
              <h1 className='text-foreground text-2xl font-semibold md:text-3xl lg:text-4xl'>
                What We&apos;re Learning
              </h1>
            </MotionPreset>

            <MotionPreset
              fade
              slide={{ direction: 'left', offset: 50 }}
              blur
              delay={0.4}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground text-lg lg:text-xl'>
                A collection of thoughts, experiments, and learnings from our team — covering UX, code, product, and
                everything in between.
              </p>
            </MotionPreset>

            <MotionPreset
              fade
              slide={{ direction: 'left', offset: 50 }}
              blur
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              <Button
                className='group bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-base has-[>svg]:px-6'
                size='lg'
                asChild
              >
                <a href='#'>
                  View All Blogs
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
            </MotionPreset>
          </div>

          {/* Right Column - Blog Entries */}
          <div className='space-y-6 xl:col-span-3'>
            {blogEntries.map((entry, index) => (
              <MotionPreset
                key={index}
                fade
                blur
                slide={{ direction: 'right', offset: 50 }}
                delay={0.8 + index * 0.1}
                transition={{ duration: 0.5 }}
              >
                <a href={entry.blogLink} className='group block'>
                  <Card className='bg-muted border-0 transition-shadow duration-200 hover:shadow-lg'>
                    <CardContent className='flex items-center justify-between gap-4'>
                      <div className='flex-1 space-y-2.5'>
                        <div className='flex items-center gap-2'>
                          <span className='text-primary font-medium max-md:text-sm'>{entry.category}</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
                            <path
                              d='M2 0.535848C2.75777 0.0983738 3.63809 -0.0785611 4.50605 0.0321582C5.37401 0.142878 6.18172 0.535143 6.80541 1.14884C7.42909 1.76254 7.83434 2.56381 7.95906 3.42987C8.08377 4.29593 7.92107 5.17899 7.49588 5.94373C7.0707 6.70847 6.40649 7.31269 5.60503 7.66381C4.80358 8.01493 3.90911 8.09357 3.05869 7.88769C2.20826 7.6818 1.44881 7.20274 0.896708 6.52392C0.344606 5.8451 0.0303155 5.00398 0.00200004 4.12945L0 3.99985L0.00200004 3.87025C0.0240653 3.19043 0.219118 2.52747 0.568724 1.94402C0.918331 1.36058 1.41094 0.875917 2 0.535848Z'
                              fill='var(--muted-foreground)'
                            />
                          </svg>
                          <span className='text-muted-foreground font-medium max-md:text-sm'>{entry.date}</span>
                        </div>

                        <h3 className='text-lg leading-tight font-semibold lg:text-2xl'>{entry.title}</h3>
                      </div>

                      <div className='shrink-0'>
                        <Button
                          size='icon'
                          variant='ghost'
                          className='group-hover:bg-primary group-hover:text-primary-foreground size-8 rotate-316 rounded-full transition-colors duration-200'
                        >
                          <ArrowRightIcon className='size-6' />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </MotionPreset>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
