import { SettingsIcon, SmartphoneNfcIcon, BrainIcon, CopyIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-19/features-section-19'

const features = [
  {
    title: 'Automated Task',
    description: 'Automatically assign tasks.',
    icon: SettingsIcon
  },
  {
    title: 'Smart Task Routing',
    description: 'Route tasks directly to team.',
    icon: SmartphoneNfcIcon
  },
  {
    title: 'Conditional Triggers',
    description: 'Set triggers to initate task actions.',
    icon: BrainIcon
  },
  {
    title: 'Integration Autos',
    description: 'Automate and integrate task.',
    icon: CopyIcon
  }
]

const FeaturesPage = () => {
  return <Features features={features} />
}

export default FeaturesPage
