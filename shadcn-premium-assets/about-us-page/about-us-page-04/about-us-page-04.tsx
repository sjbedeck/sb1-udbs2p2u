import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

type TabData = {
  name: string
  value: string
  content: {
    image: string
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
}[]

const AboutUs = ({ data }: { data: TabData }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-6 space-y-4 text-center'>
          <Badge className='text-sm font-normal' variant='outline'>
            About Us
          </Badge>
          <p className='text-muted-foreground text-xl'>
            Our journey highlights the strength of collaboration and determination. Together, we have tackled obstacles,
            rejoiced in our successes, and crafted a tale of progress and achievement.
          </p>
          <Button size='lg' asChild className='rounded-lg text-base has-[>svg]:px-6'>
            <a href='#'>
              Read More
              <ArrowRightIcon />
            </a>
          </Button>
        </div>

        <Tabs defaultValue='our-mission' className='items-center gap-12 md:gap-16 lg:gap-24'>
          <TabsList className='bg-background rounded-none border-b p-0'>
            {data.map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent px-3 text-base focus-visible:z-10 data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent'
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {data.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
                <img
                  src={tab.content.image}
                  alt={tab.name}
                  className='h-full max-h-91 min-h-52 w-full rounded-lg object-cover'
                />

                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold'>{tab.content.title}</h3>
                  <p className='text-muted-foreground'>{tab.content.description}</p>
                  <Button size='lg' asChild>
                    <a href={tab.content.buttonLink}>{tab.content.buttonText}</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default AboutUs
