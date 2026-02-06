'use client'

import { CircleDollarSignIcon, EllipsisVerticalIcon } from 'lucide-react'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { Button } from '@/components/ui/button'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import SalesByCountryCard from '@/components/shadcn-studio/blocks/widget-sales-by-countries'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-02'

const listItems = ['Share', 'Update', 'Refresh']

const financeChartData = [
  { month: 'January', profit: 20, income: 0, expense: 0 },
  { month: 'February', profit: 20, income: 8, expense: 0 },
  { month: 'March', profit: 18, income: 22, expense: 0 },
  { month: 'April', profit: 12, income: 13, expense: 0 },
  { month: 'May', profit: 22, income: 18, expense: 4 },
  { month: 'June', profit: 15, income: 22, expense: 13 },
  { month: 'July', profit: 25, income: 7, expense: 12 }
]

const financeChartConfig = {
  profit: {
    label: 'Profit',
    color: 'var(--destructive)'
  },
  income: {
    label: 'Income',
    color: 'color-mix(in oklab, var(--destructive) 40%, transparent)'
  },
  expense: {
    label: 'Expense',
    color: 'color-mix(in oklab, var(--destructive) 20%, transparent)'
  }
} satisfies ChartConfig

// Sales data
const Sales = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/flags/austria.png',
    sales: '$867k',
    country: 'Austria',
    changePercentage: '20.3%',
    trend: 'up'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/flags/china.png',
    sales: '$1.2M',
    country: 'China',
    changePercentage: '15.7%',
    trend: 'up'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/flags/switzerland.png',
    sales: '$750k',
    country: 'Switzerland',
    changePercentage: '18.2%',
    trend: 'down'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/flags/india.png',
    sales: '$1.5M',
    country: 'India',
    changePercentage: '22.1%',
    trend: 'up'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/flags/brazil.png',
    sales: '$980k',
    country: 'Brazil',
    changePercentage: '19.6%',
    trend: 'down'
  }
]

const revenueCardsData = {
  icon: <CircleDollarSignIcon />,
  title: 'Total Revenue',
  value: '$12,400',
  changePercentage: 15,
  iconClassName: 'bg-chart-2/10 text-chart-2'
}

const TabYoutube = () => {
  return (
    <div className='grid grid-cols-1 gap-5 gap-y-4 max-sm:gap-6 lg:grid-cols-3'>
      <div className='max-sm:bg-card flex flex-col space-y-6 px-6 max-lg:pb-6 max-sm:rounded-xl max-sm:border max-sm:pt-6 sm:max-lg:border-b lg:col-span-2 lg:border-r'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1.5 text-lg font-semibold'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/youtube-icon.png'
                alt='Youtube'
                className='w-6'
              />
              <span>Youtube</span>
            </div>
            <span className='text-muted-foreground text-sm'>Yearly report overview</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='text-muted-foreground size-6 rounded-full'>
                <EllipsisVerticalIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuGroup>
                {listItems.map((item, index) => (
                  <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='flex-1'>
          <ChartContainer config={financeChartConfig} className='h-full min-h-65 w-full'>
            <BarChart accessibilityLayer data={financeChartData} barSize={12} margin={{ left: -30, bottom: -5 }}>
              <CartesianGrid vertical={false} strokeDasharray='4' stroke='var(--border)' />
              <XAxis
                dataKey='month'
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={value => value.slice(0, 3)}
              />
              <YAxis
                domain={[0, 50]}
                ticks={[0, 10, 20, 30, 40, 50]}
                tickFormatter={value => value}
                tickLine={false}
                tickMargin={8}
                axisLine={false}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey='profit' stackId='a' fill='var(--color-profit)' />
              <Bar dataKey='income' stackId='a' fill='var(--color-income)' />
              <Bar dataKey='expense' stackId='a' fill='var(--color-expense)' />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <SalesByCountryCard title='Sales by countries' subTitle='Monthly sales overview' salesData={Sales} />

        <StatisticsCard
          icon={revenueCardsData.icon}
          title={revenueCardsData.title}
          value={revenueCardsData.value}
          changePercentage={revenueCardsData.changePercentage}
          iconClassName={revenueCardsData.iconClassName}
          className='bg-none'
        />

        <Button asChild>
          <a href='#'>View Report</a>
        </Button>
      </div>
    </div>
  )
}

export default TabYoutube
