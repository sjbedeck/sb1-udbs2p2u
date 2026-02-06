import { PaletteIcon } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Magnetic } from '@/components/ui/magnet-effect'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'
import { RainbowButton } from '@/components/ui/rainbow-button'

import CardStack from '@/components/shadcn-studio/blocks/bento-grid-08/card-stack'
import PerformanceCard from '@/components/shadcn-studio/blocks/chart-performance'
import VehiclesConditionCard from '@/components/shadcn-studio/blocks/widget-vehicles-condition'
import GeneralFinanceReviewsCard from '@/components/shadcn-studio/blocks/widget-general-finance-reviews'
import type { VehicleCondition } from '@/components/shadcn-studio/blocks/widget-vehicles-condition'
import type { Stats } from '@/components/shadcn-studio/blocks/widget-general-finance-reviews'

type BentoGridProps = {
  vehicleConditionData: VehicleCondition[]
  stats: Stats[]
}

const BentoGrid = ({ vehicleConditionData, stats }: BentoGridProps) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8'>
        {/* Card stack */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} transition={{ duration: 0.45 }}>
          <Card className='border-0 shadow-none'>
            <CardHeader className='gap-4'>
              <CardTitle className='text-2xl'>Component-first development.</CardTitle>
              <CardDescription className='text-lg'>
                Build faster with complete block-level components. No boilerplate, just drop-in sections that scale.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='bg-muted relative h-75 overflow-hidden rounded-xl border'>
                <CardStack
                  cards={[
                    {
                      id: '1',
                      card: (
                        <PerformanceCard className='w-full max-w-112.5 max-sm:[&_[data-slot="tabs-trigger"]]:px-1!' />
                      )
                    },
                    {
                      id: '2',
                      card: (
                        <VehiclesConditionCard
                          title='Vehicles Condition'
                          vehicleConditionData={vehicleConditionData}
                          className='w-full max-w-112.5'
                        />
                      )
                    },
                    {
                      id: '3',
                      card: (
                        <GeneralFinanceReviewsCard
                          title='General Finance Reviews'
                          amount='$50,232'
                          period='Last 6 months Statics'
                          progressLabel='Current Activity'
                          progressValue={25}
                          stats={stats}
                          className='w-full max-w-112.5'
                        />
                      )
                    }
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card Color Palette */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.15} transition={{ duration: 0.45 }}>
          <Card className='group/palette border-0 shadow-none'>
            <CardHeader className='gap-4'>
              <CardTitle className='text-2xl'>Unified design system.</CardTitle>
              <CardDescription className='text-lg'>
                Consistent UI, powered by a shared framework. From buttons to layouts — everything aligns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='bg-muted relative flex h-75 items-center justify-center overflow-hidden rounded-xl border'>
                <div className='grid grid-cols-1'>
                  {/* Row 1 */}
                  <Marquee
                    gap={1.25}
                    className='py-2 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
                  >
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='size-7 shrink-0 rounded-md border bg-amber-600 dark:bg-amber-400' />
                      <span className='text-lg font-medium'>Warning</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-chart-2 size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Chart-2</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-secondary-foreground size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Secondary foreground</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-chart-3 size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Chart-3</span>
                    </span>
                  </Marquee>
                  {/* Row 2 */}
                  <Marquee
                    gap={1.25}
                    duration={30}
                    reverse
                    className='py-2 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
                  >
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-card-foreground size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Card foreground</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-destructive size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Destructive</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-background size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Background</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='size-7 shrink-0 rounded-md border bg-sky-600 dark:bg-sky-400' />
                      <span className='text-lg font-medium'>Info</span>
                    </span>
                  </Marquee>
                  {/* Row 3 */}
                  <Marquee
                    gap={1.25}
                    duration={35}
                    className='py-2 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
                  >
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-chart-5 size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Chart-5</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-secondary size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Secondary</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='size-7 shrink-0 rounded-md border bg-green-600 dark:bg-green-400' />
                      <span className='text-lg font-medium'>Success</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-primary size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Primary</span>
                    </span>
                  </Marquee>
                  {/* Row 4 */}
                  <Marquee
                    gap={1.25}
                    reverse
                    className='py-2 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
                  >
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-chart-4 size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Chart-4</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-primary-foreground size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Primary foreground</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-foreground size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Foreground</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-card size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Card</span>
                    </span>
                  </Marquee>
                  {/* Row 5 */}
                  <Marquee
                    gap={1.25}
                    duration={32}
                    className='py-2 [&>div]:[animation-play-state:running] group-hover/palette:[&>div]:[animation-play-state:paused]'
                  >
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-muted-foreground size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Muted foreground</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-accent size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Accent</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-chart-1 size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Chart-1</span>
                    </span>
                    <span className='bg-card flex items-center gap-2 rounded-md p-2'>
                      <span className='bg-muted size-7 shrink-0 rounded-md border' />
                      <span className='text-lg font-medium'>Muted</span>
                    </span>
                  </Marquee>
                </div>
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_10%,var(--muted)_90%)]' />
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card Design Tokens */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.3} transition={{ duration: 0.45 }}>
          <Card className='group/card border-0 shadow-none'>
            <CardHeader className='gap-4'>
              <CardTitle className='text-2xl'>Smart design tokens.</CardTitle>
              <CardDescription className='text-lg'>
                Global theming made effortless and precise. Switch colors, spacing, and style in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='bg-muted relative flex h-75 items-center justify-center overflow-hidden rounded-xl border'>
                <div className='absolute flex justify-center blur-[1px]'>
                  <Marquee
                    gap={1.25}
                    vertical
                    className='h-74.5 shrink-0 pr-2 [&>div]:[animation-play-state:running] group-hover/card:[&>div]:[animation-play-state:paused]'
                  >
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-17.png'
                      alt='Statistics cards'
                      className='w-57.5 opacity-70 dark:hidden'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-17-dark.png'
                      alt='Statistics cards dark'
                      className='hidden w-57.5 opacity-70 dark:inline-block'
                    />
                  </Marquee>
                  <Marquee
                    gap={1.25}
                    vertical
                    reverse
                    className='h-74.5 shrink-0 pl-2 [&>div]:[animation-play-state:running] group-hover/card:[&>div]:[animation-play-state:paused]'
                  >
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-18.png'
                      alt='Statistics cards'
                      className='w-85 opacity-70 dark:hidden'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-18-dark.png'
                      alt='Statistics cards dark'
                      className='hidden w-85 opacity-70 dark:inline-block'
                    />
                  </Marquee>
                </div>
                <RainbowButton className='absolute size-19.5 shrink-0 rounded-xl border-4'>
                  <PaletteIcon className='size-9.5 stroke-1' />
                  <span className='sr-only'>Start Customizing</span>
                </RainbowButton>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>

        {/* Card Dashboard */}
        <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} delay={0.45} transition={{ duration: 0.45 }}>
          <Card className='border-0 shadow-none'>
            <CardHeader className='gap-4'>
              <CardTitle className='text-2xl'>Drag. Drop. Deploy.</CardTitle>
              <CardDescription className='text-lg'>
                Visually build with real, production-ready code. No code handoff — just ship what you see.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='bg-muted relative flex items-end justify-end overflow-hidden rounded-xl border max-sm:aspect-137/75 max-sm:w-full sm:h-75'>
                <div className='absolute max-h-75 origin-bottom-right scale-92'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-15.png'
                    alt='Dashboard'
                    className='w-full rounded-tl-lg border shadow-xl dark:hidden'
                  />
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-15-dark.png'
                    alt='Dashboard dark'
                    className='hidden rounded-tl-lg border shadow-xl dark:inline-block'
                  />
                  <Magnetic
                    range={250}
                    strength={0.1}
                    className='absolute top-[14%] left-[27%] w-[35%] rounded-md shadow-xl'
                  >
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-16.png'
                      alt='Dashboard'
                      className='dark:hidden'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-16-dark.png'
                      alt='Dashboard dark'
                      className='hidden -translate-x-1 dark:inline-block'
                    />
                  </Magnetic>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionPreset>
      </div>
    </section>
  )
}

export default BentoGrid
