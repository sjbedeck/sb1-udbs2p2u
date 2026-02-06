import { ArrowRightIcon, FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { MotionPreset } from '@/components/ui/motion-preset'

export type TeamMember = {
  image: string
  name: string
  title: string
  description: string
  type: string
  facebookLink: string
  twitterLink: string
  githubLink: string
  instagramLink: string
}

type TeamMemberItem = {
  teamMember: TeamMember[]
}

const Team = ({ teamMember }: TeamMemberItem) => {
  const types = [...new Set(teamMember.map(member => member.type))]

  return (
    <section className='before:from-primary/10 before:transparent relative py-8 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:h-60 before:w-full before:bg-linear-to-b before:via-transparent sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Introducing Our Team , the{' '}
            <span className='relative z-10'>
              <span>Creators</span>
              <span className='bg-primary absolute bottom-1 left-0 -z-10 h-px w-full' aria-hidden='true' />
            </span>{' '}
            Behind the Magic ✨
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            Driven by purpose, our team blends creativity, innovation, and expertise to shape remarkable outcomes.
          </MotionPreset>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} delay={0.1} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              className='group relative overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            >
              Explore <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          </MotionPreset>
        </div>

        {/* Team Members */}
        <Tabs defaultValue='view-all' className='gap-8'>
          {/* Tab List */}
          <div className='flex justify-start overflow-x-auto sm:justify-center'>
            <MotionPreset fade zoom delay={0.5} transition={{ duration: 0.5 }}>
              <TabsList className='rounded-none bg-transparent p-0'>
                <TabsTrigger
                  value='view-all'
                  className='data-[state=active]:border-primary dark:data-[state=active]:border-primary data-[state=active]:text-foreground text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:border-muted-foreground/30 border-border h-full rounded-none border-0 border-b-2 bg-transparent px-3 py-2 text-center data-[state=active]:bg-transparent data-[state=active]:shadow-none'
                >
                  View All
                </TabsTrigger>

                {types.map(type => (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className='data-[state=active]:border-primary dark:data-[state=active]:border-primary data-[state=active]:text-foreground text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:border-muted-foreground/30 border-border h-full rounded-none border-0 border-b-2 bg-transparent px-3 py-2 text-center data-[state=active]:bg-transparent data-[state=active]:shadow-none'
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </MotionPreset>
          </div>

          {/* Tab Content All Items */}
          <TabsContent value='view-all' className='grid gap-8.75 sm:grid-cols-2 lg:grid-cols-3'>
            {teamMember.map((item, index) => (
              <MotionPreset
                key={`${item.name}-${index}`}
                fade
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3 + 0.15 * index}
                transition={{ duration: 0.5 }}
              >
                <Card className='rounded-md p-4 shadow-none'>
                  <img src={item.image} alt={item.name} className='h-100 w-full rounded-md object-cover' />

                  <CardContent className='from-background/60 -mt-23 flex flex-col items-center justify-center gap-3.5 rounded-t-xl bg-linear-to-b from-100% to-transparent p-5 text-center backdrop-blur-md'>
                    <div>
                      <h3 className='text-2xl font-medium'>{item.name}</h3>
                      <p className='text-muted-foreground font-medium'>{item.title}</p>
                    </div>
                    <p className='text-muted-foreground line-clamp-2'>{item.description}</p>
                    <Separator />
                    <div className='flex items-center justify-center gap-3'>
                      <a href={item.facebookLink}>
                        <FacebookIcon className='size-5.5 shrink-0' />
                      </a>
                      <a href={item.twitterLink}>
                        <TwitterIcon className='size-5.5 shrink-0' />
                      </a>
                      <a href={item.githubLink}>
                        <GithubIcon className='size-5.5 shrink-0' />
                      </a>
                      <a href={item.instagramLink}>
                        <InstagramIcon className='size-5.5 shrink-0' />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </MotionPreset>
            ))}
          </TabsContent>

          {/* Tab Content by Type */}
          {types.map(type => (
            <TabsContent key={type} value={type} className='grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3'>
              {teamMember
                .filter(p => p.type === type)
                .map((item, index) => (
                  <MotionPreset
                    key={`${item.name}-${index}`}
                    fade
                    slide={{ direction: 'down', offset: 50 }}
                    delay={0.5 + 0.15 * index}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className='p-4 shadow-none'>
                      <img src={item.image} alt={item.name} className='h-100 w-full rounded-md object-cover' />

                      <CardContent className='from-background/60 -mt-23 flex flex-col items-center justify-center gap-3.5 rounded-t-xl bg-linear-to-b from-100% to-transparent p-5 text-center backdrop-blur-md'>
                        <div>
                          <h3 className='text-2xl font-medium'>{item.name}</h3>
                          <p className='text-muted-foreground font-medium'>{item.title}</p>
                        </div>
                        <p className='text-muted-foreground line-clamp-3'>{item.description}</p>
                        <Separator />
                        <div className='flex items-center justify-center gap-3'>
                          <a href={item.facebookLink}>
                            <FacebookIcon className='size-5.5 shrink-0' />
                          </a>
                          <a href={item.twitterLink}>
                            <TwitterIcon className='size-5.5 shrink-0' />
                          </a>
                          <a href={item.githubLink}>
                            <GithubIcon className='size-5.5 shrink-0' />
                          </a>
                          <a href={item.instagramLink}>
                            <InstagramIcon className='size-5.5 shrink-0' />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionPreset>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Team
