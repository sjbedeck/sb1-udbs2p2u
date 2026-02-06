import HeroSection from '@/components/shadcn-studio/blocks/hero-section-17/hero-section-17'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'
import Header from '@/components/shadcn-studio/blocks/hero-section-17/header'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
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
