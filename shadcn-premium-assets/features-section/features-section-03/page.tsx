import { LayersIcon, PlaneTakeoffIcon, CodeXmlIcon, MousePointerClickIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-03/features-section-03'

const featuresList = [
  {
    icon: LayersIcon,
    title: 'Solid Tech-Stack',
    description: 'Utilizes Laravel, Tailwind, Livewire, Alpine.JS, and FilamentPHP for a powerful experience.'
  },
  {
    icon: PlaneTakeoffIcon,
    title: 'Ready for Production',
    description: 'No need to waste time on configurations; everything is set for deployment.'
  },
  {
    icon: CodeXmlIcon,
    title: 'Clean Code',
    description: 'A simple, clean, well-commented codebase that is fully customizable and easy to extend.'
  },
  {
    icon: MousePointerClickIcon,
    title: '1-Click Deployment',
    description: "Deploy your SaaS swiftly with Laravel's one-click deployment powered by PHP Deployer."
  }
]

const FeaturesPage = () => {
  return <Features featuresList={featuresList} />
}

export default FeaturesPage
