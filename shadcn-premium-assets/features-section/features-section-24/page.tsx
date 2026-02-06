import { ChartPieIcon, BotMessageSquareIcon, LayersIcon, ChartSplineIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-24/features-section-24'

const features = [
  {
    icon: <ChartPieIcon />,
    title: 'Unified Sales Overview',
    description:
      'Monitor leads, purchases, and orders in real-time to stay updated on every key business metric. This ensures you have the latest insights to make informed decisions.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/Flow/image-01.png'
  },
  {
    icon: <BotMessageSquareIcon />,
    title: 'Automated Follow-Ups',
    description:
      'Let smart reminders handle repetitive tasks, allowing you to concentrate on closing more deals rather than managing them. This way, you can maximise your productivity and achieve better results.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/Flow/image-02.png'
  },
  {
    icon: <LayersIcon />,
    title: 'Clean & Simple Workflow',
    description:
      'Move deals effortlessly through stages with our intuitive pipeline system designed for clarity and control. This system ensures that you always have a clear view of your progress.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/Flow/image-03.png'
  },
  {
    icon: <ChartSplineIcon />,
    title: 'Instant Performance Insights',
    description:
      'Get accurate reports and analytics that help you understand growth patterns and make confident decisions. These insights empower you to strategies effectively for future success.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/Flow/image-04.png'
  }
]

const FeaturesPage = () => {
  return <Features featuresList={features} />
}

export default FeaturesPage
