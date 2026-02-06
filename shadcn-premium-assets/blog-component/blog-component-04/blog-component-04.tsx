import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type FeaturedArticle = {
  image: string
  alt: string
  badge: string
  title: string
  author: string
  authorImg: string
  blogLink: string
}[]

type editorChoicesCard = {
  image: string
  alt: string
  author: string
  title: string
  blogLink: string
}[]

const Blog = ({
  featuredArticles,
  editorChoicesCards
}: {
  featuredArticles: FeaturedArticle
  editorChoicesCards: editorChoicesCard
}) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='text-sm font-normal'>
              Blog List
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Plan your upcoming journey
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Explore new destinations, indulge in local cuisines, and immerse yourself in diverse cultures.
          </MotionPreset>
        </div>

        <div className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2'>
          <MotionPreset fade blur slide delay={0.8} transition={{ duration: 0.5 }}>
            <a href={featuredArticles[0].blogLink}>
              <Card className='relative h-full overflow-hidden border-0 p-0 shadow-none max-md:h-70'>
                <CardContent className='h-full p-0'>
                  <img
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].alt}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/25' />
                  <div className='absolute right-6 bottom-6 left-6 space-y-4'>
                    <Badge variant='destructive' className='rounded-sm'>
                      {featuredArticles[0].badge}
                    </Badge>
                    <CardTitle className='text-2xl text-white md:text-3xl lg:text-4xl'>
                      {featuredArticles[0].title}
                    </CardTitle>
                    <div className='flex items-center gap-2.5'>
                      <Avatar className='size-7'>
                        <AvatarImage src={featuredArticles[0].authorImg} alt={featuredArticles[0].author} />
                        <AvatarFallback className='text-xs'>DA</AvatarFallback>
                      </Avatar>
                      <span className='font-medium text-white'>{featuredArticles[0].author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </MotionPreset>

          {/* Featured Articles */}
          <MotionPreset fade blur slide={{ direction: 'right' }} delay={0.8} transition={{ duration: 0.5 }}>
            <div className='flex flex-col gap-6'>
              {featuredArticles.slice(1).map((item, index) => (
                <a href={item.blogLink} key={index}>
                  <Card className='relative h-full min-h-70 overflow-hidden border-0 p-0 shadow-none'>
                    <CardContent className='h-full p-0'>
                      <img src={item.image} alt={item.alt} className='h-full w-full object-cover' />
                      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/40' />
                      <div className='absolute right-6 bottom-6 left-6 space-y-4'>
                        <Badge variant='destructive' className='rounded-sm'>
                          {item.badge}
                        </Badge>
                        <CardTitle className='text-xl text-white'>{item.title}</CardTitle>
                        <div className='flex items-center gap-2.5'>
                          <Avatar className='size-7'>
                            <AvatarImage src={item.authorImg} alt={item.author} />
                            <AvatarFallback className='text-xs'>DA</AvatarFallback>
                          </Avatar>
                          <span className='font-medium text-white'>{item.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </MotionPreset>
        </div>

        {/* Editor's Choice Articles */}
        <div>
          <MotionPreset
            component='h3'
            className='mb-2 text-3xl font-semibold'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.8}
          >
            Editor&apos;s Choice
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground mb-8'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.9}
          >
            Featured Articles
          </MotionPreset>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {editorChoicesCards.map((choice, index) => (
              <MotionPreset
                key={index}
                fade
                blur
                slide={{ direction: 'down' }}
                zoom={{ initialScale: 0.85 }}
                delay={1 + index * 0.1}
                transition={{ duration: 0.5 }}
              >
                <a href={choice.blogLink}>
                  <Card className='h-full pt-0 shadow-none'>
                    <CardContent className='px-0'>
                      <img src={choice.image} alt={choice.alt} className='h-45 w-full rounded-t-xl object-cover' />
                    </CardContent>
                    <CardHeader className='grid-rows-1'>
                      <div className='flex gap-3'>
                        <span className='text-primary text-3xl font-medium'>{index + 1}</span>
                        <div>
                          <CardDescription className='mb-1 text-base'>{choice.author}</CardDescription>
                          <CardTitle className='text-lg font-medium'>{choice.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </a>
              </MotionPreset>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
