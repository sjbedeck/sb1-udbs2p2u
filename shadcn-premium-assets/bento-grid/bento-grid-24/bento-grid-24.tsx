import * as motion from 'motion/react-client'

import { MonitorIcon, SmartphoneIcon, TabletIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Components from '@/components/shadcn-studio/blocks/bento-grid-24/components'
import PreBuiltThemes from '@/components/shadcn-studio/blocks/bento-grid-24/pre-built-themes'
import Updates from '@/components/shadcn-studio/blocks/bento-grid-24/updates'
import Workflow from '@/components/shadcn-studio/blocks/bento-grid-24/workflow'

const BentoGrid = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.1}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card col-span-full flex flex-col justify-between rounded-xl pt-6 lg:col-span-6'
          >
            <Components />
            <div className='space-y-3 p-6'>
              <h3 className='text-2xl font-semibold'>1000+ Components variants</h3>
              <p className='text-muted-foreground text-lg'>
                1000+ organized, customizable Shadcn UI Figma variants for easy discovery and reuse.
              </p>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.3}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card col-span-full flex flex-col justify-between gap-6 rounded-xl p-6 max-lg:order-2 lg:col-span-6'
          >
            <Tabs defaultValue='desktop' className='items-center gap-6'>
              <TabsList className='bg-background h-10.5 gap-4 max-[380px]:gap-1'>
                <TabsTrigger
                  value='tablet'
                  className='data-[state=active]:bg-primary/20 bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 h-9 px-4 py-2 data-[state=active]:shadow-none dark:data-[state=active]:border-transparent'
                >
                  <TabletIcon />
                  Tablet
                </TabsTrigger>
                <TabsTrigger
                  value='desktop'
                  className='data-[state=active]:bg-primary/20 bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 h-9 px-4 py-2 data-[state=active]:shadow-none dark:data-[state=active]:border-transparent'
                >
                  <MonitorIcon />
                  Desktop
                </TabsTrigger>
                <TabsTrigger
                  value='mobile'
                  className='data-[state=active]:bg-primary/20 bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 h-9 px-4 py-2 data-[state=active]:shadow-none dark:data-[state=active]:border-transparent'
                >
                  <SmartphoneIcon />
                  Mobile
                </TabsTrigger>
              </TabsList>
              <TabsContent value='tablet'>
                <MotionPreset
                  component='img'
                  fade
                  zoom={{ initialScale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  motionProps={{
                    src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-tablet-light.png?height=370&format=auto',
                    alt: 'Tablet'
                  }}
                  className='max-h-93 w-auto rounded-md border dark:hidden'
                />
                <MotionPreset
                  component='img'
                  fade
                  zoom={{ initialScale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  motionProps={{
                    src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-tablet-dark.png?height=370&format=auto',
                    alt: 'Tablet'
                  }}
                  className='hidden max-h-93 w-auto rounded-md border dark:inline-block'
                />
              </TabsContent>
              <TabsContent value='desktop'>
                <MotionPreset
                  component='img'
                  fade
                  zoom={{ initialScale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  motionProps={{
                    src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-desktop-light.png?height=370&format=auto',
                    alt: 'Desktop'
                  }}
                  className='max-h-93 w-auto rounded-md border dark:hidden'
                />
                <MotionPreset
                  component='img'
                  fade
                  zoom={{ initialScale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  motionProps={{
                    src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-desktop-dark.png?height=370&format=auto',
                    alt: 'Desktop'
                  }}
                  className='hidden max-h-93 w-auto rounded-md border dark:inline-block'
                />
              </TabsContent>
              <TabsContent value='mobile'>
                <MotionPreset
                  component='img'
                  fade
                  zoom={{ initialScale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  motionProps={{
                    src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-mobile-light.png?height=370&format=auto',
                    alt: 'Mobile'
                  }}
                  className='max-h-93 w-auto rounded-md border dark:hidden'
                />
                <MotionPreset
                  component='img'
                  fade
                  zoom={{ initialScale: 0.85 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  motionProps={{
                    src: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-mobile-dark.png?height=370&format=auto',
                    alt: 'Mobile'
                  }}
                  className='hidden max-h-93 w-auto rounded-md border dark:inline-block'
                />
              </TabsContent>
            </Tabs>
            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>Fully Responsive</h3>
              <p className='text-muted-foreground text-lg'>
                One file, all screens. Responsive layouts for web, tablet, and mobile.
              </p>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.5}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card col-span-full flex flex-col justify-between gap-6 rounded-xl p-6 md:col-span-6 lg:col-span-4'
          >
            <PreBuiltThemes />

            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>20+ Pre-Built Themes</h3>
              <p className='text-muted-foreground text-lg'>
                Select any 4 stunning shadcn/ui themes from 20+, including dark mode, with endless customization
                options.
              </p>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.7}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card col-span-full flex flex-col justify-between gap-6 rounded-xl p-6 md:col-span-6 lg:col-span-4'
          >
            <div className='grid grid-cols-3 gap-2'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-regular-updates-left.png?width=141&format=auto'
                alt='Image 1'
                className='h-full w-auto rounded-md border dark:grayscale dark:invert'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/features-regular-updates-right.png?width=293&format=auto'
                alt='Image 2'
                className='col-span-2 h-auto w-full rounded-md border dark:grayscale dark:invert'
              />
            </div>
            <Updates />
            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>Regular updates</h3>
              <p className='text-muted-foreground text-lg'>
                Stay updated with shadcn/ui seamless integration with the latest Shadcn UI Figma library feature.
              </p>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.9}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card col-span-full flex flex-col justify-between gap-6 rounded-xl p-6 max-lg:order-1 md:col-span-6 lg:col-span-4'
          >
            <div className='relative flex grow flex-col justify-center'>
              <Marquee pauseOnHover duration={30} className='p-0' gap={1.125}>
                <div className='bg-card flex h-35 w-60 flex-col gap-3 rounded-sm border border-dashed p-6'>
                  <h4 className='text-primary text-lg font-medium'>Grid styles</h4>
                  <div className='flex-1 border-y px-[10%]'>
                    <div className='grid h-full grid-cols-4 gap-2'>
                      <div className='bg-destructive/10' />
                      <div className='bg-destructive/10' />
                      <div className='bg-destructive/10' />
                      <div className='bg-destructive/10' />
                    </div>
                  </div>
                </div>

                <div className='bg-card flex h-35 w-60 flex-col gap-3 rounded-sm border border-dashed p-6'>
                  <h4 className='text-primary text-lg font-medium'>Shadow effect</h4>
                  <div className='grid h-full grid-cols-3 gap-4'>
                    <div className='bg-muted text-secondary-foreground flex items-center justify-center rounded-md text-sm shadow-sm'>
                      sm
                    </div>
                    <div className='bg-muted text-secondary-foreground flex items-center justify-center rounded-md text-sm shadow-md'>
                      md
                    </div>
                    <div className='bg-muted text-secondary-foreground flex items-center justify-center rounded-md text-sm shadow-lg'>
                      lg
                    </div>
                  </div>
                </div>
                <div className='bg-card flex h-35 w-60 flex-col gap-3 rounded-sm border border-dashed p-6'>
                  <h4 className='text-primary text-lg font-medium'>Color styles</h4>
                  <div className='flex -space-x-2.5'>
                    <div className='bg-primary ackground size-11.5 rounded-full border-2' />
                    <div className='bg-muted-foreground ackground size-11.5 rounded-full border-2' />
                    <div className='bg-ring ackground size-11.5 rounded-full border-2' />
                    <div className='bg-muted ackground size-11.5 rounded-full border-2' />
                    <div className='bg-destructive ackground size-11.5 rounded-full border-2' />
                  </div>
                </div>
                <div className='bg-card flex h-35 w-60 flex-col gap-3 rounded-sm border border-dashed p-6'>
                  <h4 className='text-primary text-lg font-medium'>Text styles</h4>
                  <div className='flex items-start gap-3'>
                    <div className='bg-background dark:order flex items-center justify-center rounded-sm border border-transparent p-3 font-semibold shadow-lg'>
                      Ag
                    </div>
                    <div className='flex flex-col gap-1.75'>
                      <span className='text-sm leading-none font-semibold'>Font display</span>
                      <span className='text-xs leading-none font-medium'>Font display</span>
                      <span className='text-[10px] leading-none font-normal'>Font display</span>
                    </div>
                  </div>
                </div>
              </Marquee>
              <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent' />
              <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent' />
            </div>
            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>Consistent Design Tokens</h3>
              <p className='text-muted-foreground text-lg'>
                Keep your design system consistent by managing and updating all your values with shadcn/studio&apos;s
                reusable variables.
              </p>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.5}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card z-1 col-span-full flex flex-col justify-between gap-6 rounded-xl p-6 lg:col-span-7'
          >
            <div className='flex justify-between gap-8 max-sm:flex-col'>
              <div className='group relative flex min-h-68 flex-1 items-center justify-center rounded-[0.75rem] border'>
                <Button size='lg' className='duration-300 group-hover:scale-110'>
                  Button
                </Button>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/button-light.png?height=42&format=auto'
                  alt='Button Variants'
                  className='absolute h-10.5 transition-transform duration-300 not-group-hover:opacity-0! group-hover:scale-110 dark:hidden'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/button-dark.png?height=43&format=auto'
                  alt='Button Variants'
                  className='absolute -mt-px ml-px hidden h-10.75 transition-transform duration-300 not-group-hover:opacity-0! group-hover:scale-110 dark:inline-block'
                />
                <span className='absolute top-0 left-1/2 -z-1 h-1/2 w-px border-l border-dashed border-sky-500 not-group-hover:hidden' />
                <span className='absolute top-1/2 left-0 -z-1 h-px w-1/2 border-t border-dashed border-sky-500 not-group-hover:hidden' />
              </div>
              <div className='flex md:justify-center'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/button-styles.png?width=240&format=auto'
                  alt='Button Styles'
                  className='h-auto w-full md:max-w-60'
                />
              </div>
            </div>
            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>Design & Dev Consistency</h3>
              <p className='text-muted-foreground text-lg'>
                Shadcn ensures alignment between design and development, using shared components and systems for precise
                implementation and seamless handoffs.
              </p>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            delay={0.7}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className='bg-card col-span-full flex flex-col justify-between gap-6 rounded-xl p-6 md:col-span-6 lg:col-span-5'
          >
            <div className='relative flex items-center justify-center py-7'>
              <motion.svg
                width='1em'
                height='1em'
                viewBox='0 0 247 247'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='size-61.5'
                initial='hidden'
                animate='visible'
              >
                <motion.circle
                  strokeOpacity={0.2}
                  cx='123.5'
                  cy='123.5'
                  r='122.31'
                  fill='var(--card)'
                  stroke='var(--border)'
                  strokeWidth='1.62'
                  variants={{
                    visible: {
                      scale: [1, 0.85, 1],
                      transition: {
                        scale: { duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                      }
                    }
                  }}
                />
                <motion.circle
                  strokeOpacity={0.4}
                  cx='123.5'
                  cy='123.5'
                  r='104.69'
                  fill='var(--card)'
                  stroke='var(--border)'
                  strokeWidth='1.35'
                  variants={{
                    visible: {
                      scale: [1, 0.85, 1],
                      transition: {
                        scale: { delay: 0.12, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                      }
                    }
                  }}
                />
                <motion.circle
                  strokeOpacity={0.6}
                  cx='123.5'
                  cy='123.5'
                  r='87.3127'
                  fill='var(--card)'
                  stroke='var(--border)'
                  strokeWidth='1.125'
                  variants={{
                    visible: {
                      scale: [1, 0.85, 1],
                      transition: {
                        scale: { delay: 0.24, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                      }
                    }
                  }}
                />
                <motion.circle
                  strokeOpacity={0.8}
                  cx='123.5'
                  cy='123.5'
                  r='69.8801'
                  fill='var(--card)'
                  stroke='var(--border)'
                  strokeWidth='1.125'
                  variants={{
                    visible: {
                      scale: [1, 0.85, 1],
                      transition: {
                        scale: { delay: 0.36, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                      }
                    }
                  }}
                />
                <motion.circle
                  strokeOpacity={1}
                  cx='123.5'
                  cy='123.5'
                  r='53.0625'
                  fill='var(--card)'
                  stroke='var(--border)'
                  strokeWidth='1.125'
                  variants={{
                    visible: {
                      scale: [1, 0.85, 1],
                      transition: {
                        scale: { delay: 0.48, duration: 2.75, repeat: Infinity, ease: 'easeOut' }
                      }
                    }
                  }}
                />
              </motion.svg>
              <Workflow />
            </div>
            <div className='space-y-3'>
              <h3 className='text-2xl font-semibold'>Speed Up Your Workflow</h3>
              <p className='text-muted-foreground text-lg'>
                Shadcn&apos;s tools and components accelerate design, eliminate redundancy, and supercharge productivity
              </p>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
