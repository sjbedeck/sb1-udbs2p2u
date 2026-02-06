import type { ComponentType } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type Feature = {
  title: string
  icon: ComponentType
}[]

const Features = ({ features }: { features: Feature }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid items-center gap-12 lg:grid-cols-2 xl:gap-41'>
          {/* Left content */}
          <div className='space-y-10'>
            <div className='space-y-4'>
              <MotionPreset fade blur slide transition={{ duration: 0.5 }}>
                <Badge variant='outline' className='text-sm font-normal'>
                  Our Best Features 🔥
                </Badge>
              </MotionPreset>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                blur
                slide
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                Unleash the full financial potential with our best features
              </MotionPreset>
              <MotionPreset
                component='p'
                className='text-muted-foreground text-xl'
                fade
                blur
                slide
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                Using technology to make finance simpler, smarter and more rewarding.
              </MotionPreset>
            </div>

            <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 lg:max-xl:grid-cols-2'>
              {features.map((feature, index) => (
                <MotionPreset
                  key={feature.title}
                  delay={0.8 + index * 0.15}
                  fade
                  blur
                  slide
                  transition={{ duration: 0.5 }}
                  className='last:lg:max-xl:col-span-full'
                >
                  <Card className='hover:border-primary group h-full shadow-none transition-all duration-300'>
                    <CardContent className='flex flex-col gap-4'>
                      <div className='bg-primary/10 group-hover:text-primary flex size-10 items-center justify-center rounded-md p-2 transition-colors duration-300 [&>svg]:size-7'>
                        <feature.icon />
                      </div>
                      <h5 className='font-semibold'>{feature.title}</h5>
                    </CardContent>
                  </Card>
                </MotionPreset>
              ))}
            </div>

            <MotionPreset fade blur slide transition={{ duration: 0.5 }} delay={1.4}>
              <Button
                className='group relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
                size='lg'
                asChild
              >
                <a href='#'>
                  View all Features
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
            </MotionPreset>
          </div>

          {/* Right content */}
          <MotionPreset
            className='group bg-muted aspect-[61/46] h-70 w-full overflow-hidden rounded-md border sm:h-106 md:max-lg:h-140'
            fade
            blur
            slide={{ direction: 'right' }}
            transition={{ duration: 0.5 }}
            delay={1.4}
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-38.png'
              alt='Dashboard 1'
              loading='lazy'
              className='aspect-[121/90] h-full w-full origin-bottom-right scale-95 rounded-tl-sm shadow-md transition-transform duration-400 group-hover:scale-100 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-38-dark.png'
              alt='Dashboard 1'
              loading='lazy'
              className='hidden aspect-[121/90] h-full w-full origin-bottom-right scale-95 rounded-tl-sm shadow-md transition-transform duration-400 group-hover:scale-100 dark:inline-block'
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default Features
