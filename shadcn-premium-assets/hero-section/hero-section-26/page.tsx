import {
  LayoutDashboardIcon,
  LineChartIcon,
  BarChart3Icon,
  PieChartIcon,
  CodeIcon,
  ZapIcon,
  ShieldIcon,
  BookOpenIcon,
  MailIcon,
  SettingsIcon,
  CreditCardIcon
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import Header from '@/components/shadcn-studio/blocks/hero-section-26/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-26/hero-section-26'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-01'

const navigationData: Navigation[] = [
  {
    title: 'Products',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Dashboards',
        items: [
          {
            title: 'Analytics Dashboard',
            href: '#',
            description: 'Real-time data analytics and insights',
            icon: <LayoutDashboardIcon className='size-4' />
          },
          {
            title: 'Financial Reports',
            href: '#',
            description: 'Comprehensive financial tracking and reporting',
            icon: <LineChartIcon className='size-4' />
          },
          {
            title: 'Performance Metrics',
            href: '#',
            description: 'Track KPIs and business performance',
            icon: <BarChart3Icon className='size-4' />
          },
          {
            title: 'Data Visualization',
            href: '#',
            description: 'Beautiful charts and graphs for insights',
            icon: <PieChartIcon className='size-4' />,
            badge: (
              <Badge className='border-none bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400'>
                Beta
              </Badge>
            )
          }
        ]
      },
      {
        type: 'section',
        title: 'Key Features',
        items: [
          {
            title: 'API Integration',
            href: '#',
            description: 'Seamless integration with your tools',
            icon: <CodeIcon className='size-4' />
          },
          {
            title: 'Fast Performance',
            href: '#',
            description: 'Lightning-fast data processing',
            icon: <ZapIcon className='size-4' />
          },
          {
            title: 'Enterprise Security',
            href: '#',
            description: 'Bank-level security for your data',
            icon: <ShieldIcon className='size-4' />
          },
          {
            title: 'Documentation',
            href: '#',
            description: 'Comprehensive guides and API docs',
            icon: <BookOpenIcon className='size-4' />
          }
        ]
      }
    ]
  },
  {
    title: 'Solutions',
    href: '#'
  },
  {
    title: 'Resources',
    contentClassName: '!w-38',
    items: [
      { title: 'Documentation', href: '#' },
      { title: 'Video Tutorials', href: '#' }
    ]
  },
  {
    title: 'Pricing',
    contentClassName: '!w-70',
    items: [
      {
        title: 'Starter Plan',
        href: '#',
        description: 'Perfect for small teams and startups',
        icon: <CreditCardIcon className='size-4' />
      },
      {
        title: 'Professional Plan',
        href: '#',
        description: 'Advanced features for growing businesses',
        icon: <SettingsIcon className='size-4' />
      },
      {
        title: 'Enterprise Plan',
        href: '#',
        description: 'Custom solutions for large organizations',
        icon: <ShieldIcon className='size-4' />
      },
      {
        title: 'Contact Sales',
        href: '#',
        description: 'Talk to our team about custom pricing',
        icon: <MailIcon className='size-4' />
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
