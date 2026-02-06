import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-14/contact-us-page-14'

const companyLogos = [
  {
    name: 'Daily.dev',
    src: 'https://cdn.shadcnstudio.com/ss-assets/feature/daily-dev-logo.png',
    alt: 'Daily.dev',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/feature/daily-dev-logo-dark.png'
  },
  {
    name: 'Y Combinator',
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ycombinator-logo-bw.png',
    alt: 'Y Combinator'
  },
  {
    name: 'BestofJS',
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/bestofjs-logo-bw.png',
    alt: 'BestofJS'
  },
  {
    name: 'Product Hunt',
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/product-hunt-logo-bw.png',
    alt: 'Product Hunt'
  },
  {
    name: 'Reddit',
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/reddit-logo-bw.png',
    alt: 'Reddit',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/feature/reddit-logo-dark.png'
  },
  {
    name: 'Medium',
    src: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/medium-logo-bw.png',
    alt: 'Medium'
  }
]

const ContactUsPage = () => {
  return <ContactUs companyLogos={companyLogos} />
}

export default ContactUsPage
