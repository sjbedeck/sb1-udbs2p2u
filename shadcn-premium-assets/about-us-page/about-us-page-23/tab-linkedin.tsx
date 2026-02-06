'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import TotalEarningCard from '@/components/shadcn-studio/blocks/chart-total-earning'
import ForBusinessSharkCard from '@/components/shadcn-studio/blocks/widget-for-business-shark'
import VehiclesConditionCard from '@/components/shadcn-studio/blocks/widget-vehicles-condition'

// Vehicle condition data
const vehicleConditionData = [
  {
    condition: 'Excellent',
    details: '12% increase',
    progressValue: 55,
    changePercentage: '+25%',
    progressClassName: 'stroke-chart-1'
  },
  {
    condition: 'Good',
    details: '24 Vehicles',
    progressValue: 20,
    changePercentage: '+30%',
    progressClassName: 'stroke-chart-2'
  },
  {
    condition: 'Average',
    details: '182 Tasks',
    progressValue: 12,
    changePercentage: '-15%',
    progressClassName: 'stroke-chart-3'
  },
  {
    condition: 'Bad',
    details: '9 Vehicles',
    progressValue: 8,
    changePercentage: '+35%',
    progressClassName: 'stroke-chart-4'
  },
  {
    condition: 'Not Working',
    details: '3 Vehicles',
    progressValue: 5,
    changePercentage: '-2%',
    progressClassName: 'stroke-chart-5'
  }
]

// Order packed progress data
const orderPackedData = [
  {
    title: 'Order Packed',
    value: '4,250',
    progressValue: 75,
    progressClassName: 'bg-primary/20 [&>div]:bg-primary'
  },
  {
    title: 'Order Packed',
    value: '4,250',
    progressValue: 75,
    progressClassName: 'bg-amber-600/20 dark:bg-amber-400/20 [&>div]:bg-amber-600 dark:[&>div]:bg-amber-400'
  },
  {
    title: 'Order Packed',
    value: '4,250',
    progressValue: 75,
    progressClassName: 'bg-sky-600/20 dark:bg-sky-400/20 [&>div]:bg-sky-600 dark:[&>div]:bg-sky-400'
  },
  {
    title: 'Order Packed',
    value: '4,250',
    progressValue: 75,
    progressClassName: 'bg-green-600/20 dark:bg-green-400/20 [&>div]:bg-green-600 dark:[&>div]:bg-green-400'
  }
]

const TabLinkedIn = () => {
  return (
    <div className='space-y-6'>
      {/* Top row - 3 cards */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        <TotalEarningCard className='[&>[data-slot=card-content]]:space-y-6' />

        <ForBusinessSharkCard />

        <VehiclesConditionCard title='Vehicles Condition' vehicleConditionData={vehicleConditionData} />

        <Card className='col-span-1 xl:col-span-3'>
          <CardContent className='grid grid-cols-1 gap-6 md:max-lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-18 xl:gap-y-9'>
            {orderPackedData.map((card, index) => (
              <div key={index} className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <span className='text-base'>{card.title}</span>
                  <span className='text-muted-foreground text-sm'>{card.value}</span>
                </div>
                <Progress value={card.progressValue} className={card.progressClassName} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TabLinkedIn
