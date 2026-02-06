import Portfolio, { type PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-15/portfolio-15'

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Quantive Analytics Dashboard',
    description:
      'Designed a powerful, AI-enhanced analytics dashboard for Quantive a B2B SaaS platform helping startups and enterprises.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-69.png',
    imageAlt: 'Quantive Analytics Dashboard Interface',
    category: ['Content Writing', 'Web Development']
  },
  {
    title: 'LifestyleLoop Blog Platform',
    description:
      'Developed a modern, editorial-style blog website for LifestyleLoop – a digital publication covering wellness, culture, and productivity.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-70.png',
    imageAlt: 'LifestyleLoop Blog Platform Interface',
    category: ['Web Design', 'Product Management']
  },
  {
    title: 'Dailywise Productivity UI',
    description:
      'Designed a playful, illustrated productivity dashboard concept for Dailywise a tool aimed at helping remote teams manage habits, goals.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-71.png',
    imageAlt: 'Dailywise Productivity UI Dashboard',
    category: ['UI/UX Design', 'Graphic Design']
  },
  {
    title: 'Minta Interiors Website',
    description:
      'Built a clean, visually-driven site for Minta Interiors a boutique interior design studio which focused on showcasing portfolio pieces.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-72.png',
    imageAlt: 'Minta Interiors Website Interface',
    category: ['Web Design', 'Content Writing']
  },
  {
    title: 'TechFlow Documentation Platform',
    description:
      'Created a comprehensive documentation platform for TechFlow, featuring interactive guides and API references.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-55.png',
    imageAlt: 'TechFlow Documentation Platform',
    category: ['Product Management', 'Web Development']
  },
  {
    title: 'CreativeSpace Portfolio',
    description:
      'Designed a stunning portfolio website for CreativeSpace, showcasing their design work with elegant animations.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-72.png',
    imageAlt: 'CreativeSpace Portfolio Website',
    category: ['Graphic Design', 'UI/UX Design']
  },
  {
    title: 'EcoTech Mobile Application',
    description:
      'Developed a sustainable technology mobile app that connects users with eco-friendly products and green initiatives.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-54.png',
    imageAlt: 'EcoTech Mobile Application Interface',
    category: ['Web Development', 'Product Management']
  },
  {
    title: 'FinanceFlow Dashboard',
    description:
      'Created a comprehensive financial management dashboard for small businesses with real-time analytics and reporting.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-53.png',
    imageAlt: 'FinanceFlow Dashboard Interface',
    category: ['Content Writing', 'Web Development']
  },
  {
    title: 'HealthTracker Pro',
    description:
      'Designed a modern health tracking application focused on wellness monitoring and personalized health insights.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-70.png',
    imageAlt: 'HealthTracker Pro Interface',
    category: ['UI/UX Design', 'Graphic Design']
  },
  {
    title: 'RetailSpace E-commerce',
    description:
      'Built a complete e-commerce solution with advanced inventory management and customer engagement tools.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-69.png',
    imageAlt: 'RetailSpace E-commerce Platform',
    category: ['Web Design', 'UI/UX Design']
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolioItems={portfolioItems} />
}

export default PortfolioPage
