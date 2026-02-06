'use client'

import { useEffect, useRef } from 'react'

import type { CSSProperties } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { annotate } from 'rough-notation'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

const AboutUs = () => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<any>(null)

  useEffect(() => {
    const element = spanRef.current

    if (annotationRef.current) {
      annotationRef.current.remove()
      annotationRef.current = null
    }

    if (element) {
      const timer = setTimeout(() => {
        const annotation = annotate(element, {
          type: 'underline',
          color: 'var(--primary)',
          strokeWidth: 2,
          animationDuration: 700,
          iterations: 2,
          padding: 2,
          multiline: true
        })

        annotation.show()
        annotationRef.current = annotation
      }, 900)

      return () => {
        clearTimeout(timer)

        if (annotationRef.current) {
          annotationRef.current.remove()
          annotationRef.current = null
        }
      }
    }

    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove()
        annotationRef.current = null
      }
    }
  }, [])

  return (
    <section className='from-primary/20 bg-linear-to-b to-transparent py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid items-center sm:grid-cols-2'>
          <div className='group relative w-fit'>
            <MotionPreset fade slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.6 }}>
              <div className='border-primary max-h-141 overflow-hidden rounded-t-full border-5 sm:w-120'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-33.png'
                  alt='Offer Modal 1'
                  className='object-fit h-full w-full transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            </MotionPreset>
            <span className='absolute -bottom-[8%] -left-11 transition-all duration-1 group-hover:animate-spin max-lg:hidden'>
              <MotionPreset zoom fade delay={0.3} transition={{ duration: 0.5 }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='94' height='94' viewBox='0 0 94 94' fill='none'>
                  <path
                    d='M46.3047 23.8076L46.9873 24.4912L47.6943 23.832C60.323 12.0409 79.9782 12.0575 92.5742 23.9219L70.1924 46.3047L69.5088 46.9873L70.168 47.6943C81.9593 60.3232 81.942 79.9782 70.0771 92.5742L47.6953 70.1924L47.0127 69.5088L46.3057 70.168C33.6767 81.9594 14.0208 81.9425 1.4248 70.0771L23.8076 47.6953L24.4912 47.0127L23.832 46.3057C12.0407 33.6768 12.057 14.0208 23.9219 1.4248L46.3047 23.8076Z'
                    fill='white'
                    stroke='var(--primary)'
                    strokeWidth='2'
                  />
                </svg>
              </MotionPreset>
            </span>
          </div>

          <MotionPreset className='z-1' delay={0.4} fade slide={{ direction: 'right' }} transition={{ duration: 0.4 }}>
            <Card className='border-none max-sm:rounded-t-none md:-ml-[40%] lg:py-12'>
              <CardContent className='space-y-4 lg:px-12'>
                <h2 className='relative text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  About <span ref={spanRef}>Myself</span>
                </h2>
                <p className='text-muted-foreground text-base md:text-xl'>
                  Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have
                  faced challenges, celebrated victories, and woven a narrative of growth and success.
                </p>
                <Button
                  size='lg'
                  className='group animate-heartbeat rounded-lg text-base has-[>svg]:px-6'
                  style={{ '--heartbeat-color': 'var(--primary)' } as CSSProperties}
                  asChild
                >
                  <a href='#'>
                    Read more
                    <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
