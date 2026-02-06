import Header from '@/components/shadcn-studio/blocks/hero-section-14/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-14/hero-section-14'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Features',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative flex flex-col bg-black'>
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
