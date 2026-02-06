import * as motion from 'motion/react-client'

import { Badge } from '@/components/ui/badge'

export type TestimonialItem = {
  name: string
  role: string
  company: string
  videoUrl: string
  title: string
}

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[]
}

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='space-y-4'>
          <Badge variant='outline' className='text-sm font-normal'>
            Testimonial
          </Badge>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Customer experience really matters!</h2>
          <p className='text-muted-foreground text-xl'>
            Leverage artificial intelligence algorithms to deliver valuable insights, predictive analytics, and tailored
            recommendations for users.
          </p>
        </div>
        <div className='grid gap-6 *:min-h-157 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`text-card-foreground relative overflow-hidden rounded-xl ${
                index === testimonials.length - 1 && testimonials.length % 2 !== 0 ? 'max-lg:col-span-full' : ''
              }`}
              whileHover='hover'
              initial='initial'
              animate='initial'
            >
              <iframe
                src={testimonial.videoUrl}
                className='h-full w-full rounded-lg'
                title={testimonial.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />

              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className='absolute inset-x-0 bottom-0 flex h-24 items-end rounded-b-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent'
              >
                <div className='p-6 text-white'>
                  <motion.h3
                    variants={{
                      initial: { opacity: 0, x: -30, transition: { delay: 0 } },
                      hover: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
                    }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className='font-medium text-white'
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.p
                    variants={{
                      initial: { opacity: 0, x: -30, transition: { delay: 0 } },
                      hover: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }
                    }}
                    className='text-sm text-white/90'
                  >
                    {testimonial.role} at {testimonial.company}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComponent
