import Header from '@/components/shadcn-studio/blocks/hero-section-37/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-37/hero-section-37'
import type { Navigation } from '@/components/shadcn-studio/blocks/hero-navigation-01'

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
        title: 'SEO',
        href: '#',
        description: 'Boost visibility and rank higher on search engines.'
      },
      {
        title: 'Social Media Marketing',
        href: '#',
        description: 'Grow your audience with targeted social strategies.'
      },
      {
        title: 'Real-Time Analytics',
        href: '#',
        description: 'Track performance instantly with live insights.'
      }
    ]
  },
  {
    title: 'About',
    href: '#'
  },
  {
    title: 'Testimonials',
    href: '#'
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
