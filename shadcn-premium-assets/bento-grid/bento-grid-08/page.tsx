import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-08/bento-grid-08'
import type { VehicleCondition } from '@/components/shadcn-studio/blocks/widget-vehicles-condition'
import type { Stats } from '@/components/shadcn-studio/blocks/widget-general-finance-reviews'

const vehicleConditionData: VehicleCondition[] = [
  {
    condition: 'Excellent',
    details: '12% increase',
    progressValue: 55,
    changePercentage: '+25%'
  },
  {
    condition: 'Good',
    details: '24 vehicles',
    progressValue: 20,
    changePercentage: '+30%'
  },
  {
    condition: 'Average',
    details: '182 Tasks',
    progressValue: 12,
    changePercentage: '-15%'
  },
  {
    condition: 'Bad',
    details: '9 vehicles',
    progressValue: 8,
    changePercentage: '+35%'
  },
  {
    condition: 'Not Working',
    details: '3 vehicles',
    progressValue: 5,
    changePercentage: '-2%'
  }
]

const stats: Stats[] = [
  {
    className: 'bg-primary',
    label: 'Profit',
    value: '$8,042',
    change: 16,
    changeType: 'decrease'
  },
  {
    className: 'bg-primary/10',
    label: 'Sales',
    value: '42',
    change: 6,
    changeType: 'increase'
  },
  {
    className: 'bg-primary/20',
    label: 'User',
    value: '1,200',
    change: 21,
    changeType: 'increase'
  }
]

const BentoGridPage = () => {
  return <BentoGrid vehicleConditionData={vehicleConditionData} stats={stats} />
}

export default BentoGridPage
