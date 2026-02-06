import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

type BlogCard = {
  image: string
  alt: string
  title: string
  date: string
  author: string
  authorImg: string
  role: string
  blogLink: string
  authorProfileLink: string
}[]

const Blog = ({ blogCards }: { blogCards: BlogCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 text-center sm:mb-16 lg:mb-24'>
          <h2 className='mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl'>Plan your upcoming journey.</h2>
          <p className='text-muted-foreground text-xl'>
            Explore new destinations, indulge in local cuisines, and immerse yourself in diverse cultures.
          </p>
        </div>

        <div className='space-y-8'>
          {blogCards.map((item, index) => (
            <div key={index} className='space-y-8'>
              <div className='flex gap-8 max-sm:flex-col sm:items-center'>
                <img src={item.image} alt={item.alt} className='h-41 w-49 rounded-lg object-cover' />
                <div className='flex-1'>
                  <div className='space-y-5 md:max-w-xs'>
                    <a href={item.blogLink} className='block text-lg font-medium'>
                      {item.title}
                    </a>
                    <p className='text-muted-foreground'>{item.date}</p>
                    <a href={item.authorProfileLink} className='flex items-center gap-3 text-start'>
                      <Avatar className='size-10.5'>
                        <AvatarImage src={item.authorImg} alt={item.author} />
                        <AvatarFallback className='text-xs'>DA</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col'>
                        <span className='font-semibold'>{item.author}</span>
                        <span className='text-muted-foreground text-sm'>{item.role}</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <Button
                    className='group bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 text-base has-[>svg]:px-6'
                    size='lg'
                    asChild
                  >
                    <a href={item.blogLink}>
                      Read More
                      <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                    </a>
                  </Button>
                </div>
              </div>

              {index < blogCards.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
