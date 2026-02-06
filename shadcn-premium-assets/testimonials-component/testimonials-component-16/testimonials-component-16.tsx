import TestimonialCard from '@/components/shadcn-studio/blocks/testimonials-component-16/testimonial-card'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-16/testimonial-card'

import { Rating } from '@/components/ui/rating'
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
            Testimonials
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
            Our Valuable{' '}
            <span className='relative z-1'>
              Clients
              <span
                className='from-primary absolute bottom-0 left-0 -z-1 h-0.5 w-full rounded-full bg-gradient-to-r to-transparent'
                aria-hidden='true'
              />
            </span>
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground mx-auto max-w-4xl text-xl'
            fade
            blur
            delay={0.4}
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Shadcn/studio&apos;s admin template impresses me with its code structure, quality, and UI design. It&apos;s
            highly <span className='text-foreground font-medium'>customisable</span>.
          </MotionPreset>

          <MotionPreset fade blur delay={0.6} slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Rating readOnly variant='yellow' size={24} value={4.5} precision={0.5} className='justify-center' />
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
