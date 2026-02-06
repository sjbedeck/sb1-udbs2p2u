import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'

const Blog = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Blog List
            </Badge>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur delay={0.3} transition={{ duration: 0.5 }}>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Thoughts &amp; Updates</h2>
          </MotionPreset>

          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur delay={0.6} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground text-base lg:text-xl'>
              Explore our gallery to learn more about our amazing products and their features.
            </p>
          </MotionPreset>
        </div>

        <div className='grid-cols-1 gap-5 max-xl:grid md:grid-cols-2 xl:flex xl:grid-cols-3'>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'left', offset: 50 }}
            delay={0.8}
            transition={{ duration: 0.5 }}
            className='grow'
          >
            <a href='#'>
              <div className='relative'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-55.png'
                  alt='Sustainable Future'
                  className='w-full'
                />
                <div className='absolute bottom-0 lg:-bottom-1'>
                  <Badge variant='outline' className=''>
                    Sustainable Future
                  </Badge>
                  <h3 className='mt-2 max-w-60 text-2xl font-medium max-sm:leading-6 md:max-lg:leading-7'>
                    Top Mobile App Development Trends to Watch in 2025
                  </h3>
                </div>
              </div>
            </a>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={1.0}
            transition={{ duration: 0.5 }}
            className='flex shrink-0 flex-col gap-5 xl:w-[328px]'
          >
            <a href='#'>
              <Card className='bg-card text-card-foreground group relative overflow-hidden rounded-xl p-0 shadow-none'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-53.png'
                  alt='Designing the Future of Mobile Apps'
                  className='w-full object-cover'
                />
                {/* Overlay gradients for hover effect */}
                <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-black/0 to-black/85 transition-opacity duration-500 group-hover:opacity-0' />
                <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                <div className='absolute right-6 bottom-6 left-6 flex items-end justify-between gap-3'>
                  <div className='overflow-hidden'>
                    <CardTitle className='mb-1 text-lg font-medium text-white lg:text-2xl'>
                      Designing the Future of Mobile Apps
                    </CardTitle>
                  </div>
                </div>
              </Card>
            </a>

            <a href='#'>
              <Card className='text-card-foreground group relative overflow-hidden rounded-xl bg-sky-600 p-0 shadow-none dark:bg-sky-400/60'>
                <CardContent className='gap-12 px-0 pt-3 pb-5'>
                  <div className='mb-5'>
                    <div className='w-full overflow-hidden'>
                      <Marquee pauseOnHover duration={20} gap={1.5}>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>
                          UI/UX Design
                        </Badge>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>
                          Mobile App Design
                        </Badge>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>Prototyping</Badge>
                      </Marquee>
                    </div>
                    <div className='w-full overflow-hidden'>
                      <Marquee pauseOnHover duration={20} gap={1.5} reverse>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>Web Design</Badge>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>
                          Design Systems
                        </Badge>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>
                          User Research
                        </Badge>
                      </Marquee>
                    </div>
                    <div className='w-full overflow-hidden'>
                      <Marquee pauseOnHover duration={20} gap={1.5}>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>UX Strategy</Badge>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>
                          Problem Solving
                        </Badge>
                        <Badge className='bg-primary-foreground text-foreground text-lg font-medium'>
                          Interaction Design
                        </Badge>
                      </Marquee>
                    </div>
                  </div>
                  <CardTitle className='flex items-center justify-between px-5'>
                    <h6 className='text-primary-foreground text-lg font-semibold'>View All Categories</h6>
                    <Button
                      size='icon'
                      className='group-hover:bg-primary/80 size-7 shrink-0 cursor-pointer transition-colors duration-300'
                    >
                      <ArrowRightIcon />
                    </Button>
                  </CardTitle>
                </CardContent>
              </Card>
            </a>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'right', offset: 50 }}
            delay={1.2}
            transition={{ duration: 0.5 }}
            className='flex grow flex-col gap-5 md:max-xl:col-span-2 md:max-xl:flex-row'
          >
            <a href='#'>
              <Card className='text-card-foreground group relative overflow-hidden rounded-xl border-0 bg-transparent p-0 shadow-none'>
                <div className='relative'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-54.png'
                    alt=''
                    className='w-full'
                  />
                  <Button
                    size='icon'
                    className='group-hover:bg-primary/80 absolute top-1 right-1 size-10 rotate-316 rounded-full transition-colors duration-300 sm:top-6 sm:right-6 md:top-2 md:right-2 lg:top-1 lg:right-1 xl:top-3 xl:right-3'
                  >
                    <ArrowRightIcon />
                  </Button>
                </div>
                <CardContent className='absolute top-0 right-6 left-0 flex h-full w-full flex-col gap-5 p-6'>
                  <Badge variant='outline' className='text-xs font-normal text-white'>
                    Sustainable Future
                  </Badge>
                  <CardTitle className='max-w-xs text-xl font-medium text-white lg:text-3xl xl:text-4xl'>
                    Sustainability in Tech: Innovations Driving Change
                  </CardTitle>
                  <CardDescription className='text-sm leading-relaxed text-white/80 md:text-base'>
                    Experience the charm of this lovely and cozy apartment, featuring warm decor and inviting spaces,
                    perfect for relaxation and comfort, ideal for your next getaway.
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            <a href='#'>
              <Card className='bg-card overflow-hidden rounded-xl p-0 shadow-none'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-56.png'
                  alt='AI Driven Design'
                  className='w-full object-cover'
                />
              </Card>
            </a>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default Blog
