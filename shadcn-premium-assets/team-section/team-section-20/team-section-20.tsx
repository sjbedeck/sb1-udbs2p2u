import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { SpinningText } from '@/components/shadcn-studio/blocks/spinning-text'

import LogoSvg from '@/assets/svg/logo'
import Linkedin from '@/assets/svg/linkedin'
import Github from '@/assets/svg/github'

type TeamMember = {
  image: string
  name: string
  role: string
  socialLinks: {
    linkedin: string
    github: string
  }
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='from-primary/60 to-primary relative min-h-screen overflow-hidden bg-linear-160 py-16 before:absolute before:start-0 before:top-0 before:size-full before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-112.png)] before:bg-size-[200%] before:bg-center before:bg-no-repeat sm:py-16 lg:py-24 lg:before:bg-size-[150%] lg:before:bg-[center_top_-33rem]'>
      <div className='relative z-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary-foreground text-sm font-medium uppercase'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.1}
          >
            Meet our team
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-primary-foreground mx-auto max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            A Team of Visionaries, Builders, and Problem Solvers Making a Difference
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-primary-foreground/70 text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Driven by purpose, our team blends creativity, innovation, and expertise to shape remarkable outcomes.
          </MotionPreset>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              className='group bg-background hover:bg-background/90 focus-visible:ring-background/20 dark:focus-visible:ring-background/40 dark:bg-background text-foreground relative rounded-lg text-base has-[>svg]:px-6'
            >
              About Us
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          </MotionPreset>
        </div>
        <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.1}>
          <div className='relative'>
            <div className='absolute -top-14 -right-43 w-full xl:-right-52'>
              <MotionPreset
                fade
                zoom
                delay={0.5}
                transition={{ duration: 0.5 }}
                className='absolute -top-7 right-42 duration-300 max-lg:hidden'
              >
                <div className='relative'>
                  <div className='border-primary-foreground outline-primary-foreground flex size-26 items-center justify-center rounded-full border outline outline-offset-24'>
                    <LogoSvg className='size-16 invert' />
                  </div>
                  <div className='absolute inset-0 w-full translate-y-1/2'>
                    <SpinningText radius={6} className='text-primary-foreground'>
                      Meet Our Team Meet Our Team
                    </SpinningText>
                  </div>
                </div>
              </MotionPreset>
            </div>
            <Carousel
              opts={{
                align: 'start'
              }}
            >
              <CarouselContent className='-ml-9'>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={`${member.name}-${index}}`} className='pl-9 sm:basis-1/2 lg:basis-1/3'>
                    <Card className='group hover:border-background h-full overflow-hidden rounded-lg border-3 p-0 shadow-none transition-colors duration-300'>
                      <CardContent className='relative px-0'>
                        <img
                          src={member.image}
                          alt={member.name}
                          className='size-full object-cover transition-transform duration-200 group-hover:scale-105'
                        />
                        <div className='absolute bottom-0 w-full p-6'>
                          <div className='bg-background flex w-full flex-wrap items-center gap-1 rounded-md p-5 shadow-lg'>
                            <div className='grow'>
                              <CardTitle className='text-lg font-semibold'>{member.name}</CardTitle>
                              <p className='text-muted-foreground text-sm'>{member.role}</p>
                            </div>
                            <div className='flex items-center gap-3'>
                              <a href={member.socialLinks.linkedin} className='text-[#007EBB]'>
                                <Linkedin />
                              </a>
                              <a href={member.socialLinks.github} className='text-primary'>
                                <Github />
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                variant='default'
                className='disabled:bg-background disabled:border-input disabled:text-primary absolute top-1/2 left-0 size-9 -translate-y-1/2 cursor-pointer rounded-md disabled:border disabled:opacity-100 md:-left-4'
              />
              <CarouselNext
                variant='default'
                className='disabled:bg-background disabled:border-input disabled:text-primary absolute top-1/2 right-0 size-9 -translate-y-1/2 cursor-pointer rounded-md disabled:border disabled:opacity-100 md:-right-4'
              />
            </Carousel>
          </div>
        </MotionPreset>
      </div>
      <div className='text-background absolute start-0 bottom-0 w-full'>
        <svg viewBox='0 0 1441 324' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full'>
          <path d='M0 156.999C541.507 -55.7503 857.691 -48.7761 1441 156.999V323.999H0V156.999Z' fill='currentColor' />
        </svg>
      </div>
    </section>
  )
}

export default Team
