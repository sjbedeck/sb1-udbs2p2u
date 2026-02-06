import { BarChart3Icon, MegaphoneIcon, SearchIcon, Share2Icon, TargetIcon, TrendingUpIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-24/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-24/hero-section-24'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-02'

const navigationData: Navigation[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Solutions',
    subtitle: 'Marketing Tools',
    imgSubtitle: 'Featured',
    contentClassName: '!w-130',
    items: [
      {
        icon: <MegaphoneIcon className='size-4' />,
        title: 'Digital Marketing',
        href: '#',
        description: 'Reach more customers with cutting-edge marketing tools'
      },
      {
        icon: <TargetIcon className='size-4' />,
        title: 'Conversion Optimization',
        href: '#',
        description: 'Drive higher conversions and build lasting trust'
      },
      {
        icon: <BarChart3Icon className='size-4' />,
        title: 'Performance Analytics',
        href: '#',
        description: 'Track total revenue and sales performance in real-time'
      }
    ],
    imageSection: {
      img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-67.png',
      href: '#',
      title: 'Marketing Suite',
      description: 'All-in-one platform for maximum business impact'
    }
  },
  {
    title: 'Services',
    contentClassName: '!w-80',
    items: [
      {
        icon: <SearchIcon className='size-4' />,
        title: 'SEO Optimization',
        href: '#',
        description: 'Improve search rankings and organic traffic'
      },
      {
        icon: <Share2Icon className='size-4' />,
        title: 'Social Media',
        href: '#',
        description: 'Manage campaigns across all social platforms'
      },
      {
        icon: <TrendingUpIcon className='size-4' />,
        title: 'Growth Strategy',
        href: '#',
        description: 'Scale your business with proven strategies'
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
        title: 'Pricing',
        href: '#'
      },
      {
        title: 'Case Studies',
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
