import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'

export type StatTestimonialItem = {
  stat: string
  statLabel: string
  content: string
  name: string
  role: string
  avatar: string
  companyLogo: string
  companyName: string
}

export type SimpleTestimonialItem = {
  content: string
  name: string
  role: string
  avatar: string
}

type TestimonialsComponentProps = {
  featuredTestimonial: StatTestimonialItem
  secondaryTestimonial: StatTestimonialItem
  simpleTestimonials: SimpleTestimonialItem[]
}

const TestimonialsComponent = ({
  featuredTestimonial,
  secondaryTestimonial,
  simpleTestimonials
}: TestimonialsComponentProps) => {
  return (
    <section className="bg-muted bg-[url('https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/gradient-bg.png')] bg-cover bg-center bg-no-repeat py-8 sm:py-16 lg:py-24">
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
        {/* Header */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
              Results that speaks{' '}
              <span className='relative z-1'>
                Real stories
                <span
                  className='from-primary absolute bottom-0 left-0 -z-1 h-0.5 w-full rounded-full bg-gradient-to-r to-transparent'
                  aria-hidden='true'
                />
              </span>
            </h2>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }} delay={0.2}>
            <p className='text-muted-foreground text-xl'>Find out how our happy clients are raving about us.</p>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }} delay={0.4}>
            <Button size='lg' className='rounded-lg text-base' asChild>
              <a href='#'>View all reviews</a>
            </Button>
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
          {/* Featured Testimonial */}
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }} delay={0.6}>
            <Card className='h-full gap-9 border-0 shadow-lg'>
              <CardHeader>
                <div className='text-5xl font-semibold'>{featuredTestimonial.stat}</div>
                <p className='text-muted-foreground'>{featuredTestimonial.statLabel}</p>
              </CardHeader>
              <CardContent className='flex-1 space-y-4'>
                <p className='h-9 text-6xl font-semibold'>&ldquo;</p>
                <p className='text-muted-foreground'>{featuredTestimonial.content}</p>
              </CardContent>
              <CardFooter className='justify-between'>
                <div className='flex items-center gap-2'>
                  <Avatar className='size-10.5 rounded-lg'>
                    <AvatarImage src={featuredTestimonial.avatar} alt={featuredTestimonial.name} />
                    <AvatarFallback className='rounded-lg'>
                      {featuredTestimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='font-medium'>{featuredTestimonial.name}</h4>
                    <p className='text-muted-foreground text-sm'>{featuredTestimonial.role}</p>
                  </div>
                </div>
                <Avatar className='size-6.5 grayscale'>
                  <AvatarImage src={featuredTestimonial.companyLogo} alt={featuredTestimonial.companyName} />
                  <AvatarFallback>{featuredTestimonial.companyName.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </CardFooter>
            </Card>
          </MotionPreset>

          {/* Right column */}
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
              className='sm:col-span-2'
              delay={0.7}
            >
              <Card className='border-0 shadow-lg'>
                <CardHeader>
                  <div className='text-3xl font-semibold'>{secondaryTestimonial.stat}</div>
                  <p className='text-muted-foreground'>{secondaryTestimonial.statLabel}</p>
                </CardHeader>
                <CardContent className='flex-1 space-y-2'>
                  <p className='h-9 text-6xl font-semibold'>&ldquo;</p>
                  <p className='text-muted-foreground'>{secondaryTestimonial.content}</p>
                </CardContent>
                <CardFooter className='justify-between'>
                  <div className='flex items-center gap-2'>
                    <Avatar className='size-10.5 rounded-lg'>
                      <AvatarImage src={secondaryTestimonial.avatar} alt={secondaryTestimonial.name} />
                      <AvatarFallback className='rounded-lg'>
                        {secondaryTestimonial.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{secondaryTestimonial.name}</h4>
                      <p className='text-muted-foreground text-sm'>{secondaryTestimonial.role}</p>
                    </div>
                  </div>
                  <Avatar className='size-6.5 grayscale'>
                    <AvatarImage src={secondaryTestimonial.companyLogo} alt={secondaryTestimonial.companyName} />
                    <AvatarFallback>{secondaryTestimonial.companyName.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </CardFooter>
              </Card>
            </MotionPreset>

            {/* Bottom small cards */}
            {simpleTestimonials.map((testimonial, index) => (
              <MotionPreset
                key={index}
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
                delay={0.8 + index * 0.1}
              >
                <Card className='gap-9 border-0 shadow-lg'>
                  <CardContent>
                    <p className='h-9 text-6xl font-semibold'>&ldquo;</p>
                    <p className='text-muted-foreground'>{testimonial.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className='flex items-center gap-2'>
                      <Avatar className='size-10.5 rounded-lg'>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className='rounded-lg'>
                          {testimonial.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>{testimonial.name}</h4>
                        <p className='text-muted-foreground text-sm'>{testimonial.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </MotionPreset>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComponent
