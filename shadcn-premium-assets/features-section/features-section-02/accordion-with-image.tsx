'use client'

import { useState } from 'react'

import { MessageSquareMoreIcon, PlaneTakeoffIcon, CodeXmlIcon, MousePointerClickIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { MotionPreset } from '@/components/ui/motion-preset'

const featureData = [
  {
    id: 'production-ready',
    icon: PlaneTakeoffIcon,
    title: 'Ready for Production',
    description:
      'Login is accessing an existing account, registration is creating a new one by providing necessary information.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-1.png',
    imageAlt: 'Dashboard Preview'
  },
  {
    id: 'clean-code',
    icon: CodeXmlIcon,
    title: 'Clean Code',
    description: 'Our codebase follows best practices and is well-documented for easy maintenance.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-11.png',
    imageAlt: 'Clean code Preview'
  },
  {
    id: 'deployment',
    icon: MousePointerClickIcon,
    title: '1-Click Deployment',
    description: 'Deploy your application with a single click to your preferred hosting platform.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-12.png',
    imageAlt: 'Deployment Preview'
  }
]

const AccordionWithImage = () => {
  const [activeAccordion, setActiveAccordion] = useState('production-ready')

  const handleAccordionChange = (value: string) => {
    setActiveAccordion(value)
  }

  const activeFeature = featureData.find(feature => feature.id === activeAccordion) || featureData[0]

  return (
    <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
      <div className='grid gap-20 lg:grid-cols-2'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex items-center gap-4'>
              <Avatar className='size-10 rounded-lg'>
                <AvatarFallback className='bg-muted text-card-foreground rounded-lg'>
                  <MessageSquareMoreIcon className='size-6' />
                </AvatarFallback>
              </Avatar>
              <h2 className='text-xl font-semibold'>Launch your app quickly</h2>
            </div>
            <h2 className='text-2xl font-semibold'>Production-Ready</h2>
            <p className='text-muted-foreground'>
              JetShip provides all the essential tools and resources needed to launch your project efficiently.
            </p>
          </div>

          <Accordion
            type='single'
            collapsible
            className='w-full space-y-2'
            value={activeAccordion}
            onValueChange={handleAccordionChange}
          >
            {featureData.map((item, index) => (
              <AccordionItem key={index} value={item.id} className='rounded-md border!'>
                <AccordionTrigger className='px-5'>
                  <span className='flex items-center gap-4'>
                    <item.icon className='size-4 shrink-0' />
                    <span className='text-base'>{item.title}</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className='text-muted-foreground px-5 text-base'>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Image */}
        <div className='bg-primary/10 relative mt-auto overflow-hidden rounded-lg px-6 pt-14 max-lg:shrink-0'>
          <MotionPreset key={activeFeature.id} fade slide={{ direction: 'down' }} transition={{ duration: 0.7 }}>
            <img
              src={activeFeature.image}
              alt={activeFeature.imageAlt}
              className='w-full rounded-t-xl object-cover dark:hidden'
            />
            <img
              src={`${activeFeature.image.replace('.png', '-dark.png')}`}
              alt={activeFeature.imageAlt}
              className='hidden w-full rounded-t-xl object-cover dark:inline-block'
            />
          </MotionPreset>
        </div>
      </div>
    </MotionPreset>
  )
}

export default AccordionWithImage
