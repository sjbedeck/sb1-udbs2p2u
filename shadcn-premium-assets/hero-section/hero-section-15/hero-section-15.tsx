'use client'

import { useState, type ReactNode } from 'react'

import HeroBackground from '@/assets/svg/hero-background'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { MotionPreset } from '@/components/ui/motion-preset'

export type MenuItem = {
  heading: string
  description: string
  image: string
  buyNow: string
  value: string
  ingredients: ReactNode[]
}

const HeroSection = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [selectedValue, setSelectedValue] = useState('3')

  return (
    <section className='flex flex-1 flex-col justify-between overflow-x-hidden py-4 sm:py-6 lg:py-8'>
      {/* Hero Content */}
      <div className='mx-auto flex h-full max-w-7xl flex-col justify-between px-4 sm:px-6 md:min-h-130 lg:px-8'>
        <MotionPreset
          fade
          transition={{ duration: 1 }}
          className='text-primary absolute -top-23 right-[2%] -z-1 max-xl:hidden min-2xl:right-[14%]'
        >
          <HeroBackground />
        </MotionPreset>
        {menuItems.map((item, index) => (
          <div
            key={`${item.heading}-${index}`}
            className={`grid h-full grid-cols-1 gap-5 max-xl:justify-items-center xl:grid-cols-3 ${
              selectedValue === item.value ? '' : 'pointer-events-none absolute'
            }`}
          >
            {selectedValue === item.value && (
              <>
                <div className='flex flex-col gap-5 xl:col-span-2'>
                  <MotionPreset
                    key={`heading-${item.value}`}
                    slide={{ direction: 'down', offset: 30 }}
                    fade
                    transition={{ duration: 0.7 }}
                    className='overflow-hidden'
                  >
                    <h1 className='text-6xl leading-[1.15] font-bold text-balance max-md:text-3xl'>{item.heading}</h1>
                  </MotionPreset>

                  <MotionPreset
                    key={`description-${item.value}`}
                    slide={{ direction: 'down', offset: 30 }}
                    fade
                    delay={0.2}
                    transition={{ duration: 0.7 }}
                    className='max-w-2xl overflow-hidden'
                  >
                    <p className='text-muted-foreground'>{item.description}</p>
                  </MotionPreset>

                  <div>
                    <MotionPreset
                      key={`ingredients-${item.value}`}
                      slide={{ direction: 'down', offset: 30 }}
                      fade
                      delay={0.3}
                      transition={{ duration: 0.7 }}
                      className='overflow-hidden'
                    >
                      <p className='text-muted-foreground mb-1.5 font-medium'>Ingredients</p>
                      <div className='flex items-center gap-1'>
                        {item.ingredients.slice(0, 4).map((ingredient, idx) => (
                          <span
                            key={`ingredient-${idx}`}
                            className='text-primary flex size-5.5 items-center justify-center rounded-md border-[0.3px]'
                          >
                            {ingredient}
                          </span>
                        ))}
                        {item.ingredients.length > 4 && (
                          <span className='bg-primary text-primary-foreground flex size-5.5 items-center justify-center rounded-md text-xs'>
                            +{item.ingredients.length - 4}
                          </span>
                        )}
                      </div>
                    </MotionPreset>
                  </div>

                  <MotionPreset
                    key={`button-${item.value}`}
                    slide={{ direction: 'down', offset: 30 }}
                    fade
                    transition={{ duration: 0.7 }}
                    delay={0.3}
                    className='overflow-hidden'
                  >
                    <Button
                      asChild
                      size='lg'
                      className='relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
                    >
                      <a href={item.buyNow}>Buy Now</a>
                    </Button>
                  </MotionPreset>
                </div>

                <MotionPreset
                  key={`image-${item.value}`}
                  fade
                  zoom={{ initialScale: 0.8 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={item.image} className='w-113 object-cover' alt='Fries & Burger' />
                </MotionPreset>
              </>
            )}
          </div>
        ))}
        <MotionPreset
          slide={{ direction: 'down', offset: 30 }}
          fade
          transition={{ duration: 0.6 }}
          delay={0.6}
          className='flex max-xl:justify-center'
        >
          <RadioGroup
            className='grid w-fit grid-cols-2 items-center gap-2.5 sm:grid-cols-3 md:grid-cols-6'
            value={selectedValue}
            onValueChange={setSelectedValue}
          >
            {menuItems.map((item, index) => (
              <div
                key={`${item.heading}-${index}`}
                className='group border-input has-data-[state=checked]:border-primary/50 hover:border-primary relative flex shrink-0 flex-col items-center gap-3 rounded-md border p-4 shadow-xs transition-all duration-400 outline-none'
              >
                <RadioGroupItem
                  value={item.value}
                  id={`${item.heading}-1`}
                  className='sr-only'
                  aria-describedby={`${item.heading}-1-description`}
                />
                <Label
                  htmlFor={`${item.heading}-1`}
                  className='text-foreground flex cursor-pointer flex-col items-start after:absolute after:inset-0'
                >
                  <img
                    src={item.image}
                    alt={item.value}
                    className='w-20 object-cover transition-all duration-300 group-hover:scale-110'
                  />
                </Label>
              </div>
            ))}
          </RadioGroup>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
