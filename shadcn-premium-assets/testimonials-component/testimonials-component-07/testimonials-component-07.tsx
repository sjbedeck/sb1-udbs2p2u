import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Rating } from '@/components/ui/rating'

export type TestimonialItem = {
  name: string
  email: string
  avatar: string
  rating: number
  content: string
}

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[]
}

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Customer Experience Matters</h2>
          <p className='text-muted-foreground text-xl'>
            Predictive analytics, and recommendations to optimize their processes and better business outcomes.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          className='relative w-full space-y-12 sm:space-y-16 lg:space-y-24'
          opts={{
            align: 'start',
            slidesToScroll: 1
          }}
        >
          <CarouselContent className='-ml-6 p-2 pt-14 sm:pt-16 lg:pt-24'>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='pl-6 md:basis-1/2 lg:basis-1/4'>
                <Card className='relative h-full border-none pt-16 shadow-none transition-shadow duration-300 hover:shadow-md'>
                  <CardContent className='flex flex-col items-center gap-6 text-center'>
                    <Avatar className='ring-background absolute top-0 left-1/2 size-23 -translate-x-1/2 -translate-y-1/2 ring-5'>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className='text-lg'>
                        {testimonial.name
                          .split(' ', 2)
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className='text-center'>
                      <h4 className='font-medium'>{testimonial.name}</h4>
                      <p className='text-muted-foreground text-sm'>{testimonial.email}</p>
                    </div>
                    <p className='text-muted-foreground text-center'>{testimonial.content}</p>

                    <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          <div className='flex items-center justify-center gap-4'>
            <CarouselPrevious
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
            />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default TestimonialsComponent
