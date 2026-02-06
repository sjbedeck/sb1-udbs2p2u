import { BookOpenIcon, CodeIcon, FigmaIcon, RocketIcon, SparklesIcon, ZapIcon } from 'lucide-react'

import Header from '@/components/shadcn-studio/blocks/hero-section-33/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-33/hero-section-33'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-02'

const navigationData: Navigation[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Features',
    subtitle: 'Core Features',
    imgSubtitle: 'Workflow',
    contentClassName: '!w-130',
    items: [
      {
        icon: <FigmaIcon className='size-4' />,
        title: 'Figma Integration',
        href: '#',
        description: 'Turn Figma designs into clean, production-ready code instantly'
      },
      {
        icon: <CodeIcon className='size-4' />,
        title: 'Code Generation',
        href: '#',
        description: 'Save hours of manual development with automated code export'
      },
      {
        icon: <ZapIcon className='size-4' />,
        title: 'Fast Deployment',
        href: '#',
        description: 'From design to production in just a few clicks'
      }
    ],
    imageSection: {
      img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-69.png',
      href: '#',
      title: 'Design to Code',
      description: 'Seamless workflow from Figma to production'
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
        description: 'Comprehensive guides for quick setup and easy dev'
      },
      {
        icon: <RocketIcon className='size-4' />,
        title: 'Get Started',
        href: '#',
        description: 'Start now and learn more about our platform'
      },
      {
        icon: <SparklesIcon className='size-4' />,
        title: 'Templates',
        href: '#',
        description: 'Pre-built templates for faster development'
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
        title: 'Testimonials',
        href: '#'
      },
      {
        title: 'Contact',
        href: '#'
      }
    ]
  }
]

const testimonials = [
  {
    name: 'Paityn Lipshutz',
    role: 'CEO at Lemonsqueezy',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 4,
    content:
      'Excellent product—durable, intuitive, and exactly what I needed. Customer service was outstanding and very helpful.'
  },
  {
    name: 'Angel Lubin',
    role: 'Co Founder at Zipline',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png?width=40&height=40&format=auto',
    rating: 5,
    content:
      'Top-notch quality—easy to set up and performs as promised. The support team was incredibly responsive and attentive'
  },
  {
    name: 'Lincoln Stanton',
    role: 'CEO at Gumroad',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 5,
    content:
      'Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations'
  },
  {
    name: 'Skylar Lipshutz',
    role: 'Product manager at Orbit',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='bg-muted flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection testimonials={testimonials} />
      </main>
    </div>
  )
}

export default HeroSectionPage
