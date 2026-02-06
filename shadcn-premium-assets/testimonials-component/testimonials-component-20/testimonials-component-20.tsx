import TestimonialCard from '@/components/shadcn-studio/blocks/testimonials-component-20/testimonial-card'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-20/testimonial-card'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

const TestimonialsComponent = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
  return (
    <section className='flex min-h-screen flex-1 flex-col'>
      <div className='mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 max-xl:py-16 max-sm:py-8 sm:px-6 md:gap-16 lg:gap-24 lg:px-8 xl:grid-cols-2'>
        {/* Left Content */}
        <div className='space-y-4'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Testimonials
            </Badge>
          </MotionPreset>
          <MotionPreset delay={0.3} fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>We believe in the power of communinty</h2>
          </MotionPreset>
          <MotionPreset delay={0.6} fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground text-xl'>
              Our goals is to create a product and service. That you&apos;re satisfied with and use it every day. This
              is why we&apos;re constantly working on our services to make it better every day and really listen to what
              our users has to say
            </p>
          </MotionPreset>
          <MotionPreset delay={0.9} fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              asChild
              className='relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            >
              <a href='#'>More user stories</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Right Content */}
        <MotionPreset
          fade
          blur
          delay={0.3}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='grid grid-cols-1 xl:grid-cols-2'
        >
          <Marquee
            vertical
            pauseOnHover
            duration={22}
            gap={1.5}
            className='h-screen min-h-182 overflow-hidden px-2.5 max-xl:hidden'
          >
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee
            vertical
            pauseOnHover
            duration={22}
            gap={1.5}
            reverse
            className='h-screen min-h-182 overflow-hidden px-2.5 max-xl:hidden'
          >
            {testimonials.slice(4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee pauseOnHover duration={22} gap={1.5} className='overflow-hidden xl:hidden'>
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee pauseOnHover duration={22} gap={1.5} reverse className='overflow-hidden xl:hidden'>
            {testimonials.slice(4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
