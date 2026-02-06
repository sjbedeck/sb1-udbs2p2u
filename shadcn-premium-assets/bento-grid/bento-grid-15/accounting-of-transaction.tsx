'use client'

import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Progress } from '@/components/ui/progress'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

export type transaction = {
  title: string
  amount: number
  logo: string
  progressValue: number
}

const AccountingOfTransaction = ({ transactions }: { transactions: transaction[] }) => {
  return (
    <Card className='bg-muted group/palette h-full gap-12 border-0 shadow-none lg:col-span-2'>
      <MotionPreset
        fade
        blur
        slide={{ direction: 'down', offset: 15 }}
        delay={0.75}
        transition={{ duration: 0.5 }}
        className='relative flex h-75.5 flex-col justify-center gap-7.5 overflow-hidden py-6'
      >
        {/* Row 1 */}
        <Marquee
          gap={2.75}
          duration={25}
          className='py-0 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
        >
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-70.png'
              alt='Airbnb'
              className='w-7.5'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-65.png'
              alt='amazon'
              className='w-7.5 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-65-dark.png'
              alt='amazon'
              className='hidden w-7.5 dark:block'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-66.png'
              alt='Netflix'
              className='w-7.5'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-67.png'
              alt='Prime Video'
              className='w-7.5'
            />
          </div>
        </Marquee>
        {/* Row 2 */}
        <Marquee
          gap={2.75}
          duration={30}
          reverse
          className='py-0 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
        >
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-68.png'
              alt='McDonalds'
              className='w-7.5'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-69.png'
              alt='Starbucks'
              className='w-7.5'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-70.png'
              alt='Subway'
              className='w-7.5'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-71.png'
              alt='Nike'
              className='w-7.5 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-71-dark.png'
              alt='Nike'
              className='hidden w-7.5 dark:block'
            />
          </div>
        </Marquee>
        {/* Row 3 */}
        <Marquee
          gap={2.75}
          duration={25}
          className='py-0 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
        >
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-72.png'
              alt='H&M'
              className='w-7.5'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-73.png'
              alt='Adidas'
              className='w-7.5 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-73-dark.png'
              alt='Adidas'
              className='hidden w-7.5 dark:block'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-74.png'
              alt='Apple'
              className='w-7.5 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-74-dark.png'
              alt='Apple'
              className='hidden w-7.5 dark:block'
            />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-75.png'
              alt='Shell'
              className='w-7.5'
            />
          </div>
        </Marquee>

        <Carousel
          opts={{
            align: 'center',
            loop: true,
            slidesToScroll: 1
          }}
          plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
          orientation='vertical'
          className='absolute left-1/2 w-51 -translate-x-1/2'
        >
          <CarouselContent className='-mt-2.5 max-h-101'>
            {transactions.map((transaction, index) => (
              <CarouselItem key={index} className='cursor-grab pt-2.5 select-none active:cursor-grabbing'>
                <div className='bg-card text-foreground flex h-35 flex-col justify-between rounded-xl border p-3 shadow-sm'>
                  <img src={transaction.logo} alt='master' className='h-4 self-end' />
                  <div>
                    <h4 className='font-medium'>{transaction.title}</h4>
                    <div className='flex items-center gap-3'>
                      <span className='text-muted-foreground shrink-0'>${transaction.amount}</span>
                      <Progress value={transaction.progressValue} />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_10%,var(--muted)_90%)]' />
      </MotionPreset>

      <CardContent className='flex flex-col gap-4 md:items-center'>
        <MotionPreset
          component='h3'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.9}
          transition={{ duration: 0.5 }}
          className='text-2xl font-semibold md:text-center'
        >
          Accounting of every transaction
        </MotionPreset>
        <MotionPreset
          component='p'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={1.05}
          transition={{ duration: 0.5 }}
          className='text-muted-foreground text-lg md:text-center'
        >
          Stay informed with real-time balance updates and complete history, so you always know exactly where your money
          stands.
        </MotionPreset>
      </CardContent>
    </Card>
  )
}

export default AccountingOfTransaction
