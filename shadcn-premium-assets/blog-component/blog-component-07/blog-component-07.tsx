import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'

type BlogCard = {
  image: string
  alt: string
  title: string
  description: string
  author: string
  authorImg: string
  role: string
  blogLink: string
  authorProfileLink: string
}[]

type PopularArticle = {
  image: string
  alt: string
  title: string
  author: string
  blogLink: string
}[]

const Blog = ({ blogCards, popularArticles }: { blogCards: BlogCard; popularArticles: PopularArticle }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 sm:mb-16 lg:mb-24'>
          <h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'>Our Blog - Stay Curious</h2>
          <p className='text-muted-foreground text-xl'>
            Stay informed with fresh insights, expert opinions, and the latest trends shaping the industry.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2'>
            {blogCards.map((card, index) => (
              <Card key={index} className='shadow-none'>
                <CardContent className='flex h-full flex-col gap-6'>
                  <img src={card.image} alt='Robot' className='h-63 w-full rounded-lg object-cover' />
                  <div>
                    <CardTitle className='mb-3 text-xl font-medium'>
                      <a href={card.blogLink}>{card.title}</a>
                    </CardTitle>
                    <CardDescription className='text-base'>{card.description}</CardDescription>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href={card.authorProfileLink} className='flex items-center gap-2'>
                    <Avatar>
                      <AvatarImage src={card.authorImg} alt={card.alt} />
                      <AvatarFallback className='text-xs'>JA</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold'>{card.author}</span>
                      <span className='text-muted-foreground text-sm'>{card.role}</span>
                    </div>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Articles */}
          <div>
            <div className='flex h-full flex-col justify-between gap-4'>
              <h3 className='text-2xl font-semibold'>Most Popular</h3>
              {popularArticles.map((article, index) => (
                <a href={article.blogLink} key={index}>
                  <Card className='shadow-none'>
                    <CardContent>
                      <div className='flex items-center justify-between gap-8'>
                        <div>
                          <CardTitle className='mb-1.5 text-base font-medium'>{article.title}</CardTitle>
                          <CardDescription className='text-base'>{article.author}</CardDescription>
                        </div>
                        <img src={article.image} alt={article.alt} className='size-21 rounded-lg object-cover' />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
