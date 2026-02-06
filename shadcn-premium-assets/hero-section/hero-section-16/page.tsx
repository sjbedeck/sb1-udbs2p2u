import { BookOpenIcon, HeadphonesIcon, LayoutDashboardIcon, RocketIcon, TrendingUpIcon, UsersIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-16/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-16/hero-section-16'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-02'

const navigationData: Navigation[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Solutions',
    subtitle: 'Solutions',
    imgSubtitle: 'All-in-One',
    contentClassName: '!w-130',
    items: [
      {
        icon: <LayoutDashboardIcon className='size-4' />,
        title: 'Task Automation',
        href: '#',
        description: 'Automate repetitive tasks and save hours every week'
      },
      {
        icon: <TrendingUpIcon className='size-4' />,
        title: 'Growth Analytics',
        href: '#',
        description: 'Track and optimize your business performance metrics'
      },
      {
        icon: <UsersIcon className='size-4' />,
        title: 'Team Collaboration',
        href: '#',
        description: 'Work seamlessly with your team in real-time'
      }
    ],
    imageSection: {
      img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-65.png',
      href: '#',
      title: 'All-in-One Platform',
      description: 'Complete solution for business automation and growth'
    }
  },
  {
    title: 'Resources',
    contentClassName: '!w-80',
    items: [
      {
        icon: <BookOpenIcon className='size-4' />,
        title: 'Documentation',
        href: '#',
        description: 'Comprehensive guides and API references'
      },
      {
        icon: <RocketIcon className='size-4' />,
        title: 'Getting Started',
        href: '#',
        description: 'Quick start guide for new users'
      },
      {
        icon: <HeadphonesIcon className='size-4' />,
        title: 'Support Center',
        href: '#',
        description: '24/7 help and customer support'
      }
    ]
  },
  {
    title: 'Company',
    contentClassName: '!w-42',
    items: [
      {
        title: 'About Us',
        href: '#'
      },
      {
        title: 'Careers',
        href: '#'
      },
      {
        title: 'Blog',
        href: '#'
      },
      {
        title: 'Contact',
        href: '#'
      }
    ]
  }
]

const HeroSectionPage = () => {
  return (
    <div>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
