import Portfolio, { type PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-16/portfolio-16'

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Smart Workspace',
    description: 'An intelligent task planning, seamless collaboration, and real-time workflow creation.',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-76.png',
    imageAlt: 'Smart Workspace',
    backgroundColor: 'bg-green-600/10 dark:bg-green-400/10 hover:bg-green-600/20 dark:hover:bg-green-400/20',
    btnColor:
      'bg-green-600 text-white hover:bg-green-600 focus-visible:ring-green-600 dark:bg-green-400 dark:hover:bg-green-400 dark:focus-visible:ring-green-400'
  },
  {
    id: 2,
    title: 'Beauty Hub',
    description:
      'A stylish beauty discovery platform featuring curated product collections, influential artists and skincare tools.',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-77.png',
    imageAlt: 'Beauty Hub',
    backgroundColor: 'bg-sky-600/10 dark:bg-sky-400/10 hover:bg-sky-600/20 dark:hover:bg-sky-400/20',
    btnColor:
      'bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400'
  },
  {
    id: 3,
    title: 'Styled AI',
    description: 'A machine learning-powered outfit personalized recommendations, simplifies shopping.',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-75.png',
    imageAlt: 'Styled AI',
    backgroundColor: 'bg-amber-600/10 dark:bg-amber-400/10 hover:bg-amber-600/20 dark:hover:bg-amber-400/20',
    btnColor:
      'bg-amber-600 text-white hover:bg-amber-600 focus-visible:ring-amber-600 dark:bg-amber-400 dark:hover:bg-amber-400 dark:focus-visible:ring-amber-400'
  },
  {
    id: 4,
    title: 'QuickEats',
    description: 'A fast and flexible food delivery platform built for modern lifestyles.',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-74.png',
    imageAlt: 'QuickEats',
    backgroundColor: 'bg-red-600/10 dark:bg-red-400/10 hover:bg-red-600/20 dark:hover:bg-red-400/20',
    btnColor:
      'bg-red-600 text-white hover:bg-red-600 focus-visible:ring-red-600 dark:bg-red-400 dark:hover:bg-red-400 dark:focus-visible:ring-red-400'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolioItems={portfolioItems} />
}

export default PortfolioPage
