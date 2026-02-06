'use client'

// React Imports
import { useRef } from 'react'

// Third-party Imports
import { motion } from 'motion/react'
import { CodeXmlIcon, FigmaIcon } from 'lucide-react'

// Component Imports
import { AnimatedBeam } from '@/components/ui/animated-beam'

const FigmaToCode = () => {
  // Vars
  const containerRef = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)

  return (
    <div ref={containerRef} className='relative z-1 flex justify-between gap-22'>
      <div className='relative rounded-r-md border-y border-r'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/ai-tools-left-image-light.png?height=220&format=auto'
          alt='Figma Image'
          className='w-full rounded-r-md dark:hidden'
        />
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/ai-tools-left-image-dark.png?height=220&format=auto'
          alt='Figma Image'
          className='hidden w-full rounded-r-md dark:inline-block'
        />
        <span
          ref={span1Ref}
          className='text-card-foreground bg-card absolute top-1/2 right-0 flex size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border'
        >
          <FigmaIcon className='size-6' />
          <motion.svg
            height='44'
            width='44'
            xmlns='http://www.w3.org/2000/svg'
            initial='hidden'
            animate='visible'
            className='absolute -top-px -rotate-90'
          >
            <motion.circle
              r='21.5'
              cx='22'
              cy='22'
              stroke='var(--primary)'
              strokeWidth='1'
              fill='none'
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: [0, 1, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    times: [0, 1, 1]
                  }
                }
              }}
            />
          </motion.svg>
        </span>
      </div>
      <div className='relative rounded-l-md border-y border-s'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/ai-tools-right-image.png?height=220&format=auto'
          alt='Code Image'
          className='w-full rounded-l-md'
        />
        <span
          ref={span2Ref}
          className='text-card-foreground bg-card absolute top-1/2 left-0 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border'
        >
          <CodeXmlIcon className='size-6' />
          <motion.svg
            height='44'
            width='44'
            xmlns='http://www.w3.org/2000/svg'
            initial='hidden'
            animate='visible'
            className='absolute -top-px -rotate-90'
          >
            <motion.circle
              r='21.5'
              cx='22'
              cy='22'
              stroke='var(--primary)'
              strokeWidth='1'
              fill='none'
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: [0, 1, 0],
                  transition: {
                    delay: 1.75,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    times: [0, 1, 1]
                  }
                }
              }}
            />
          </motion.svg>
        </span>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={span1Ref}
        toRef={span2Ref}
        className='text-primary -z-1'
        duration={4}
        delay={0.25}
      />
    </div>
  )
}

export default FigmaToCode
