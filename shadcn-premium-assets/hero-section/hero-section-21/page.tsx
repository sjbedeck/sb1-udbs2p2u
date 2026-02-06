import Header from '@/components/shadcn-studio/blocks/hero-section-21/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-21/hero-section-21'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

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
    title: 'About us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  }
]

const destinations = [
  {
    title: 'Dubai Desert Adventure',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-25.png',
    description: '7 Days/6 Night',
    rating: 4.5
  },
  {
    title: 'Bali: Where Serenity Lives 🧘',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-24.png',
    description: '9 Days/8 Night',
    rating: 4.5
  },
  {
    title: 'Maldives Magic Unlocked 🌊',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-23.png',
    description: '8 Days/7 Night',
    rating: 4.5
  }
]

const HeroSectionPage = () => {
  return (
    <div className='flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex h-full flex-1 flex-col'>
        <HeroSection destinations={destinations} avatars={avatars} />
      </main>
    </div>
  )
}

export default HeroSectionPage
