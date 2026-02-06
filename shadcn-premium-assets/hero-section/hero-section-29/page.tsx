import { LayoutIcon, PaletteIcon, Smartphone, SparklesIcon, UsersIcon, ZapIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-29/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-29/hero-section-29'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-02'

import { Marquee } from '@/components/ui/marquee'

const navigationData: Navigation[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Features',
    subtitle: 'Best Features',
    imgSubtitle: 'Showcase',
    contentClassName: '!w-130',
    items: [
      {
        icon: <LayoutIcon className='size-4' />,
        title: 'UI Components',
        href: '#',
        description: 'Fully customizable components and layouts for smooth experience'
      },
      {
        icon: <PaletteIcon className='size-4' />,
        title: 'Design System',
        href: '#',
        description: 'Craft stunning websites faster with our polished UI kit'
      },
      {
        icon: <Smartphone className='size-4' />,
        title: 'Responsive Design',
        href: '#',
        description: 'Unleash full potential with best mobile-first features'
      }
    ],
    imageSection: {
      img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-68.png',
      href: '#',
      title: 'Website Builder',
      description: 'Design high-quality websites with ease and creativity'
    }
  },
  {
    title: 'Resources',
    contentClassName: '!w-80',
    items: [
      {
        icon: <SparklesIcon className='size-4' />,
        title: 'Templates',
        href: '#',
        description: 'Access polished, ready-to-use templates'
      },
      {
        icon: <ZapIcon className='size-4' />,
        title: 'Quick Start',
        href: '#',
        description: 'Get started in minutes with our simple guide'
      },
      {
        icon: <UsersIcon className='size-4' />,
        title: 'Community',
        href: '#',
        description: 'Join our community and get inspired'
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
        title: 'Showcase',
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
    <div className='flex min-h-screen flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-1 flex-col'>
        <HeroSection />
      </main>

      <Marquee duration={50} gap={0} className='absolute inset-0 -z-1 p-0'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-63.png'
          alt='Background Image'
          className='inset-0 opacity-60 dark:hidden'
        />
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-63-dark.png'
          alt='Background Image'
          className='inset-0 hidden dark:inline-block'
        />
      </Marquee>
    </div>
  )
}

export default HeroSectionPage
