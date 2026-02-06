import {
  WrenchIcon,
  PackageIcon,
  TruckIcon,
  BarChart3Icon,
  ZapIcon,
  ShieldCheckIcon,
  ClockIcon,
  SettingsIcon,
  HelpCircleIcon,
  UserCircleIcon,
  CreditCardIcon
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import Header from '@/components/shadcn-studio/blocks/hero-section-28/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-28/hero-section-28'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-01'

const navigationData: Navigation[] = [
  {
    title: 'Tools',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Operations',
        items: [
          {
            title: 'Order Management',
            href: '#',
            description: 'Track and manage all your orders efficiently',
            icon: <PackageIcon className='size-4' />,
            badge: (
              <Badge className='border-none bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400'>
                v2.0
              </Badge>
            )
          },
          {
            title: 'Shipment Tracking',
            href: '#',
            description: 'Real-time tracking for all shipments',
            icon: <TruckIcon className='size-4' />
          },
          {
            title: 'Inventory Control',
            href: '#',
            description: 'Monitor stock levels and product availability',
            icon: <WrenchIcon className='size-4' />
          },
          {
            title: 'Performance Analytics',
            href: '#',
            description: 'Data-driven insights for better decisions',
            icon: <BarChart3Icon className='size-4' />
          }
        ]
      },
      {
        type: 'section',
        title: 'Platform Features',
        items: [
          {
            title: 'Real-time Updates',
            href: '#',
            description: 'Instant notifications for critical changes',
            icon: <ClockIcon className='size-4' />
          },
          {
            title: 'Automated Workflows',
            href: '#',
            description: 'Streamline operations with automation',
            icon: <ZapIcon className='size-4' />
          },
          {
            title: 'Secure Platform',
            href: '#',
            description: 'Enterprise-grade security and compliance',
            icon: <ShieldCheckIcon className='size-4' />
          },
          {
            title: 'Custom Settings',
            href: '#',
            description: 'Tailor the platform to your workflow',
            icon: <SettingsIcon className='size-4' />
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
      { title: 'Blog', href: '#' },
      { title: 'Guides', href: '#' }
    ]
  },
  {
    title: 'Pricing',
    contentClassName: '!w-70',
    items: [
      {
        title: 'Enterprise Plan',
        href: '#',
        description: 'Advanced features for large teams',
        icon: <CreditCardIcon className='size-4' />
      },
      {
        title: 'Business Plan',
        href: '#',
        description: 'Perfect for growing businesses',
        icon: <BarChart3Icon className='size-4' />
      },
      {
        title: 'Support & Training',
        href: '#',
        description: 'Get expert help and onboarding',
        icon: <HelpCircleIcon className='size-4' />
      },
      {
        title: 'My Account',
        href: '#',
        description: 'Manage billing and subscriptions',
        icon: <UserCircleIcon className='size-4' />
      }
    ]
  }
]

const HeroSectionPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
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
