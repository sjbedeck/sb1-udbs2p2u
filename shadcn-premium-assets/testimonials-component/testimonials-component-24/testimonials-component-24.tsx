import { ArrowUpRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { MatterButton } from '@/components/ui/matter-button'
import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'
import Card3DEffect from '@/components/shadcn-studio/blocks/testimonials-component-24/card-3d-effect'
import { TextShimmer } from '@/components/shadcn-studio/blocks/text-shimmer'

const TestimonialsComponent = () => {
  return (
    <section className='bg-background relative overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 md:gap-16 lg:gap-24 lg:px-8'>
        {/* Header Content */}
        <div className='flex items-end justify-between gap-16 max-md:flex-col'>
          <div className='space-y-4'>
            <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
              <TextShimmer className='text-sm font-medium uppercase' duration={1.75}>
                Testimonials
              </TextShimmer>
            </MotionPreset>
            <MotionPreset
              component='h2'
              className='text-2xl font-medium sm:text-3xl lg:text-4xl'
              fade
              blur
              delay={0.2}
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              From Our Users
            </MotionPreset>
            <MotionPreset
              component='p'
              className='text-muted-foreground text-lg'
              fade
              blur
              delay={0.4}
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              Real experiences from people whose daily lives have been transformed by robo.
            </MotionPreset>
          </div>
          <MotionPreset fade blur delay={0.6} slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <MatterButton size='lg' asChild>
              <a href='#'>
                View all reviews <ArrowUpRightIcon />
              </a>
            </MatterButton>
          </MotionPreset>
        </div>

        {/* Reviews */}
        <MotionPreset
          fade
          blur
          delay={0.8}
          slide={{ direction: 'down', offset: 50 }}
          transition={{ duration: 0.5 }}
          className='relative grid sm:grid-cols-2 lg:grid-cols-3'
        >
          <div className='from-background absolute top-0 z-1 h-13 w-full bg-gradient-to-b to-transparent' />

          {/* First Column */}
          <Marquee vertical pauseOnHover delay={0.9} duration={70} gap={2} className='h-225 px-4'>
            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-01.png)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-gradient-to-t from-55% to-transparent px-6 pb-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-square-icon.png?width=26&format=auto'
                    alt='twitter'
                    className='w-5.5 rounded-sm'
                  />
                  <p>
                    The level of precision and reliability is remarkable. It feels like having an intelligent partner
                    rather than a machine.
                  </p>
                  <span className='text-muted-foreground'>@mark</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-56.png' alt='Andy' />
                        <AvatarFallback className='text-sm'>AH</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='font-semibold'>Andy Hooke</h4>
                        <p className='text-muted-foreground'>@andy_hooke</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/thread-icon.png?width=26&format=auto'
                    alt='thread'
                    className='w-5.5 rounded-sm'
                  />
                </div>
                <CardContent className='flex flex-col gap-4'>
                  <p>
                    Robo is more than just a cleaning robot. It&apos;s a true helper. It has made home maintenance
                    easier, and I can rely on it for much more than I ever expected.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Apr 20 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-04.png)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-gradient-to-t from-55% to-transparent px-6 pb-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/thread-icon.png?width=26&format=auto'
                    alt='thread'
                    className='w-5.5 rounded-sm'
                  />
                  <p>
                    It seamlessly adapts to my daily routine and anticipates needs. This is what smart home technology
                    should be.
                  </p>
                  <span className='text-muted-foreground'>@Zoya</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-53.png' alt='Amrit' />
                        <AvatarFallback className='text-sm'>AN</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='font-semibold'>Amrit Nagi</h4>
                        <p className='text-muted-foreground'>@amritnagi</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/reddit-icon-2.png?width=26&format=auto'
                    alt='reddit'
                    className='w-5.5'
                  />
                </div>
                <CardContent className='flex flex-col gap-4'>
                  <p>
                    Every feature works flawlessly and saves me hours each week. It&apos;s transformed how I manage my
                    home and exceeded all my expectations.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Aug 15 2024</span>
                </CardContent>
              </Card>
            </Card3DEffect>
          </Marquee>

          {/* Second Column */}
          <Marquee vertical pauseOnHover delay={0.9} duration={70} gap={2} reverse className='h-225 px-4 max-sm:hidden'>
            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png' alt='Praveen' />
                        <AvatarFallback className='text-sm'>PJ</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='font-semibold'>Praveen Juge</h4>
                        <p className='text-muted-foreground'>@praveenjuge</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/reddit-icon-2.png?width=26&format=auto'
                    alt='reddit'
                    className='w-5.5'
                  />
                </div>
                <CardContent className='flex flex-col gap-4'>
                  <p>
                    I was skeptical at first, but Robo exceeded my expectations. It handles everything from cleaning the
                    floors to small repairs. My house has never been more organized.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Mar 12 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-02.png)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-gradient-to-t from-55% to-transparent px-6 pb-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/thread-icon.png?width=26&format=auto'
                    alt='thread'
                    className='w-5.5 rounded-sm'
                  />
                  <p>
                    The level of precision and reliability is remarkable. It feels like having an intelligent partner
                    rather than a machine.
                  </p>
                  <span className='text-muted-foreground'>@jeffff</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-55.png' alt='Roy' />
                        <AvatarFallback className='text-sm'>RQ</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='font-semibold'>Roy Quilor</h4>
                        <p className='text-muted-foreground'>@RoyQuilor</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-square-icon.png?width=26&format=auto'
                    alt='twitter'
                    className='w-5.5 rounded-sm'
                  />
                </div>
                <CardContent className='flex flex-col gap-4'>
                  <p>
                    The automation capabilities are mind-blowing. It anticipates what I need before I even ask. This has
                    genuinely revolutionized my entire household experience.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Dec 14 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-05.png)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-gradient-to-t from-55% to-transparent px-6 pb-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/thread-icon.png?width=26&format=auto'
                    alt='thread'
                    className='w-5.5 rounded-sm'
                  />
                  <p>
                    Robo has completely simplified my life. It&apos;s intuitive, efficient, and tackles both maintenance
                    and cleaning effortlessly.
                  </p>
                  <span className='text-muted-foreground'>@Tommy</span>
                </div>
              </div>
            </Card3DEffect>
          </Marquee>

          {/* Third Column */}
          <Marquee vertical pauseOnHover delay={0.9} duration={70} gap={2} className='h-225 px-4 max-lg:hidden'>
            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-03.png)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-gradient-to-t from-55% to-transparent px-6 pb-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-square-icon.png?width=26&format=auto'
                    alt='twitter'
                    className='w-5.5 rounded-sm'
                  />
                  <p>
                    Robo is the future of home automation. It&apos;s intelligent, efficient, and makes daily tasks so
                    much easier.
                  </p>
                  <span className='text-muted-foreground'>@Elon</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage
                          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-58.png'
                          alt='Rob Austin'
                        />
                        <AvatarFallback className='text-sm'>RA</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='font-semibold'>Rob Austin</h4>
                        <p className='text-muted-foreground'>@ausrobdev</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-square-icon.png?width=26&format=auto'
                    alt='twitter'
                    className='w-5.5 rounded-sm'
                  />
                </div>
                <CardContent className='flex flex-col gap-4'>
                  <p>
                    I&apos;ve never seen anything like Robo before. It&apos;s incredibly smart and handles everything
                    from fixing to cleaning with ease. I can&apos;t imagine life without it.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>SEP 01 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <div className='text-card-foreground relative h-125 overflow-hidden rounded-xl border bg-[url(https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-06.png)] bg-cover bg-clip-content bg-bottom bg-no-repeat'>
                <div className='from-card absolute inset-x-0 bottom-0 flex h-2/6 flex-col justify-between gap-2 bg-gradient-to-t from-55% to-transparent px-6 pb-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-square-icon.png?width=26&format=auto'
                    alt='twitter'
                    className='w-5.5 rounded-sm'
                  />
                  <p>
                    This device fits into our daily rhythm effortlessly. It&apos;s intuitive, reliable, and has made
                    everyday tasks noticeably easier.
                  </p>
                  <span className='text-muted-foreground'>@Joe</span>
                </div>
              </div>
            </Card3DEffect>

            <Card3DEffect translateDepth={0.5} rotateDepth={5}>
              <Card className='gap-4 shadow-none'>
                <div className='flex items-center justify-between px-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-12'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-59.png' alt='Sahaj' />
                        <AvatarFallback className='text-sm'>S</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <h4 className='font-semibold'>Sahaj</h4>
                        <p className='text-muted-foreground'>@iamsahaj_xyz</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-square-icon.png?width=26&format=auto'
                    alt='twitter'
                    className='w-5.5 rounded-sm'
                  />
                </div>
                <CardContent className='flex flex-col gap-4'>
                  <p>
                    I&apos;ve tried many helpers, but Robo truly stands out. It&apos;s remarkably intuitive and handles
                    repairs and cleaning with flawless consistency. I honestly don&apos;t know how I managed before it.
                  </p>

                  <span className='text-muted-foreground text-sm font-light uppercase'>Jan 01 2025</span>
                </CardContent>
              </Card>
            </Card3DEffect>
          </Marquee>

          <div className='from-background absolute bottom-0 z-1 h-13 w-full bg-gradient-to-t to-transparent' />
        </MotionPreset>
      </div>
    </section>
  )
}

export default TestimonialsComponent
