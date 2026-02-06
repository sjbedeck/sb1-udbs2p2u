import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-13/contact-form'

import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Rating } from '@/components/ui/rating'

type Testimonial = {
  name: string
  title: string
  image: string
  rating: number
  quote: string
}

const ContactUs = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 space-y-4 text-center'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium tracking-wider uppercase'
            fade
            slide={{ direction: 'up', offset: 30 }}
            blur
            transition={{ duration: 0.4 }}
          >
            Contact Us
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'up', offset: 50 }}
            blur
            delay={0.1}
            transition={{ duration: 0.5 }}
          >
            Contact Our Team
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'up', offset: 50 }}
            blur
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            Whether you need help with a product, have a suggestion, or just want to chat, we&apos;re here for you.
          </MotionPreset>
        </div>

        {/* Main Content */}
        <div className='grid gap-10 lg:grid-cols-2'>
          {/* Left Side - Testimonial */}
          <MotionPreset
            fade
            zoom={{ initialScale: 0.8 }}
            delay={0.4}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='group'
          >
            <Card className='relative h-full overflow-hidden border-none py-0 shadow-none transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-full object-cover max-lg:h-105 lg:h-full'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent' />

              {/* Content Overlay */}
              <CardContent className='absolute bottom-0 left-0 w-full p-6 text-white'>
                <div className='mb-6 flex justify-between gap-1 max-md:flex-col-reverse'>
                  <div>
                    <h3 className='mb-0.5 text-2xl font-semibold'>{testimonial.name}</h3>
                    <p className='text-sm'>{testimonial.title}</p>
                  </div>

                  <Rating readOnly variant='yellow' size={22} value={testimonial.rating} precision={0.5} />
                </div>

                <blockquote className='leading-relaxed max-md:text-sm'>&quot;{testimonial.quote}&quot;</blockquote>
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Right Side - Form */}
          <MotionPreset
            fade
            slide={{ direction: 'up', offset: 80 }}
            blur
            delay={0.6}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Card className='border shadow-sm'>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
