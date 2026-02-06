import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'

import { cn } from '@/lib/utils'

export type TestimonialItem = {
  name: string
  handle: string
  avatar: string
  content: string
  logo: string
  bgColor: string
  logoAlt: string
}

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[]
}

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section className='bg-muted space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24'>
      {/* Section Header */}
      <div className='mx-auto max-w-7xl space-y-4 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Success Speaks For Itself</h2>
        <p className='text-muted-foreground text-xl'>
          Predictive analytics has really made our processes smoother and boosted our business results a ton!
        </p>
      </div>

      {/* Testimonials Marquee */}
      <div className='relative h-90 w-full'>
        <Marquee pauseOnHover duration={20} gap={1.5} className='h-full'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='relative'>
              <div className={cn('h-44.5 w-full min-w-86 rounded-t-3xl p-9', testimonial.bgColor)}>
                <img src={testimonial.logo} alt={testimonial.logoAlt} className='h-10 object-contain' />
              </div>

              <div className='absolute inset-x-0 top-28 w-full px-8'>
                <Card className='relative mb-12 bg-blue-950'>
                  <CardContent className='px-4'>
                    <p className='line-clamp-3 font-normal text-white'>{testimonial.content}</p>
                  </CardContent>
                  <div className='absolute top-3/4 left-10 w-full'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='46' height='56' viewBox='0 0 46 56' fill='none'>
                      <path
                        d='M5.43874 55.193C3.31254 56.8548 0.244526 55.0835 0.620587 52.4112L7.49533 3.56016C7.79169 1.45431 10.1244 0.31685 11.9661 1.38015L43.9602 19.852C45.8019 20.9153 45.9832 23.5042 44.3076 24.8137L5.43874 55.193Z'
                        fill='var(--color-blue-950)'
                      />
                    </svg>
                  </div>
                </Card>

                <div className='flex items-center gap-3'>
                  <Avatar className='ring-background size-12 ring-2'>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ', 2)
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-0.5'>
                    <h3 className='font-semibold'>{testimonial.name}</h3>
                    <p className='text-muted-foreground'>{testimonial.handle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default TestimonialsComponent
