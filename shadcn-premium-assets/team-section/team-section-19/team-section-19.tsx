import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type TeamMember = {
  img: string
  name: string
  description: string
  role: string
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'
        opts={{
          align: 'start'
        }}
      >
        <div className='flex justify-between gap-4 gap-x-11 max-sm:flex-col sm:items-end'>
          <div className='space-y-4'>
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.1}
            >
              <Badge variant='outline' className='text-sm font-normal'>
                Meet our team
              </Badge>
            </MotionPreset>
            <MotionPreset
              component='h2'
              className='text-2xl font-semibold md:text-3xl lg:text-4xl'
              fade
              slide={{ direction: 'down', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.1}
            >
              Get to Know the People Behind the Progress
            </MotionPreset>
          </div>

          <MotionPreset
            className='flex items-center gap-4'
            fade
            blur
            delay={0.3}
            slide={{ direction: 'right', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <CarouselPrevious
              variant='default'
              className='disabled:bg-background disabled:border-input disabled:text-primary static size-9 translate-y-0 rounded-md disabled:border disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:bg-background disabled:border-input disabled:text-primary static size-9 translate-y-0 rounded-md disabled:border disabled:opacity-100'
            />
          </MotionPreset>
        </div>

        <MotionPreset
          className='space-y-12'
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.5 }}
          delay={0.9}
        >
          <CarouselContent className='py-3 sm:-ml-6'>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={`${member.name}-${index}}`}
                className='group sm:basis-1/2 sm:pl-6 md:basis-1/3 lg:basis-1/4'
              >
                <Card className='bg-muted group-hover:bg-primary/10 gap-0 rounded-xl border-0 pb-0 shadow-none transition-[background] duration-300'>
                  <CardContent className='mb-5'>
                    <Badge className='group-hover:bg-primary group-hover:text-primary-foreground text-primary bg-primary/10'>
                      {member.role}
                    </Badge>
                    <CardTitle className='mt-2.5 mb-5 max-w-30 text-4xl font-medium'>{member.name}</CardTitle>
                    <p className='text-muted-foreground line-clamp-2 text-sm'>{member.description}</p>
                  </CardContent>
                  <img
                    src={member.img}
                    alt={member.name}
                    className='h-100 w-full rounded-xl object-cover object-top sm:h-71'
                  />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </MotionPreset>
      </Carousel>
    </section>
  )
}

export default Team
