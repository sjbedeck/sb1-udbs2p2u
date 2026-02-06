'use client'

// React Imports
import { useRef } from 'react'

// Third-party Imports
import { PlusIcon } from 'lucide-react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

// SVG Imports
import Logo from '@/assets/svg/logo'

const MCPServer = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)
  const span7Ref = useRef<HTMLSpanElement>(null)
  const span8Ref = useRef<HTMLSpanElement>(null)
  const span9Ref = useRef<HTMLSpanElement>(null)
  const span10Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative z-1 flex shrink-0 flex-col items-center gap-26.5'>
      <span ref={span1Ref} className='bg-card flex items-center gap-1 rounded-full border p-2.5'>
        <span className='bg-card flex size-11.5 items-center justify-center rounded-full border'>
          <Logo className='size-8' />
        </span>
        <PlusIcon className='size-4' />
        <span className='bg-card flex size-11.5 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/mcp-icon.png?width=32&format=auto'
            alt='MCP Icon'
            className='size-8 dark:invert'
          />
        </span>
      </span>
      <div className='flex items-center gap-7.5'>
        <span
          ref={span7Ref}
          className='bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/cline-icon.png?width=34&format=auto'
            alt='Cline Icon'
            className='size-8.5 dark:invert'
          />
        </span>
        <span
          ref={span8Ref}
          className='bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/vs-code-icon.png?width=34&format=auto'
            alt='VS Code Icon'
            className='size-8.5'
          />
        </span>
        <span
          ref={span9Ref}
          className='bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/cursor-icon.png?width=34&format=auto'
            alt='Cursor Icon'
            className='size-8.5 dark:invert'
          />
        </span>
        <span
          ref={span10Ref}
          className='bg-card flex size-14 items-center justify-center overflow-hidden rounded-full border'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/windsurf-icon.png?width=34&format=auto'
            alt='Windsurf Icon'
            className='size-8.5 dark:invert'
          />
        </span>
      </div>
      <span ref={span2Ref} className='absolute top-1/2 left-1/2 size-0.5 -translate-x-px translate-y-1.25' />
      <span ref={span3Ref} className='absolute top-1/2 left-1/2 size-0.5 -translate-x-32.5 translate-y-1.25' />
      <span ref={span4Ref} className='absolute top-1/2 left-1/2 size-0.5 -translate-x-11 translate-y-1.25' />
      <span ref={span5Ref} className='absolute top-1/2 right-1/2 size-0.5 translate-x-11 translate-y-1.25' />
      <span ref={span6Ref} className='absolute top-1/2 right-1/2 size-0.5 translate-x-32.5 translate-y-1.25' />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span2Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={span2Ref}
        className='text-primary -z-1'
        duration={4}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={span6Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={span7Ref}
        className='text-primary -z-1'
        duration={4}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={span8Ref}
        className='text-primary -z-1'
        duration={4}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span5Ref}
        toRef={span9Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span6Ref}
        toRef={span10Ref}
        className='text-primary -z-1'
        duration={4}
      />
    </div>
  )
}

export default MCPServer
