import {
  LayoutDashboardIcon,
  TelescopeIcon,
  ChartScatterIcon,
  ChartPieIcon,
  GitPullRequestIcon,
  UsersIcon
} from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-39/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-39/hero-section-39'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-01'

const navigationData: Navigation[] = [
  {
    title: 'Features',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Analytics & Insights',
        items: [
          {
            title: 'Unified Dashboard',
            href: '#',
            description: 'Get every key business metric in one place.',
            icon: <LayoutDashboardIcon className='size-4' />
          },
          {
            title: 'Competitor Tracking',
            href: '#',
            description: 'Benchmark performance and market trends.',
            icon: <TelescopeIcon className='size-4' />
          },
          {
            title: 'Sales Analytics',
            href: '#',
            description: 'Track revenue growth, conversions & profitability.',
            icon: <ChartScatterIcon className='size-4' />
          }
        ]
      },
      {
        type: 'section',
        title: 'Productivity & Optimization',
        items: [
          {
            title: 'Report & Export',
            href: '#',
            description: 'Share insights quickly with automated reporting.',
            icon: <ChartPieIcon className='size-4' />
          },
          {
            title: 'Workflow Scheduling',
            href: '#',
            description: 'Plan content & operational tasks seamlessly.',
            icon: <GitPullRequestIcon className='size-4' />
          },
          {
            title: 'User Management',
            href: '#',
            description: 'Manage roles and access with complete control.',
            icon: <UsersIcon className='size-4' />
          }
        ]
      }
    ]
  },
  {
    title: 'Benefits',
    href: '#'
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
    <div className='flex flex-col bg-[image:repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)40%,transparent)0,color-mix(in_oklab,var(--border)40%,transparent)1px,transparent_0,transparent_50%)] bg-[size:12px_12px] bg-fixed'>
      <div className='mx-auto h-full w-full max-w-[1344px] px-4 sm:px-6 lg:px-8'>
        <div className='bg-background h-full w-full max-w-7xl border-x'>
          {/* Header Section */}
          <Header navigationData={navigationData} />

          {/* Main Content */}
          <main className='flex flex-col'>
            <HeroSection />
          </main>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionPage
