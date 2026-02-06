'use client'

import { useState, useEffect } from 'react'
import type { SVGAttributes } from 'react'

import { TypeIcon } from 'lucide-react'

import Logo from '@/assets/svg/logo'

import { cn } from '@/lib/utils'

const colors = ['destructive', 'amber', 'sky', 'green']

const textColors = {
  destructive: 'text-destructive',
  amber: 'text-amber-600 dark:text-amber-400',
  sky: 'text-sky-600 dark:text-sky-400',
  green: 'text-green-600 dark:text-green-400'
}

const bgColors = {
  destructive: 'bg-destructive',
  amber: 'bg-amber-600 dark:bg-amber-400',
  sky: 'bg-sky-600 dark:bg-sky-400',
  green: 'bg-green-600 dark:bg-green-400'
}

const CopyIcon = (props: SVGAttributes<SVGElement>) => (
  <svg width='0.96875em' height='1em' viewBox='0 0 31 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_dd_21032_109116)'>
      <rect x='3.28906' y='2' width='18.9091' height='18.9091' rx='4.72727' fill='currentColor' />
      <rect
        x='3.683'
        y='2.39394'
        width='18.1212'
        height='18.1212'
        rx='4.33333'
        stroke='var(--background)'
        strokeWidth='0.787879'
      />
    </g>
    <g filter='url(#filter1_dd_21032_109116)'>
      <rect
        x='8.80469'
        y='9.09082'
        width='18.9091'
        height='18.9091'
        rx='4.72727'
        fill='currentColor'
        fillOpacity='0.6'
        shapeRendering='crispEdges'
      />
      <rect
        x='9.19863'
        y='9.48476'
        width='18.1212'
        height='18.1212'
        rx='4.33333'
        stroke='white'
        strokeWidth='0.787879'
        shapeRendering='crispEdges'
      />
    </g>
    <defs>
      <filter
        id='filter0_dd_21032_109116'
        x='0.289062'
        y='0'
        width='24.9091'
        height='24.9092'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology radius='1' operator='erode' in='SourceAlpha' result='effect1_dropShadow_21032_109116' />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_21032_109116' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1.5' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='effect1_dropShadow_21032_109116' result='effect2_dropShadow_21032_109116' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_21032_109116' result='shape' />
      </filter>
      <filter
        id='filter1_dd_21032_109116'
        x='5.80469'
        y='7.09082'
        width='24.9091'
        height='24.9092'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology radius='1' operator='erode' in='SourceAlpha' result='effect1_dropShadow_21032_109116' />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_21032_109116' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1.5' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='effect1_dropShadow_21032_109116' result='effect2_dropShadow_21032_109116' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_21032_109116' result='shape' />
      </filter>
    </defs>
  </svg>
)

const RadiusIcon = (props: SVGAttributes<SVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 16C5 16 5 15.0802 5 14.6958V7.4493C5 7.06492 5.12877 6.69629 5.35798 6.42449C5.58719 6.15269 5.89807 6 6.22222 6H16'
      stroke='currentColor'
      strokeWidth='1.125'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ColorMastery = () => {
  // States
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  // Auto-change color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedColorIndex(prev => (prev + 1) % colors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const selectedColor = colors[selectedColorIndex]

  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex items-center gap-1.5 rounded-md border px-3 py-1 shadow-sm'>
        <span>Primary Color</span>
        {colors.map((color, index) => (
          <div
            key={color}
            className={cn('size-3 rounded-full', bgColors[color as keyof typeof bgColors], {
              'ring-primary/20 ring-2': selectedColorIndex === index
            })}
          />
        ))}
      </div>

      {/* Circular Layout */}
      <div className='flex h-55 items-start justify-center'>
        <div className='relative size-90'>
          {/* Outer circles for visual design */}
          <div className='absolute inset-2 rounded-full border' />
          <div className='absolute inset-11 rounded-full border' />
          <div className='absolute inset-21 rounded-full border' />
          {/* Center Logo */}
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              textColors[selectedColor as keyof typeof textColors]
            )}
          >
            <Logo className='size-23 [&>rect:first-child]:fill-current!' />
          </div>
          {/* Typo Text - Top Left */}
          <div
            className={cn(
              'bg-background absolute top-14 left-2 rounded-md border px-2 py-0.5 shadow-sm max-lg:left-4',
              textColors[selectedColor as keyof typeof textColors]
            )}
          >
            Typo
          </div>
          {/* T Icon - Left */}
          <div
            className={cn(
              'bg-background absolute top-11/20 left-9 rounded-[2px] border p-1',
              textColors[selectedColor as keyof typeof textColors]
            )}
          >
            <TypeIcon className='size-3.5' />
          </div>
          {/* Radius - Top Right */}
          <div
            className={cn(
              'bg-background absolute top-4 right-22 rounded-[2px] border px-0.75 py-px',
              textColors[selectedColor as keyof typeof textColors]
            )}
          >
            <RadiusIcon className='size-5' />
          </div>
          {/* Copy Icon - Right */}
          <div className={cn('absolute top-2/5 right-8', textColors[selectedColor as keyof typeof textColors])}>
            <CopyIcon className='text-[26px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorMastery
