'use client'

import { useState } from 'react'

import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

type TeamMember = {
  img: string
  name: string
  role: string
  description: string
  socialLinks: {
    facebook: string
    github: string
    twitter: string
    insta: string
  }
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  const [hoverImage, setHoverImage] = useState(0)

  return (
    <section className='overflow-x-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 space-y-4 sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide blur transition={{ duration: 0.5 }} delay={0.2}>
            <Badge variant='outline' className='text-sm font-normal'>
              Meet Our Team
            </Badge>
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide
            blur
            transition={{ duration: 0.5 }}
            delay={0.35}
          >
            A Team of Creators, Thinkers, and Doers Dedicated to Making Difference
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide
            blur
            transition={{ duration: 0.5 }}
            delay={0.5}
          >
            Driven by purpose, our team blends creativity, innovation, and expertise to shape remarkable outcomes.
          </MotionPreset>
          <MotionPreset fade blur slide delay={0.65} transition={{ duration: 0.5 }}>
            <Button size='lg' className='rounded-lg text-base'>
              About Us
            </Button>
          </MotionPreset>
        </div>
        <div className='grid grid-cols-1 items-center justify-center gap-x-32 gap-y-12.75 xl:grid-cols-2'>
          <div className='max-2xl:max-w-140'>
            {teamMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}}`}
                className={cn('space-y-5.5 p-5 max-[376px]:px-0!', hoverImage === index ? 'block' : 'hidden')}
              >
                <div className='space-y-2'>
                  {hoverImage === index && (
                    <MotionPreset
                      component='h2'
                      className='text-5xl font-medium max-sm:text-3xl'
                      fade
                      slide={{ direction: 'down', offset: 60 }}
                      blur
                      transition={{ duration: 0.5 }}
                      delay={0.3}
                    >
                      {teamMembers[hoverImage].name}
                    </MotionPreset>
                  )}
                  {hoverImage === index && (
                    <MotionPreset
                      component='p'
                      className='text-muted-foreground text-xl font-medium'
                      fade
                      slide={{ direction: 'down', offset: 60 }}
                      blur
                      transition={{ duration: 0.5 }}
                      delay={0.4}
                    >
                      {teamMembers[hoverImage].role}
                    </MotionPreset>
                  )}
                </div>

                {hoverImage === index && (
                  <MotionPreset
                    fade
                    slide={{ direction: 'down', offset: 60 }}
                    blur
                    transition={{ duration: 0.5 }}
                    delay={0.5}
                  >
                    <div className='flex items-center gap-3'>
                      <a href={teamMembers[hoverImage].socialLinks.facebook}>
                        <FacebookIcon className='size-5.5 shrink-0 text-sky-600 dark:text-sky-400/60' />
                      </a>

                      <a href={teamMembers[hoverImage].socialLinks.twitter}>
                        <TwitterIcon className='size-5.5 shrink-0 text-green-600 dark:text-green-400/60' />
                      </a>

                      <a href={teamMembers[hoverImage].socialLinks.github}>
                        <GithubIcon className='text-primary size-5.5 shrink-0' />
                      </a>

                      <a href={teamMembers[hoverImage].socialLinks.insta}>
                        <InstagramIcon className='text-destructive size-5.5 shrink-0' />
                      </a>
                    </div>
                  </MotionPreset>
                )}
                {hoverImage === index && (
                  <MotionPreset
                    component='p'
                    className='text-muted-foreground'
                    fade
                    slide={{ direction: 'down', offset: 60 }}
                    blur
                    transition={{ duration: 0.5 }}
                    delay={0.6}
                  >
                    &quot;{teamMembers[hoverImage].description}
                  </MotionPreset>
                )}
              </div>
            ))}
          </div>
          <MotionPreset fade blur transition={{ duration: 0.5 }} delay={1}>
            <div className='flex h-70 items-center justify-center gap-1 sm:h-121'>
              {teamMembers.map((member, index) => (
                <img
                  key={`${member.name}-${index}}`}
                  src={member.img}
                  alt={member.name}
                  className={cn(
                    'h-70 cursor-pointer object-cover transition-[width] duration-300 sm:h-121',
                    hoverImage === index
                      ? 'w-89 shrink-0 max-[540px]:w-70 max-[450px]:w-60 lg:w-104'
                      : 'w-15 shrink max-[540px]:w-10 max-[450px]:w-8 sm:max-lg:w-25 lg:w-20'
                  )}
                  onMouseEnter={() => setHoverImage(index)}
                />
              ))}
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default Team
