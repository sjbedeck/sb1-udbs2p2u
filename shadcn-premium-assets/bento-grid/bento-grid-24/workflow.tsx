'use client'

// React Imports
import { useRef } from 'react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

// SVG Imports
import Logo from '@/assets/svg/logo'

const Workflow = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLSpanElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='absolute z-1 flex w-full max-w-87.5 flex-col justify-center gap-9.5'>
      <div className='mx-9.5 flex items-center justify-between gap-6'>
        <span ref={span1Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/speed-up-workflow-icon-1.png?width=28&format=auto'
            alt='Figma logo'
            className='size-7'
          />
        </span>
        <span ref={span4Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/speed-up-workflow-icon-4.png?width=28&format=auto'
            alt='Figma logo'
            className='size-7'
          />
        </span>
      </div>
      <div className='flex items-center justify-between gap-6'>
        <span ref={span2Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/speed-up-workflow-icon-2.png?width=28&format=auto'
            alt='Figma logo'
            className='size-7'
          />
        </span>
        <span ref={logoRef}>
          <Logo className='size-16' />
        </span>
        <span ref={span5Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png?width=20&format=auto'
            alt='Figma logo'
            className='size-5'
          />
        </span>
      </div>
      <div className='mx-9.5 flex items-center justify-between gap-6'>
        <span ref={span3Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/speed-up-workflow-icon-3.png?width=28&format=auto'
            alt='Figma logo'
            className='size-7'
          />
        </span>
        <span ref={span6Ref} className='bg-card flex size-8 items-center justify-center rounded-full border'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/landing-page/figma/speed-up-workflow-icon-6.png?width=28&format=auto'
            alt='Figma logo'
            className='size-7'
          />
        </span>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={-25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={25}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span5Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span6Ref}
        toRef={logoRef}
        className='text-primary -z-1'
        duration={3}
        curvature={-25}
        reverse
      />
    </div>
  )
}

export default Workflow
