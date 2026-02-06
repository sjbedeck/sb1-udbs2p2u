import { MotionPreset } from '@/components/ui/motion-preset'

import ColorMastery from '@/components/shadcn-studio/blocks/bento-grid-20/color-mastery'
import ImportExport from '@/components/shadcn-studio/blocks/bento-grid-20/import-export'
import RealTimeCustomizationCard from '@/components/shadcn-studio/blocks/bento-grid-20/real-time-customization-card'
import StunningTheme from '@/components/shadcn-studio/blocks/bento-grid-20/stunning-theme'
import TypographyFineTuning from '@/components/shadcn-studio/blocks/bento-grid-20/typography-fine-tuning'

const themes = [
  {
    name: 'Default',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-105.png',
    bgImg:
      'https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/basic-features-real-time-default-light.png'
  },
  {
    name: 'Clean Slate',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-108.png',
    bgImg:
      'https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/basic-features-real-time-clean-slate-light.png'
  },
  {
    name: 'Ghibli Studio',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-107.png',
    bgImg:
      'https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/basic-features-real-time-ghibli-studio-light.png'
  },
  {
    name: 'Marvel',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-106.png',
    bgImg:
      'https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/basic-features-real-time-marvel-light.png'
  }
]

const BentoGrid = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8 xl:grid-cols-3'>
        {/* Real-time Customization Card */}
        <RealTimeCustomizationCard themes={themes} />

        {/* Color Mastery Card */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 75 }}
          delay={0.15}
          transition={{ duration: 0.45 }}
          className='bg-card relative flex flex-col gap-6 overflow-hidden rounded-xl py-6'
        >
          <div className='space-y-3.5 px-6'>
            <h3 className='text-xl font-semibold'>Color Mastery</h3>
            <p className='text-muted-foreground'>
              Play with background, text, and border hues using a sleek color picker for a unified design.
            </p>
          </div>

          <ColorMastery />
          <div className='from-card pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t to-transparent' />
        </MotionPreset>

        {/* Typography Fine-Tuning Card */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 75 }}
          delay={0.3}
          transition={{ duration: 0.45 }}
          className='bg-card group flex flex-col gap-6 overflow-hidden rounded-xl py-6 max-xl:order-1'
        >
          <div className='space-y-3.5 px-6'>
            <h3 className='text-xl font-semibold'>Typography Fine-Tuning</h3>
            <p className='text-muted-foreground'>
              Perfect your text with adjustable font sizes, weights, and transformations for a polished look.
            </p>
          </div>

          <TypographyFineTuning />
        </MotionPreset>

        {/* Import/Export Themes Card */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 75 }}
          delay={0.45}
          transition={{ duration: 0.45 }}
          className='bg-card flex flex-col gap-6 overflow-hidden rounded-xl py-6 sm:col-span-2'
        >
          <div className='space-y-3.5 px-6'>
            <h3 className='text-xl font-semibold'>Import/Export Themes</h3>
            <p className='text-muted-foreground'>
              Easily import & export your custom Shadcn themes to backup your designs, and move them between projects
              effortlessly.
            </p>
          </div>

          <div className='py-6'>
            <ImportExport />
          </div>
        </MotionPreset>

        {/* Stunning Theme Starters Card */}
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 75 }}
          delay={0.6}
          transition={{ duration: 0.45 }}
          className='bg-card flex flex-col gap-6 overflow-hidden rounded-xl py-6 max-xl:order-1'
        >
          <div className='space-y-3.5 px-6'>
            <h3 className='text-xl font-semibold'>Stunning Theme Starters</h3>
            <p className='text-muted-foreground'>
              Kick off with gorgeous pre-built themes and customize light or dark modes in a breeze.
            </p>
          </div>
          <StunningTheme />
        </MotionPreset>
      </div>
    </section>
  )
}

export default BentoGrid
