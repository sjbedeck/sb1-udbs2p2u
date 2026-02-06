import { ChevronsRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'
import { BorderBeam } from '@/components/ui/border-beam'

import { cn } from '@/lib/utils'

type TeamMember = {
  image: string
  name: string
  role: string
  cardClass: string
  href: string
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='relative overflow-y-auto py-8 sm:py-16 lg:py-24'>
      <div className='absolute top-0 left-1/2 size-160 -translate-x-1/2'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-106.png'
          alt='gradient bg'
          className='opacity-5 dark:opacity-25'
        />
      </div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'up', offset: 50 }} delay={0.5} blur transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='bg-background relative text-sm font-normal'>
              Meet our team
              <BorderBeam colorFrom='var(--primary)' colorTo='var(--primary)' size={35} duration={4} />
            </Badge>
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'up', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Get to Know the People Behind the Progress
          </MotionPreset>
          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'up', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            className='text-muted-foreground text-xl'
          >
            Driven by purpose, our team blends creativity, innovation, and expertise to shape remarkable outcomes.
          </MotionPreset>
        </div>

        {/* Team Members */}
        <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.5 + 0.15 * index}
              key={member.name}
              className='group relative mb-12.5'
            >
              <div
                className={cn(
                  'group relative h-full overflow-hidden rounded-md transition-shadow duration-300 group-hover:ring-2',
                  member.cardClass
                )}
              >
                <img src={member.image} alt='Banner' className='size-full object-cover' />
              </div>
              <div className='absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-1/2 px-6'>
                <div className='bg-card flex items-center justify-between gap-9 rounded-xl px-5 py-3 shadow-lg'>
                  <div>
                    <h4 className='text-lg font-semibold'>{member.name}</h4>
                    <p className='text-muted-foreground'>{member.role}</p>
                  </div>
                  <ChevronsRightIcon className='size-10 shrink-0 stroke-1 transition-transform duration-300 group-hover:translate-x-1' />
                </div>
              </div>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
