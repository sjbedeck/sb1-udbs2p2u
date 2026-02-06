'use client'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'

import { Card } from '@/components/ui/card'

import { cn } from '@/lib/utils'

type ColorContrastItem = {
  id: string
  title: string
  backgroundColor: string
  backgroundCode: string
  foregroundColor: string
  foregroundCode: string
  ratio: number
}

const initialColorContrasts: ColorContrastItem[] = [
  {
    id: '1',
    title: 'Primary',
    backgroundColor: 'bg-primary',
    backgroundCode: 'oklch(0.20 0 0)',
    foregroundColor: 'text-primary-foreground',
    foregroundCode: 'oklch(0.99 0 0)',
    ratio: 17.18
  },
  {
    id: '2',
    title: 'Destructive',
    backgroundColor: 'bg-destructive',
    backgroundCode: 'oklch(0.58 0.24 28.48)',
    foregroundColor: 'text-white',
    foregroundCode: 'oklch(1.00 0 0)',
    ratio: 4.77
  },
  {
    id: '3',
    title: 'Secondary',
    backgroundColor: 'bg-secondary',
    backgroundCode: 'oklch(0.97 0 0)',
    foregroundColor: 'text-secondary-foreground',
    foregroundCode: 'oklch(0.20 0 0)',
    ratio: 16.44
  }
]

const ColorContrast = () => {
  const [colorContrasts, setColorContrasts] = useState<ColorContrastItem[]>(initialColorContrasts)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorContrasts(prevCards => {
        const newArray = [...prevCards]

        newArray.push(newArray.shift()!)

        return newArray
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative mx-auto flex h-64 w-full max-w-lg items-end'>
      {colorContrasts.map((contrast, index) => {
        const passesWCAG = contrast.ratio >= 4.78

        return (
          <motion.div
            key={contrast.id}
            className='absolute inset-x-3 h-60'
            style={{
              transformOrigin: 'top center'
            }}
            animate={{
              bottom: index * 16,
              scale: 1 - index * 0.1,
              zIndex: colorContrasts.length - index
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: index * 0.05
            }}
          >
            <Card className='gap-0 border-0 p-0 shadow-none'>
              <div className='overflow-hidden rounded-lg border'>
                <div className='flex items-center justify-between border-b px-4 py-2'>
                  <h3 className='text-sm font-medium'>{contrast.title}</h3>
                  <div className={`flex items-center gap-1 ${passesWCAG ? 'text-green-600' : 'text-red-500'}`}>
                    <span className='text-sm font-medium'>{contrast.ratio.toFixed(2)}</span>
                    {passesWCAG ? <span className='text-green-600'>✓</span> : <span className='text-red-500'>△</span>}
                  </div>
                </div>

                <div className='grid grid-cols-3'>
                  {/* Left side: Sample text preview */}
                  <div className={cn('flex grow items-center justify-center', contrast.backgroundColor)}>
                    <div className='flex flex-col items-center justify-center'>
                      <div className={cn('text-3xl font-semibold', contrast.foregroundColor)}>Aa</div>
                      <div className={cn('mt-1 text-xs', contrast.foregroundColor)}>Sample Text</div>
                    </div>
                  </div>

                  {/* Right side: Color info */}
                  <div className='col-span-2 border-l'>
                    {/* Background color */}
                    <div className='border-b p-3'>
                      <div className='text-muted-foreground mb-2 text-xs font-medium uppercase'>Background</div>
                      <div className='mb-2 flex items-center gap-2'>
                        <div className={cn('size-6 rounded border', contrast.backgroundColor)}></div>
                        <div className='grow truncate text-xs font-medium'>Color</div>
                      </div>
                      <div className='bg-muted/30 overflow-visible rounded p-1 font-mono text-xs whitespace-nowrap'>
                        {contrast.backgroundCode}
                      </div>
                    </div>

                    {/* Foreground color */}
                    <div className='p-3'>
                      <div className='text-muted-foreground mb-2 text-xs font-medium uppercase'>Foreground</div>
                      <div className='mb-2 flex items-center gap-2'>
                        <div className={cn('size-6 rounded border bg-current', contrast.foregroundColor)}></div>
                        <div className='grow truncate text-xs font-medium'>Color</div>
                      </div>
                      <div className='bg-muted/30 overflow-visible rounded p-1 font-mono text-xs whitespace-nowrap'>
                        {contrast.foregroundCode}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )
      })}
      <div className='from-card pointer-events-none absolute inset-x-0 -bottom-px z-10 h-6 bg-gradient-to-t to-transparent' />
    </div>
  )
}

export default ColorContrast
