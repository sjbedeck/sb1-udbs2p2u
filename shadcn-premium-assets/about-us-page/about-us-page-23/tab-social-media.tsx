'use client'

import { CircleDollarSignIcon } from 'lucide-react'

import TotalSalesCard from '@/components/shadcn-studio/blocks/chart-total-sales'
import TotalTransactionCard from '@/components/shadcn-studio/blocks/chart-total-transaction'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-02'

// Statistics card data for revenue cards
const revenueCardsData = [
  {
    icon: <CircleDollarSignIcon />,
    title: 'Total Revenue',
    value: '$12,400',
    changePercentage: 15,
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: <CircleDollarSignIcon />,
    title: 'Total Revenue',
    value: '$12,400',
    changePercentage: 15,
    iconClassName: 'bg-chart-1/10 text-chart-1'
  },
  {
    icon: <CircleDollarSignIcon />,
    title: 'Total Revenue',
    value: '$12,400',
    changePercentage: 15,
    iconClassName: 'bg-chart-5/10 text-chart-5'
  }
]

const TabSocialMedia = () => {
  return (
    <div className='space-y-6'>
      {/* Top row - 3 cards */}
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
        <TotalSalesCard />

        <TotalTransactionCard className='col-span-1 lg:col-span-2' />

        {revenueCardsData.map((card, index) => (
          <StatisticsCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            changePercentage={card.changePercentage}
            iconClassName={card.iconClassName}
            className='gap-10 bg-none'
          />
        ))}
      </div>
    </div>
  )
}

export default TabSocialMedia
