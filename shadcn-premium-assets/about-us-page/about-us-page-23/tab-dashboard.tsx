'use client'

import StatisticsIncomeCard from '@/components/shadcn-studio/blocks/statistics-income-card'
import StatisticsExpenseCard from '@/components/shadcn-studio/blocks/statistics-expense-card'
import StatisticsCardWithSvg from '@/components/shadcn-studio/blocks/statistics-card-04'
import PaymentHistoryCard from '@/components/shadcn-studio/blocks/widget-payment-history'
import TotalRevenueCard from '@/components/shadcn-studio/blocks/chart-total-revenue'
import TotalOrdersCardSvg from '@/assets/svg/total-orders-card-svg'

// Payment data for payment history widget
const paymentData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/master-card.png',
    imgWidth: 'w-8',
    cardNumber: '5688',
    cardType: 'Credit Card',
    date: '05/Jan',
    spend: '2,820',
    remaining: '10,020'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/visa.png',
    imgWidth: 'w-8',
    cardNumber: '8562',
    cardType: 'Debit Card',
    date: '15/Feb',
    spend: '1,450',
    remaining: '8,570'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/american-express.png',
    imgWidth: 'w-8',
    cardNumber: '5238',
    cardType: 'ATM card',
    date: '20/Mar',
    spend: '500',
    remaining: '7,070'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/visa.png',
    imgWidth: 'w-8',
    cardNumber: '8562',
    cardType: 'Debit card',
    date: '10/Mar',
    spend: '750',
    remaining: '5,120'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/master-card.png',
    imgWidth: 'w-8',
    cardNumber: '*5688',
    cardType: 'Credit Card',
    date: '25/May',
    spend: '1,200',
    remaining: '5,870'
  }
]

const TabDashboard = () => {
  return (
    <div className='space-y-6'>
      {/* Top row - 4 cards */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {/* Income Statistics */}
        <StatisticsIncomeCard className='[&>[data-slot=card-content]]:lg:max-xl:flex-col [&>[data-slot=card-content]]:lg:max-xl:pr-6' />

        {/* Expense Statistics */}
        <StatisticsExpenseCard className='[&>[data-slot=card-content]]:lg:max-xl:flex-col [&>[data-slot=card-content]]:lg:max-xl:pr-6' />

        {/* Total Orders */}
        <StatisticsCardWithSvg
          title='Total orders'
          badgeContent='Last Week'
          value='42.4k'
          changePercentage={10.8}
          svg={<TotalOrdersCardSvg />}
          className='col-span-full md:col-span-2 lg:col-span-1'
        />
        {/* Payment History */}
        <PaymentHistoryCard
          title='Payment History'
          paymentData={paymentData}
          className='col-span-full md:col-span-2 lg:col-span-3 xl:col-span-1'
        />

        {/* Total Revenue */}
        <TotalRevenueCard className='col-span-full md:col-span-2 lg:col-span-3 xl:col-span-2' />
      </div>
    </div>
  )
}

export default TabDashboard
