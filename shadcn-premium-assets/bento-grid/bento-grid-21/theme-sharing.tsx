'use client'

import { useRef } from 'react'

import { CodeXmlIcon, RefreshCwIcon, UserIcon } from 'lucide-react'

import { AnimatedBeam } from '@/components/ui/animated-beam'

import Database from '@/assets/svg/database'
import LaptopMobile from '@/assets/svg/laptop-mobile'

const ThemeSharing = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative z-1 flex w-full max-w-sm items-center justify-between px-4'>
      <span className='bg-card mt-5.5 flex flex-col items-center gap-1.5'>
        <span ref={span1Ref}>
          <Database />
        </span>
        <span className='text-xs'>Database</span>
      </span>

      <div className='absolute left-1/2 flex flex-col items-center gap-13.5'>
        <span ref={span2Ref} className='size-0.5' />
        <div className='bg-card flex size-9 items-center justify-center rounded-full border'>
          <RefreshCwIcon className='size-4 animate-spin [animation-duration:4s]' />
        </div>
        <span ref={span3Ref} className='size-0.5' />
      </div>

      <div className='flex flex-col gap-7.25 py-5.5'>
        <span ref={span4Ref} className='bg-card flex size-11 items-center justify-center rounded-full border'>
          <UserIcon className='size-6' />
        </span>
        <span ref={span5Ref} className='bg-card flex size-11 items-center justify-center rounded-full border'>
          <LaptopMobile className='size-6' />
        </span>
        <span ref={span6Ref} className='bg-card flex size-11 items-center justify-center rounded-full border'>
          <CodeXmlIcon className='size-6' />
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

export default ThemeSharing
