import HeroSection from '@/components/shadcn-studio/blocks/hero-section-20/hero-section-20'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'
import Header from '@/components/shadcn-studio/blocks/hero-section-20/header'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Services',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Testimonials',
    href: '#'
  }
]

const HeroSectionPage = () => {
  return (
    <div className="relative flex flex-col overflow-x-hidden bg-black before:pointer-events-none before:absolute before:inset-0 before:size-full before:bg-[url('https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-53.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-60">
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
