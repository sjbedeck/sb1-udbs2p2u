import { GlassWaterIcon, SearchIcon, MonitorPlayIcon, PackageIcon } from 'lucide-react'

import Portfolio, { type PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-13/portfolio-13'

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Buy Cane',
    description:
      'Refresh your senses with bold, flavorful experiences. Our AI-driven supply and flavor profiling helps bring your perfect drink to life, anytime, anywhere.',
    features: [
      {
        id: 'f1',
        title: 'Flavor Match',
        description: 'Discover your perfect cold drink with personalized flavor.',
        icon: <GlassWaterIcon />
      },
      {
        id: 'f2',
        title: 'Smart Shelf',
        description: "AI-enhanced inventory helps to find what they're craving.",
        icon: <SearchIcon />
      },
      {
        id: 'f3',
        title: 'Dynamic Promotions',
        description: 'Tailored deals and seasonal flavors delivered to you.',
        icon: <MonitorPlayIcon />
      },
      {
        id: 'f4',
        title: 'Sustainable Bottling',
        description: 'Smart routes and sustainable packaging for a greener sip.',
        icon: <PackageIcon />
      }
    ],
    images: ['https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-56.png'],
    projects: [
      {
        id: 'p1',
        title: 'BitPocket',
        description: 'Simple, secure micro-payments for everyday use.',
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-57.png',
        backgroundColor: 'bg-sky-600/10 dark:bg-sky-400/10'
      },
      {
        id: 'p2',
        title: 'AgroSense',
        description: 'Smart crop insights to boost farm efficiency.',
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-58.png',
        backgroundColor: 'bg-green-600/10 dark:bg-green-400/10'
      },
      {
        id: 'p3',
        title: 'Blue Bank Dashboard',
        description: 'Clear and concise financial tracking at a glance.',
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-59.png',
        backgroundColor: 'bg-red-600/10 dark:bg-red-400/10'
      },
      {
        id: 'p4',
        title: 'BlueMetrics Analytics',
        description: 'Actionable insights derived from real-time data analytics.',
        image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-60.png',
        backgroundColor: 'bg-primary/10'
      }
    ]
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolioItems={portfolioItems} />
}

export default PortfolioPage
