import { LaptopIcon, VideoIcon, LayoutGridIcon, DollarSignIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-07/features-section-07'

const featuresData = [
  {
    icon: LaptopIcon,
    title: 'Made For Developers',
    description: 'Use algorithms to forecast financial trends, enabling proactive decision-making.'
  },
  {
    icon: VideoIcon,
    title: 'Helpful Video Tutorials',
    description: 'Use algorithms to forecast financial trends, enabling proactive decision-making.'
  },
  {
    icon: LayoutGridIcon,
    title: '120+ Coded Blocks',
    description: 'Use algorithms to forecast financial trends, enabling proactive decision-making.'
  },
  {
    icon: DollarSignIcon,
    title: 'Secured Payments',
    description: 'Use algorithms to forecast financial trends, enabling proactive decision-making.'
  }
]

const FeaturesPage = () => {
  return <Features featuresData={featuresData} />
}

export default FeaturesPage
