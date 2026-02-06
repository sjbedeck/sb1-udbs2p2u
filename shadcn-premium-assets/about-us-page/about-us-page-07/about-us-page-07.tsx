import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type StatCard = {
  title: string
  description: string
}[]

type FeatureCard = {
  title: string
  description: string
}[]

const AboutUs = ({ statCards, featureCards }: { statCards: StatCard; featureCards: FeatureCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 grid gap-16 lg:grid-cols-2'>
          <div className='space-y-10'>
            <div className='space-y-4'>
              <p className='text-primary text-sm font-medium uppercase'>About Us</p>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Building a Legacy of Excellence</h2>
              <p className='text-muted-foreground text-xl'>
                Our story is a testament to the power of collaboration and resilience. Together, we have navigated
                challenges, celebrated milestones, and crafted a narrative of growth and achievement in the construction
                industry.
              </p>
            </div>

            {/* Stats grid with 4 cards */}
            <div className='grid gap-6 md:grid-cols-2'>
              {statCards.map((stat, index) => (
                <Card
                  key={index}
                  className='border-primary/30 hover:border-primary rounded-lg shadow-none transition-colors duration-300'
                >
                  <CardHeader>
                    <CardTitle className='text-xl'>{stat.title}</CardTitle>
                    <CardDescription className='text-base'>{stat.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Button asChild size='lg' className='group rounded-lg text-base has-[>svg]:px-6'>
              <a href='#'>
                Read more
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </div>

          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-8.png'
            alt='About Us'
            className='h-full max-h-175 w-full rounded-md object-cover'
          />
        </div>

        {/* Feature cards */}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featureCards.map((feature, index) => (
            <Card key={index} className='rounded-lg shadow-none max-lg:last:col-span-full'>
              <CardHeader className='gap-3'>
                <CardTitle className='flex items-center gap-3 text-xl'>
                  <CheckCircleIcon />
                  {feature.title}
                </CardTitle>
                <CardDescription className='text-base'>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
