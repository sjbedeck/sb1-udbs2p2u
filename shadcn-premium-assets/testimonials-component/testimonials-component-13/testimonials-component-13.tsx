import TestimonialCard from '@/components/shadcn-studio/blocks/testimonials-component-13/testimonials-card'
import type { TestimonialCardData } from '@/components/shadcn-studio/blocks/testimonials-component-13/testimonials-card'

import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialCardData[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='from-primary/10 space-y-12 rounded-3xl bg-gradient-to-b to-transparent px-4 py-12 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
          {/* Header Content */}
          <div className='space-y-4 text-center'>
            <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.8 }}>
              <h2 className='mx-auto max-w-2xl text-2xl font-semibold md:text-3xl lg:text-4xl'>
                Don&apos;t just take our word for it. <br /> They found verified data with enrich.
              </h2>
            </MotionPreset>

            <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.8 }} delay={0.2}>
              <p className='text-muted-foreground text-xl'>
                Discover the enthusiastic feedback from our satisfied clients!
              </p>
            </MotionPreset>

            <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.8 }} delay={0.4}>
              <Button size='lg' className='rounded-lg text-base' asChild>
                <a href='#'>More customer stories</a>
              </Button>
            </MotionPreset>
          </div>

          <div className='space-y-16'>
            <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.8 }} delay={0.6}>
              <TestimonialCard testimonialsList={testimonials} />
            </MotionPreset>

            <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.8 }} delay={0.8}>
              <div className='flex flex-wrap items-center justify-center gap-6'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo-bw.png'
                  alt='Google Logo'
                  className='h-7 w-auto object-contain dark:invert'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo-bw.png'
                  alt='Walmart Logo'
                  className='h-7 w-auto object-contain dark:invert'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo-bw.png'
                  alt='HubSpot Logo'
                  className='h-7 w-auto object-contain dark:invert'
                />
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComponent
