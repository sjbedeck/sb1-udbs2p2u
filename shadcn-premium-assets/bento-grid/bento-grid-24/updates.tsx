'use client'

import { useRef } from 'react'

import { BookOpenIcon } from 'lucide-react'

import { AnimatedBeam } from '@/components/ui/animated-beam'

import LogoVector from '@/assets/svg/logo-vector'

const Updates = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative mx-10 flex justify-between gap-8'>
      <span
        ref={span1Ref}
        className='bg-card relative z-1 flex size-8.5 items-center justify-center rounded-full border'
      >
        <span className='absolute top-0 right-0 flex size-2'>
          <span className='absolute inset-0 inline-flex animate-ping rounded-full bg-sky-400 opacity-75' />
          <span className='inline-flex size-2 rounded-full bg-sky-500' />
        </span>
        <BookOpenIcon className='size-4.5' />
      </span>
      <span ref={span2Ref} className='bg-card z-1 flex size-8.5 items-center justify-center rounded-full border'>
        <LogoVector className='size-7' />
      </span>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span2Ref}
        className='text-primary'
        duration={4}
      />
    </div>
  )
}

export default Updates
