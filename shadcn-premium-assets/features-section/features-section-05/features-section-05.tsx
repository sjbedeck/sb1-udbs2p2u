import type { ComponentType } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Features = {
  icon: ComponentType
  title: string
  description: string
}[]

const Features = ({ featuresList }: { featuresList: Features }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Enjoy the finest features with our products
          </h2>
          <p className='text-muted-foreground text-xl'>
            We provide all the advantages that can simplify all your financial transactions without any further
            requirements
          </p>
          <Button variant='ghost' size='lg' className='group rounded-lg text-base has-[>svg]:px-6' asChild>
            <a href='#'>
              Learn More
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {featuresList.map((item, index) => {
            const IconComponent = item.icon

            return (
              <Card
                key={index}
                className='hover:bg-primary hover:text-primary-foreground group transition-colors duration-300'
              >
                <CardContent>
                  <Avatar className='mb-4 size-9'>
                    <AvatarFallback className='bg-muted text-card-foreground [&>svg]:size-6'>
                      <IconComponent />
                    </AvatarFallback>
                  </Avatar>
                  <h6 className='mb-2 text-lg font-semibold'>{item.title}</h6>
                  <p className='text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
