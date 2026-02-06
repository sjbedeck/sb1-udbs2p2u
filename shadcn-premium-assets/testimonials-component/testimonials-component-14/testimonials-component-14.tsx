'use client'

import TestimonialCard from '@/components/shadcn-studio/blocks/testimonials-component-14/testimonial-card'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-14/testimonial-card'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
        {/* Left Content */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Testimonial
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
            fade
            blur
            delay={0.2}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Are Saying
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            delay={0.4}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Delivering performance, design, and flexibility—straight from our users.
          </MotionPreset>

          <MotionPreset delay={0.6} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Button size='lg' className='rounded-lg text-base' asChild>
              <a href='#'>More user stories</a>
            </Button>
          </MotionPreset>
        </div>

        <MotionPreset delay={0.8} slide={{ direction: 'down', offset: 50 }} fade blur transition={{ duration: 0.5 }}>
          <TestimonialCard testimonials={testimonials} />
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
