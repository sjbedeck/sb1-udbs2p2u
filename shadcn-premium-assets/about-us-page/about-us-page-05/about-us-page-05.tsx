import type { ComponentType } from 'react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type FeatureCard = {
  icon: ComponentType
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}[]

const AboutUs = ({ features }: { features: FeatureCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 max-w-6xl space-y-4 text-center md:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            About us
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Specially Designed For Payments
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Our story is a testament to the power of collaboration and resilience. Together, we have navigated
            challenges,celebrated milestones, and crafted a narrative of growth and achievement in the construction
            industry.
          </MotionPreset>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              zoom={{ initialScale: 0.85 }}
              delay={0.9 + index * 0.1}
              transition={{ duration: 0.5 }}
              className='max-lg:last:col-span-full'
            >
              <Card className='rounded-lg shadow-none'>
                <CardContent className='space-y-4'>
                  <img src={feature.imageUrl} alt={feature.imageAlt} className='h-50 w-full object-cover' />
                  <CardTitle className='flex items-center gap-3 text-xl'>
                    <feature.icon />
                    {feature.title}
                  </CardTitle>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
