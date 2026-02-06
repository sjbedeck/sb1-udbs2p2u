'use client'

// React Imports
import { useRef } from 'react'

// Third-party Imports
import { SparklesIcon } from 'lucide-react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

const CopyPrompt = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative z-1 flex items-center justify-between px-4'>
      <span ref={span1Ref} className='bg-background flex items-center gap-1.5 rounded-lg border px-2 py-1.5'>
        <SparklesIcon className='size-5' />
        <span>Copy Prompt</span>
      </span>
      <div className='absolute left-3/5 flex flex-col gap-46.5'>
        <span ref={span2Ref} className='size-0.5' />
        <span ref={span3Ref} className='size-0.5' />
      </div>
      <div className='flex flex-col gap-11'>
        <span ref={span4Ref} className='bg-primary flex size-12.5 items-center justify-center rounded-xl'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/v0-icon.png?width=34&format=auto'
            alt='V0 Icon'
            className='w-8.5 dark:invert'
          />
        </span>
        <span ref={span5Ref} className='bg-primary flex size-12.5 items-center justify-center rounded-xl'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/bolt-icon.png?width=34&format=auto'
            alt='Bolt Icon'
            className='w-8.5 dark:invert'
          />
        </span>
        <span ref={span6Ref} className='bg-primary flex size-12.5 items-center justify-center rounded-xl'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/lovable-icon.png?width=34&format=auto'
            alt='Lovable Icon'
            className='w-8.5'
          />
        </span>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span5Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span3Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span4Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={span6Ref}
        className='text-primary -z-1'
        duration={4}
      />
    </div>
  )
}

export default CopyPrompt
