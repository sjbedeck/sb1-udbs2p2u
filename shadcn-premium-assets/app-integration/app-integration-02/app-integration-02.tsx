import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { MotionPreset } from '@/components/ui/motion-preset'

type Integration = {
  name: string
  image: string
}[]

const AppIntegration = ({ integrations }: { integrations: Integration }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8 space-y-4 text-center'>
          <MotionPreset
            component='h2'
            className='relative inline-block text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            <span>All types of </span>
            <span className='relative z-10'>
              integration
              <span className='bg-primary absolute bottom-0.5 left-0 -z-10 h-px w-full' aria-hidden='true'></span>
            </span>
            Team
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Connect your favourites apps and service to enhance your experience and boost productivity
          </MotionPreset>
        </div>

        {/* App Integration */}
        <div className='flex flex-col items-center gap-8'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
            <div className='flex -space-x-5'>
              {integrations.map((integration, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Avatar className='size-13.5 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                      <AvatarImage src={integration.image} alt={integration.name} />
                      <AvatarFallback className='text-xs'>{integration.name}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>{integration.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.9} transition={{ duration: 0.5 }}>
            <Button
              className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 rounded-full text-base'
              size='lg'
            >
              See all integration
            </Button>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
