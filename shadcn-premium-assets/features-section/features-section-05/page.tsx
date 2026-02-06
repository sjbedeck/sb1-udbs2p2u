import { CreditCardIcon, ShieldBanIcon, Clock8Icon, CircleDollarSignIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-05/features-section-05'

const faqItems = [
  {
    icon: CreditCardIcon,
    title: 'Easy Payment',
    description: '75% of users prefer diverse payment options, enhancing convenience and increasing transactions.'
  },
  {
    icon: ShieldBanIcon,
    title: 'Safe Transaction',
    description: '90% of customers prioritise security, and robust measures build trust and confidence in the platform.'
  },
  {
    icon: Clock8Icon,
    title: 'Fast Customer Service',
    description: '80% users highly value quick responses, improving user experience  long-term customer.'
  },
  {
    icon: CircleDollarSignIcon,
    title: 'Quick Transaction',
    description: 'Transactions are 30% faster than industry standards, boosting user satisfaction and repeat usage.'
  }
]

const FeaturesPage = () => {
  return <Features featuresList={faqItems} />
}

export default FeaturesPage
