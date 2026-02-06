'use client'

import { CopyIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'
import { WordRotate } from '@/components/ui/word-rotate'

const words = ['$ npx shadcn add @ss-themes/claude', 'Installing dependencies...', '✔︎ Installed successfully!']

const ThemeRegistry = () => {
  return (
    <div className='relative z-1 flex flex-col items-center gap-10'>
      <div className='bg-background w-full max-w-70 rounded-md border px-3 text-center'>
        <WordRotate words={words} duration={2000} className='py-1' wordClassName='text-sm' />
      </div>
      <div className='bg-background flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5'>
        <CopyIcon className='size-4.5' />
        <p className='text-sm font-medium'>Copy CLI</p>
      </div>
      <img
        src='https://cdn.shadcnstudio.com/ss-assets/landing-page/theme-generator/pro-features-theme-registry-terminal.png??width=250&format=auto'
        alt='Terminal'
        className='w-full max-w-62.5'
      />
      <div className='border-primary/20 absolute top-7.5 left-1/2 -z-1 h-28.5 w-px border-l'>
        <MotionPreset
          component='span'
          className='to-primary absolute -left-px h-6 w-px -translate-y-full bg-gradient-to-b from-transparent'
          motionProps={{
            initial: {
              top: 0,
              opacity: 1
            },
            animate: {
              top: '120%',
              opacity: 1
            },
            transition: {
              delay: 0.25,
              duration: 2,
              repeat: Infinity
            }
          }}
        />
      </div>
    </div>
  )
}

export default ThemeRegistry
