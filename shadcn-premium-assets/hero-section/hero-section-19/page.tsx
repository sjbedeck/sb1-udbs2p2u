import HeroSection from '@/components/shadcn-studio/blocks/hero-section-19/hero-section-19'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'
import Header from '@/components/shadcn-studio/blocks/hero-section-19/header'

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

const products = [
  {
    title: "Lays India's Masala Magic",
    description: 'Crispy, tangy, and totally addictive.',
    price: 10,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-32.png',
    buyNow: '#'
  },
  {
    title: 'Lays Classic Salted Potato',
    description: 'Turns every bite into a flavor explosion',
    price: 12,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-31.png',
    buyNow: '#'
  },
  {
    title: 'Lays Spanish Tomato Tango ',
    description: 'Packed with bold Indian spices.',
    price: 18,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-30.png',
    buyNow: '#'
  }
]

const ingredients = [
  {
    title: 'Creamy Kick',
    description: 'A smooth blend of rich sour cream that melts in your mouth with every bite.',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-51.png'
  },
  {
    title: 'Zesty Onion',
    description: 'Crispy stix coated with tangy onion seasoning for an unforgettable zing.',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-50.png'
  },
  {
    title: 'Herb-Infused ',
    description: 'A subtle touch of garden herbs to balance flavor and freshness perfectly.',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-49.png'
  }
]

const HeroSectionPage = () => {
  return (
    <div className="relative flex flex-col before:pointer-events-none before:absolute before:inset-0 before:size-full before:bg-[url('https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-48.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-60 dark:before:bg-[url('https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-48-dark.png')] dark:before:opacity-80">
      {/* Header Section */}
      <Header navigationData={navigationData} />
      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection products={products} ingredients={ingredients} />
      </main>
    </div>
  )
}

export default HeroSectionPage
