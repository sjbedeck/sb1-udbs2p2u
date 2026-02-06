import { ArrowRightIcon } from 'lucide-react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'

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
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.1}
          >
            meet our team
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            Get to Know the People Behind the Progress
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
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
              className='group relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            >
              View All
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          </MotionPreset>
        </div>

        {/* Team Members */}
        <div className='grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 2xl:gap-24'>
          {teamMembers.map((member, index) => (
            <MotionPreset
              key={`${member.name}-${index}`}
              fade
              slide={{ direction: 'down', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.6 + 0.15 * index}
              className='h-full'
            >
              <Card className='group hover:border-primary/60 h-full overflow-hidden rounded-sm border-2 py-0 shadow-none transition-colors duration-300'>
                <CardContent className='overflow-hidden px-0'>
                  <div className='overflow-hidden'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='mx-auto h-76 w-full object-cover transition-transform duration-200 group-hover:scale-105'
                    />
                  </div>
                  <div className='flex items-center gap-1 p-5'>
                    <div className='grow'>
                      <CardTitle className='text-lg font-semibold'>{member.name}</CardTitle>
                      <p className='text-muted-foreground'>{member.role}</p>
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
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
