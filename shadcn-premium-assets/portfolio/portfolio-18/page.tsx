import Portfolio, { type PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-18/portfolio-18'

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Lay's wafer",
    description: 'E-Commerce Website',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-14.png',
    imageAlt: "Lay's wafer project"
  },
  {
    id: 2,
    title: 'Just Website',
    description: 'SaaS Product Website',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-15.png',
    imageAlt: 'Just Website project'
  },
  {
    id: 3,
    title: 'Astro AI',
    description: 'AI Website ',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-16.png',
    imageAlt: 'Astro AI project'
  },
  {
    id: 4,
    title: 'John Doe',
    description: 'Portfolio Website',
    link: '#',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-17.png',
    imageAlt: 'John Doe project'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolioItems={portfolioItems} />
}

export default PortfolioPage
