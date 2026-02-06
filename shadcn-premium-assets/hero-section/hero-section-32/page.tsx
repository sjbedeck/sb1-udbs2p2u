import Header from '@/components/shadcn-studio/blocks/hero-section-32/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-32/hero-section-32'
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

const upcomingShows = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-57.png',
    name: 'Phantom  Opera',
    time: '5:00 PM',
    date: 'Sun, Sep 12',
    showLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-58.png',
    name: 'Coldplay Live',
    time: '8:00 PM',
    date: 'Sat, Sep 3',
    showLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-59.png',
    name: 'Oppenheimer',
    time: '3:00 PM',
    date: 'Fri, Sep 5',
    showLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-60.png',
    name: 'Badlands',
    time: '10:00 PM',
    date: 'Fri, Sep 10',
    showLink: '#'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='flex flex-col'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection upcomingShows={upcomingShows} />
      </main>
    </div>
  )
}

export default HeroSectionPage
