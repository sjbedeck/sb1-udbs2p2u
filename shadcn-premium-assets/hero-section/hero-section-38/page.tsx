import { BotIcon, MessageCircleQuestionIcon, NewspaperIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-38/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-38/hero-section-38'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-section-38/hero-navigation'

const navigationData: Navigation[] = [
  {
    title: 'Features',
    href: '#'
  },
  {
    title: 'Use Cases',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Testimonials',
    href: '#'
  },
  {
    title: 'Blogs',
    subtitle: 'Updates',
    imgSubtitle: 'Tips & Tutorials',
    contentClassName: '!w-140',
    items: [
      {
        icon: <BotIcon className='size-4' />,
        title: 'Product Updates',
        href: '#',
        description: 'Latest innovations, features, and upgrades.'
      },
      {
        icon: <MessageCircleQuestionIcon className='size-4' />,
        title: 'How-To Guides',
        href: '#',
        description: 'Step-by-step tutorials to help you in working with robo.'
      },
      {
        icon: <NewspaperIcon className='size-4' />,
        title: 'Insights & News',
        href: '#',
        description: 'Trends, research, and stories shaping the future.'
      }
    ],
    imageSection: {
      img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-20.png',
      href: '#',
      title: 'Smart Living Blog',
      description: 'Explore deep dives, expert advice, and inspiring ideas for a connected life.'
    }
  }
]

const HeroSectionPage = () => {
  return (
    <div className='flex flex-col'>
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
