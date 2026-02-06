import AccordionWithImage from '@/components/shadcn-studio/blocks/features-section-02/accordion-with-image'

import { MotionPreset } from '@/components/ui/motion-preset'

const Features = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            Build, Brand, and{' '}
            <span className='relative z-10'>
              Launch Your Dreams SaaS
              <span
                className='bg-primary absolute bottom-0 left-0 -z-10 h-px w-full max-sm:hidden'
                aria-hidden='true'
              />
            </span>{' '}
            in Record Time
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
            JetShip is your all-in-one starter kit for building and launching a thriving subscription or one-time
            purchase SaaS business.
          </MotionPreset>
        </div>

        <AccordionWithImage />
      </div>
    </section>
  )
}

export default Features
