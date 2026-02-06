'use client'

import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

const HeroSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = imageContainerRef.current

    if (!container) return

    // Check if screen is large enough for 3D effects (1024px+)
    const checkScreenSize = () => window.innerWidth >= 1024

    /**
     * Handle mouse movement for 3D tilt effect
     * Calculates rotation based on mouse position relative to container center
     */
    const handleMouseMove = (e: MouseEvent) => {
      if (!checkScreenSize()) return

      const rect = container.getBoundingClientRect()

      // Calculate rotation angles (reduced multiplier for subtle effect)
      const x = (e.clientX - rect.left - rect.width / 1.5) * 0.0075
      const y = (e.clientY - rect.top - rect.height / 1.5) * 0.0075

      // Apply 3D transform with perspective and slight scale
      container.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.01, 1.01, 1.01)`
      container.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)'
    }

    // Initialize hover state with smooth transition
    const handleMouseEnter = (e: MouseEvent) => {
      if (!checkScreenSize()) return

      container.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease'
      handleMouseMove(e)
    }

    // Reset to neutral position when mouse leaves
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      container.style.boxShadow = 'none'
      container.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease'
    }

    // Add event listeners for 3D tilt interaction
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className='grow py-8'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-5 self-center text-center'>
          <MotionPreset
            component='h1'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.8 }}
            className='text-3xl leading-[1.29167] font-bold text-white sm:text-4xl lg:text-5xl'
          >
            Create, Schedule & Shine on Social Media All in One Place
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.8 }}
            className='max-w-xl text-white/80'
          >
            Design scroll-stopping content, plan ahead with smart scheduling, and grow your brand effortlessly across
            all platforms.
          </MotionPreset>

          <MotionPreset
            component='div'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.8 }}
            className='flex h-fit w-full max-w-139 items-center justify-between gap-2.5 rounded-full bg-white py-1.5 ps-3.5 pe-1.5'
          >
            <Label className='sr-only' htmlFor='prompt-space'>
              john.cena22@gmail.com
            </Label>
            <Input
              type='email'
              placeholder='john.cena22@gmail.com'
              id='prompt-space'
              className='h-6 border-0 bg-transparent p-0 text-black shadow-none placeholder:text-black/50 focus:border-0 focus:ring-0 focus-visible:ring-0 dark:bg-transparent'
            />

            <Button
              type='submit'
              className={cn(
                'group animate-rainbow focus-visible:ring-ring/50 relative inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-transparent bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',

                // before styles
                'before:animate-rainbow before:absolute before:bottom-[-20%] before:left-0 before:z-0 before:h-1/5 before:w-full before:bg-[linear-gradient(90deg,#ff4242,#a1ff42,#42a1ff,#42d0ff,#a142ff)] before:[filter:blur(calc(0.625*1rem))]',

                // bg styles
                'bg-[linear-gradient(black,black),linear-gradient(black_30%,rgba(0,0,0,0)),linear-gradient(90deg,#ff4242,#a1ff42,#42a1ff,#42d0ff,#a142ff)]'
              )}
            >
              Let&apos;s Go
            </Button>
          </MotionPreset>
        </div>

        {/* <MotionPreset
          component='div'
          zoom
          fade
          blur
          delay={0.7}
          transition={{ duration: 0.8 }}
          className='relative flex h-full flex-col items-center justify-center'
        >
          <div className='absolute top-1/2 left-1/2 h-61 w-full max-w-230 -translate-1/2 rounded-[50%] bg-white/20 blur-3xl dark:bg-white/40'></div>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-52.png'
            alt='socialmedia'
            className='z-1 w-full max-w-230 object-contain transition-transform duration-500 hover:scale-106'
          />
        </MotionPreset> */}

        <MotionPreset
          ref={imageContainerRef}
          fade
          zoom={{ initialScale: 0.75 }}
          delay={0.8}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex h-full flex-col items-center justify-center'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-52.png'
            alt='socialmedia'
            className='z-1 w-full max-w-230 object-contain'
          />
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
