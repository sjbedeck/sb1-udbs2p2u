'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'

import {
  Button as AriaButton,
  Group as AriaGroup,
  Input as AriaInput,
  NumberField as AriaNumberField
} from 'react-aria-components'

import { Button } from '@/components/ui/button'

import { MotionPreset } from '@/components/ui/motion-preset'

type Product = {
  title: string
  img: string
  description: string
  price: number
  buyNow: string
}

type Ingredient = {
  title: string
  img: string
  description: string
}

const HeroSection = ({ products, ingredients }: { products: Product[]; ingredients: Ingredient[] }) => {
  return (
    <section className='flex-1 grow'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8'>
        <div>
          <div className='grid items-end lg:grid-cols-3 lg:gap-3'>
            <MotionPreset
              component='h1'
              fade
              slide
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='relative text-8xl leading-[1.15] font-black text-balance max-md:text-4xl lg:col-span-2'
            >
              CRUNCH INTO FLAVOR BLISS
            </MotionPreset>

            <MotionPreset
              component='p'
              fade
              slide={{ direction: 'right', offset: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-muted-foreground text-balance'
            >
              Savor the perfect blend of crunch, taste, and bold seasoning with every bite. Crafted to delight snack
              lovers of all kinds, our grilled potato chips are your anytime, anywhere treat.
            </MotionPreset>
          </div>
          <MotionPreset
            component='div'
            fade
            slide
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='mt-4.5 flex w-fit items-center gap-2 max-lg:my-4.5'
          >
            <AriaNumberField defaultValue={1} minValue={1} aria-label='Quantity'>
              <AriaGroup className='border-primary data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive bg-card relative inline-flex h-9.5 min-w-0 items-center overflow-hidden rounded-md border text-sm whitespace-nowrap transition-[color] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:ring-[3px]'>
                <AriaButton
                  slot='decrement'
                  className='bg-primary/10 hover:bg-primary/20 ms-3 flex size-5 items-center justify-center rounded transition-[color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                >
                  <MinusIcon className='size-3' />
                  <span className='sr-only'>Decrement</span>
                </AriaButton>
                <AriaInput className='selection:bg-primary selection:text-primary-foreground w-15 px-3 py-2 text-center tabular-nums outline-none' />
                <AriaButton
                  slot='increment'
                  className='bg-primary/10 hover:bg-primary/20 me-3 flex size-5 items-center justify-center rounded transition-[color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                >
                  <PlusIcon className='size-3' />
                  <span className='sr-only'>Increment</span>
                </AriaButton>
              </AriaGroup>
            </AriaNumberField>
            <Button asChild size='lg'>
              <a
                href='#'
                className='relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              >
                Add to Cart
              </a>
            </Button>
          </MotionPreset>

          <div className='relative'>
            <div className='flex flex-col items-center justify-center'>
              <div className='-mb-25 shrink -rotate-[4.8deg] transition-transform duration-500 hover:scale-105 hover:drop-shadow-xl'>
                <MotionPreset fade zoom transition={{ duration: 0.8, ease: 'easeOut' }}>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-33.png'
                    alt='Lays Potato Chips'
                    className='w-full max-w-93 object-contain'
                  />
                </MotionPreset>
              </div>

              <div className='absolute top-0 left-[70%] space-y-2.5 p-2.5 *:flex *:items-center *:gap-4 *:px-4 max-lg:hidden'>
                {ingredients.map((ingredient, index) => (
                  <MotionPreset
                    key={`${ingredient.title}-${index}`}
                    fade
                    slide={{ direction: 'right', offset: 50 }}
                    delay={0.2 + index * 0.15}
                    blur
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <div className='bg-primary flex size-15 shrink-0 items-center justify-center rounded-full'>
                      <img src={ingredient.img} alt={ingredient.title} className='size-10.5' />
                    </div>
                    <div className='max-w-62'>
                      <h4 className='text-lg font-semibold'>{ingredient.title}</h4>
                      <p className='text-muted-foreground text-sm'>{ingredient.description}</p>
                    </div>
                  </MotionPreset>
                ))}
              </div>
            </div>
          </div>
        </div>
        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 50 }}
          delay={0.6}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='bg-primary relative grid w-full gap-8 rounded-xl p-10 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((items, index) => (
              <MotionPreset
                key={`${items.title}-${index}`}
                fade
                slide
                delay={0.9 + index * 0.15}
                blur
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className='flex w-full gap-2.75'>
                  <img src={items.img} alt={items.title} className='w-full max-w-26' />
                  <div className='bg-background flex w-full flex-col justify-between gap-3.5 rounded-xl p-3'>
                    <div>
                      <div className='flex gap-x-6 gap-y-1'>
                        <h4 className='max-w-50 grow text-lg font-semibold'>{items.title}</h4>
                        <span className='text-xl font-semibold'>${items.price}</span>
                      </div>
                      <p className='text-muted-foreground'>{items.description}</p>
                    </div>
                    <Button asChild className='h-6 rounded-full px-2 text-xs'>
                      <a href={items.buyNow} className='w-fit'>
                        Buy Now
                      </a>
                    </Button>
                  </div>
                </div>
              </MotionPreset>
            ))}
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
