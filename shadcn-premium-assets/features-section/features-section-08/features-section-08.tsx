import type { ComponentType } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

type Features = {
  icon: ComponentType
  title: string
  description: string
  color: string
}[]

const Features = ({ featuresData }: { featuresData: Features }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 sm:gap-16 md:grid-cols-2 lg:gap-24'>
          <div className='space-y-4'>
            <p className='text-primary text-sm font-medium uppercase'>Our Best Features</p>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Maximize Your Financial Potential with Our Top Features
            </h2>
            <p className='text-muted-foreground text-xl'>
              Leverage artificial intelligence algorithms to provide users with valuable insights, predictive analytics,
              and recommendations to optimize their processes and better business outcomes.
            </p>

            <Button className='group rounded-lg text-base has-[>svg]:px-6' size='lg' asChild>
              <a href='#'>
                Learn more
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 md:max-lg:grid-cols-1'>
            {featuresData.map((item, index) => {
              const IconComponent = item.icon

              return (
                <Card key={index} className='shadow-none transition-shadow duration-300 hover:shadow-md'>
                  <CardContent>
                    <Avatar className='mb-4 size-8 rounded-sm'>
                      <AvatarFallback className={cn('rounded-sm [&>svg]:size-5', item.color)}>
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
