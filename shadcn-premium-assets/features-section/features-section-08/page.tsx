import { FileSearchIcon, TrendingUpIcon, ChartNoAxesColumnIncreasingIcon, ChartPieIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-08/features-section-08'

const featuresData = [
  {
    icon: FileSearchIcon,
    title: 'Predictive Analytics',
    description: 'Use algorithms to forecast financial trends, enabling proactive decision-making.',
    color: 'text-primary-foreground bg-primary'
  },
  {
    icon: TrendingUpIcon,
    title: 'Expense Tracking',
    description: 'Monitor expenses in real-time to uncover savings and improve financial health.',
    color: 'text-white bg-amber-600 dark:bg-amber-400'
  },
  {
    icon: ChartPieIcon,
    title: 'Financial Reporting',
    description: 'Generate detailed reports for insight into profitability and operational performance.',
    color: 'text-white bg-green-600 dark:bg-green-400'
  },
  {
    icon: ChartNoAxesColumnIncreasingIcon,
    title: 'Investment Analysis',
    description: 'Evaluate investments with risk assessments and return forecasts to optimize portfolio.',
    color: 'text-white bg-destructive dark:bg-destructive/60'
  }
]

const FeaturesPage = () => {
  return <Features featuresData={featuresData} />
}

export default FeaturesPage
