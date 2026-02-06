import type { ComponentType } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardDescription, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Features = {
  icon: ComponentType
  title: string
  description: string
}[]

const Features = ({ featuresData }: { featuresData: Features }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <div className='text-primary text-sm font-medium uppercase'>Our Best Features</div>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>3,583 Customers are using our product</h2>
          <Button size='lg' className='rounded-lg text-base' asChild>
            <a href='#'>See all features</a>
          </Button>
        </div>

        <div className='grid items-center gap-6 lg:grid-cols-2'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-5.png'
            alt='Hero Section'
            className='w-full rounded-xl border-6 dark:hidden'
          />
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-5-dark.png'
            alt='Hero Section'
            className='hidden w-full rounded-xl border-6 dark:inline-block'
          />

          <div className='grid h-fit gap-6 sm:grid-cols-2'>
            {featuresData.map((item, index) => {
              const IconComponent = item.icon

              return (
                <Card key={index} className='group hover:border-primary transition-colors duration-300'>
                  <CardContent>
                    <Avatar className='mb-4 size-9 rounded-md'>
                      <AvatarFallback className='bg-muted group-hover:bg-primary/10 group-hover:text-primary rounded-md transition-colors duration-300 [&>svg]:size-4'>
                        <IconComponent />
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className='group-hover:text-primary mb-2 text-base font-semibold transition-colors duration-300'>
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
