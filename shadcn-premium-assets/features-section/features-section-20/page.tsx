import { LaptopMinimalIcon, BadgeDollarSignIcon, WorkflowIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-20/features-section-20'

const features = [
  {
    title: 'Customizable Dashboard',
    icon: LaptopMinimalIcon
  },
  {
    title: 'Financial Goal Tracking',
    icon: BadgeDollarSignIcon
  },
  {
    title: 'Cash Flow Management',
    icon: WorkflowIcon
  }
]

const FeaturesPage = () => {
  return <Features features={features} />
}

export default FeaturesPage
