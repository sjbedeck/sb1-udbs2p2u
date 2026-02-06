import Portfolio, { type PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-14/portfolio-14'

const portfolioItems: PortfolioItem[] = [
  {
    title: 'ID Verification UI',
    description:
      "Designed a sleek user interface for Rectangle's identity verification system streamlining the onboarding process.",
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-53.png',
    imageAlt: 'ID Verification UI Dashboard'
  },
  {
    title: 'PaySure Admin Console',
    description:
      'Built an admin dashboard for PaySure, enabling finance teams to manage user roles, payments, and reports.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-54.png',
    imageAlt: 'PaySure Admin Console Dashboard'
  },
  {
    title: 'Solaro Metrics Dashboard',
    description:
      'Created an interactive data dashboard for Solaro, a renewable energy platform. It visualizes live energy outputs, cost savings.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-55.png',
    imageAlt: 'Solaro Metrics Dashboard Interface'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolioItems={portfolioItems} />
}

export default PortfolioPage
