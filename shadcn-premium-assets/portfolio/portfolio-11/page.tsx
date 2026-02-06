import Portfolio, { type PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-11/portfolio-11'

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Heritage Glow – Website Copywriting & Content Strategy',
    description:
      "Developed an authentic copy for a classic, sophisticated skincare brand with a focus on heritage and time-tested ingredients. The goal was to create content that not only reflected the brand's mission and values but also resonated with modern, conscious consumers.",
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-68.png',
    badges: [
      {
        text: 'Web Design',
        className:
          'border-none bg-sky-600/10 text-sky-600 focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 [a&]:hover:bg-sky-600/5 dark:[a&]:hover:bg-sky-400/5'
      },
      {
        text: 'Copywriting',
        className:
          'border-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
      }
    ]
  },
  {
    title: 'Nexora Tech – Website & SaaS Platform Content',
    description:
      'For Nexora Tech, an early-stage SaaS startup offering AI-driven productivity tools for remote teams, I crafted and optimized content across the clearly defined user journey with a friendly, engaging tone, making complex technology in a simple, engaging voice.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-67.png',
    badges: [
      {
        text: 'SaaS Platform',
        className:
          'border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5'
      },
      {
        text: 'Web Development',
        className:
          'border-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
      }
    ]
  },
  {
    title: 'A Fintech Mobile App That Blends Simplicity with Financial Power',
    description:
      'We designed a modern finance app that helps users track expenses, manage budgets, and gain real-time financial insights. With a focus on simplicity, security, and trust, the UI balances clean design with powerful tools—giving users full control over their money, anytime and anywhere.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-66.png',
    badges: [
      {
        text: 'UI/UX Design',
        className:
          'border-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
      },
      {
        text: 'Mobile App',
        className:
          'border-none bg-sky-600/10 text-sky-600 focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 [a&]:hover:bg-sky-600/5 dark:[a&]:hover:bg-sky-400/5'
      }
    ]
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolioItems={portfolioItems} />
}

export default PortfolioPage
