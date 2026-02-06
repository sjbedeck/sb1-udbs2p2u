'use client'

import { ExternalLinkIcon } from 'lucide-react'

import TestimonialCard from '@/components/shadcn-studio/blocks/testimonials-component-15/testimonial-card'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-15/testimonial-card'

import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
        {/* Left Content */}
        <div className='space-y-4 text-center'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Testimonial
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
            Some of our valuable customers feedback
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
            Predictive analytics, and recommendations to optimize their processes and better business outcomes.
          </MotionPreset>
        </div>

        <MotionPreset delay={0.6} slide={{ direction: 'down', offset: 50 }} fade blur transition={{ duration: 0.5 }}>
          <TestimonialCard testimonials={testimonials} />
        </MotionPreset>

        <MotionPreset
          delay={0.8}
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <Button
            size='lg'
            asChild
            className='ring-offset-background hover:ring-primary/90 group transition-all duration-300 hover:ring-2 hover:ring-offset-2 has-[>svg]:px-6'
          >
            <a href='#'>
              View All Reviews
              <ExternalLinkIcon className='transition-all duration-300 group-hover:rotate-10' />
            </a>
          </Button>
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
