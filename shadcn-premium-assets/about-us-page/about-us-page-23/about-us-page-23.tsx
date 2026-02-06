'use client'

import { useRef } from 'react'

import { ChartSplineIcon, LinkedinIcon, ShapesIcon, YoutubeIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AnimatedBeam } from '@/components/ui/animated-beam'

import { MotionPreset } from '@/components/ui/motion-preset'
import GrowLogo from '@/assets/svg/grow-logo'
import TabDashboard from '@/components/shadcn-studio/blocks/about-us-page-23/tab-dashboard'
import TabSocialMedia from '@/components/shadcn-studio/blocks/about-us-page-23/tab-social-media'
import TabYoutube from '@/components/shadcn-studio/blocks/about-us-page-23/tab-youtube'
import TabLinkedIn from '@/components/shadcn-studio/blocks/about-us-page-23/tab-linkedin'

type AboutUsProps = {
  badge: string
  heading: string
  description: string
}

const tabs = [
  {
    name: 'Dashboard',
    value: 'dashboard',
    icon: ChartSplineIcon,
    content: <TabDashboard />
  },
  {
    name: 'Social Media',
    value: 'social-media',
    icon: ShapesIcon,
    content: <TabSocialMedia />
  },
  {
    name: 'YouTube',
    value: 'youtube',
    icon: YoutubeIcon,
    content: <TabYoutube />
  },
  {
    name: 'LinkedIn',
    value: 'linkedin',
    icon: LinkedinIcon,
    content: <TabLinkedIn />
  }
]

const AboutUs = ({ badge, heading, description }: AboutUsProps) => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLSpanElement>(null)
  const divRef = useRef<HTMLSpanElement>(null)

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div ref={containerRef} className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Top Section */}
        <div className='mb-36 grid grid-cols-1 items-center gap-10 lg:mb-44 lg:grid-cols-3 lg:gap-16'>
          {/* Left - Heading */}
          <MotionPreset fade slide={{ direction: 'left', offset: 50 }} delay={0.1} transition={{ duration: 0.6 }}>
            <div className='space-y-6'>
              <Badge variant='outline' className='font-normal'>
                {badge}
              </Badge>
              <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{heading}</h3>
            </div>
          </MotionPreset>

          {/* Center - Brand Image */}
          <MotionPreset
            fade
            transition={{ duration: 0.8 }}
            delay={0.3}
            className='bg-accent relative mx-auto flex size-50 flex-shrink-0 flex-col items-center justify-center gap-3 rounded-lg border-3 shadow-[inset_0_0_15px_color-mix(in_oklab,var(--primary)60%,transparent)] max-lg:order-2 lg:size-69.5'
          >
            <GrowLogo className='size-10 lg:size-18' />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/grow-text.png'
              alt='Website Mockups Grid'
              className='w-28 lg:w-35.5 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/grow-text-dark.png'
              alt='Website Mockups Grid'
              className='hidden w-28 lg:w-35.5 dark:inline-block'
            />
            <span ref={logoRef} className='absolute inset-x-0 -bottom-0.5 mx-auto size-0.5' />
          </MotionPreset>

          {/* Right - Description */}
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'right', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.8 }}
          >
            {description}
          </MotionPreset>
        </div>

        {/* Dashboard Section with Tabs */}
        <MotionPreset fade delay={0.8} transition={{ duration: 0.8 }}>
          <Card className='sm:bg-muted bg-background relative border-0 shadow-none max-sm:py-0'>
            <span ref={divRef} className='absolute inset-x-0 top-0.5 mx-auto size-0.5' />
            <CardContent className='max-sm:px-0'>
              <Tabs defaultValue='dashboard' className='w-full gap-2.5'>
                <Card className='bg-background border-0 py-0 shadow-none sm:px-2.5 sm:py-4'>
                  <ScrollArea className='bg-muted w-full rounded-lg sm:w-auto'>
                    <TabsList className='h-auto w-full gap-1'>
                      {tabs.map(tab => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className='cursor-pointer rounded-lg md:text-base md:[&>svg]:size-5!'
                        >
                          <tab.icon />
                          {tab.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <ScrollBar orientation='horizontal' />
                  </ScrollArea>
                </Card>

                <Card className='bg-background max-sm:border-0 max-sm:py-0 max-sm:shadow-none'>
                  <CardContent className='max-sm:px-0'>
                    {tabs.map(tab => (
                      <TabsContent key={tab.value} value={tab.value}>
                        {tab.content}
                      </TabsContent>
                    ))}
                  </CardContent>
                </Card>
              </Tabs>
            </CardContent>
          </Card>
        </MotionPreset>

        <MotionPreset fade blur delay={0.6} transition={{ duration: 0.8 }} className='absolute inset-x-0 top-0 -z-1'>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1'
            reverse
            duration={3.5}
            startXOffset={-20}
            endXOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1'
            reverse
            duration={3.5}
            startXOffset={-80}
            endXOffset={-25}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1'
            reverse
            duration={3.5}
            startXOffset={-160}
            endXOffset={-40}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1 max-sm:hidden'
            reverse
            duration={3.5}
            startXOffset={-240}
            endXOffset={-55}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1'
            duration={3.5}
            startXOffset={20}
            endXOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1'
            duration={3.5}
            startXOffset={80}
            endXOffset={25}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1'
            duration={3.5}
            startXOffset={160}
            endXOffset={40}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={divRef}
            toRef={logoRef}
            className='text-primary -z-1 max-sm:hidden'
            duration={3.5}
            startXOffset={240}
            endXOffset={55}
          />
        </MotionPreset>
      </div>
    </section>
  )
}

export default AboutUs
