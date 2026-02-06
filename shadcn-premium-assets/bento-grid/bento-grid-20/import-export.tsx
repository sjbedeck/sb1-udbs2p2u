'use client'

import { useRef } from 'react'

import { FileCodeIcon, ImportIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/ui/border-beam'
import { AnimatedBeam } from '@/components/ui/animated-beam'

import LogoVector from '@/assets/svg/logo-vector'

const ImportExport = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const btn4Ref = useRef<HTMLButtonElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)

  return (
    <div
      ref={containerRef}
      className='relative flex items-center justify-between gap-12 px-9 max-md:flex-col md:gap-3 lg:gap-8'
    >
      <div className='flex items-center max-md:w-full max-md:flex-col max-md:gap-6'>
        <div className='flex max-md:w-full max-md:justify-between md:flex-col md:gap-30'>
          <div
            ref={div1Ref}
            className='bg-background flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 max-md:w-full max-md:max-w-33.5'
          >
            <FileCodeIcon className='size-5 shrink-0' />
            <span className='font-medium'>Project</span>
          </div>
          <div
            ref={div2Ref}
            className='bg-background flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 max-md:w-full max-md:max-w-33.5'
          >
            <FileCodeIcon className='size-5 shrink-0' />
            <span className='font-medium'>Figma File</span>
          </div>
        </div>
        <div className='flex items-center max-md:w-full max-md:justify-between md:flex-col md:gap-14.75'>
          <span ref={span1Ref} className='size-0.5 max-md:ml-16.5' />
          <div ref={div3Ref} className='bg-background flex items-center gap-1.25 rounded-lg border px-2 py-1.5'>
            <ImportIcon className='size-5 shrink-0' />
            <span className='font-medium'>Import</span>
          </div>
          <span ref={span2Ref} className='size-0.5 max-md:mr-16.5' />
        </div>
      </div>

      <Button
        ref={btn4Ref}
        className='bg-primary text-primary-foreground relative flex items-center gap-1.25 rounded-lg px-2 py-1.5 text-base'
      >
        <LogoVector className='size-6' />
        <span className='font-medium [&+div]:inset-px'>Theme Generator</span>
        <BorderBeam colorFrom='var(--primary-foreground)' colorTo='var(--primary-foreground)' size={35} />
      </Button>

      <div className='flex items-center max-md:w-full max-md:flex-col max-md:gap-6'>
        <div className='flex items-center max-md:w-full max-md:justify-between md:flex-col md:gap-14.75'>
          <span ref={span3Ref} className='size-0.5 max-md:ml-16.5' />
          <div ref={div5Ref} className='bg-background flex items-center gap-1.25 rounded-lg border px-2 py-1.5'>
            <ImportIcon className='size-5 shrink-0 rotate-180' />
            <span className='font-medium'>Export</span>
          </div>
          <span ref={span4Ref} className='size-0.5 max-md:mr-16.5' />
        </div>
        <div className='flex max-md:w-full max-md:justify-between md:flex-col md:gap-30'>
          <div
            ref={div6Ref}
            className='bg-background flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 max-md:w-full max-md:max-w-33.5'
          >
            <FileCodeIcon className='size-5 shrink-0' />
            <span className='font-medium'>Project</span>
          </div>
          <div
            ref={div7Ref}
            className='bg-background flex items-center justify-center gap-1.25 rounded-lg border px-2 py-1.5 max-md:w-full max-md:max-w-33.5'
          >
            <FileCodeIcon className='size-5 shrink-0' />
            <span className='font-medium'>Figma File</span>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={span1Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={span2Ref}
        className='text-primary -z-1 max-md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={span2Ref}
        reverse
        className='text-primary -z-1 md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={div3Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={div3Ref}
        className='text-primary -z-1 max-md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span2Ref}
        toRef={div3Ref}
        reverse
        className='text-primary -z-1 md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={btn4Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={btn4Ref}
        toRef={div5Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={span3Ref}
        className='text-primary -z-1 max-md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={span3Ref}
        reverse
        className='text-primary -z-1 md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={span4Ref}
        className='text-primary -z-1'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={div6Ref}
        className='text-primary -z-1 max-md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span3Ref}
        toRef={div6Ref}
        reverse
        className='text-primary -z-1 md:hidden'
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span4Ref}
        toRef={div7Ref}
        className='text-primary -z-1'
        duration={4}
      />
    </div>
  )
}

export default ImportExport
