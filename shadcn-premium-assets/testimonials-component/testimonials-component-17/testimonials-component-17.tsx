import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Rating } from '@/components/ui/rating'

const TestimonialsComponent = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-5 lg:gap-24'>
          {/* Statistics and Rating */}
          <div className='space-y-12 md:space-y-16 lg:col-span-3 lg:space-y-24'>
            <div className='space-y-4'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                2800+ customers shared their love for ShadCN/studio
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-muted-foreground md:text-xl'
                fade
                blur
                delay={0.3}
                slide={{ offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                Create custom landing pages with ShadCN/studio that converts more visitors than any website. With lots
                of unique blocks. You can easily build a page.
              </MotionPreset>
            </div>

            {/* Rating Section */}
            <MotionPreset
              className='space-y-4'
              fade
              delay={0.6}
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Rating readOnly variant='yellow' size={24} value={4.5} precision={0.5} />

              <div className='space-y-1.5'>
                <p className='text-2xl font-semibold'>4.5 out of 5 stars</p>
                <p className='text-muted-foreground text-sm'>from 2.8k reviews</p>
              </div>
            </MotionPreset>
          </div>

          {/* Customer Testimonial */}
          <MotionPreset
            className='relative lg:col-span-2'
            fade
            delay={0.4}
            slide={{ direction: 'right', offset: 80 }}
            transition={{ duration: 0.8 }}
          >
            <div className='group relative overflow-hidden rounded-md'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-31.png'
                alt='Customer'
                className='w-full object-cover md:h-130 lg:h-121'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100' />

              <div className='absolute right-0 bottom-0 left-0 p-3 lg:p-5 xl:p-7'>
                <Card className='rounded-md border-none bg-white/90 transition-all duration-300'>
                  <CardContent className='space-y-6 text-black/60'>
                    <p className='text-muted-foreground'>
                      &quot;Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went
                      above and beyond to help.&quot;
                    </p>

                    <div className='space-y-0.5'>
                      <h4 className='font-medium text-black'>Marley Calzoni</h4>
                      <p className='text-muted-foreground text-xs'>
                        CEO & Co Founder at <span className='font-semibold text-black'>Lemondeezy</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComponent
