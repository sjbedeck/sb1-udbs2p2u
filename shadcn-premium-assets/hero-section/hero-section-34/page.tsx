import { MessagesSquareIcon, UsersIcon, GitCompareIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-34/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-34/hero-section-34'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-section-34/hero-navigation'

const navigationData: Navigation[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Features',
    contentClassName: '!w-70',
    items: [
      {
        title: 'Smart Conversations',
        href: '#',
        description: 'Design natural, engaging chat flows.',
        icon: <MessagesSquareIcon className='size-4' />
      },
      {
        title: '24/7 Customer Support',
        href: '#',
        description: 'Build brand-aligned AI personalities.',
        icon: <UsersIcon className='size-4' />
      },
      {
        title: 'Easy Integration',
        href: '#',
        description: 'Optimize prompts for better output.',
        icon: <GitCompareIcon className='size-4' />
      }
    ]
  },
  {
    title: 'Testimonials',
    href: '#'
  },
  {
    title: 'Pricing',
    href: '#'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative flex flex-col overflow-hidden bg-gray-950'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
