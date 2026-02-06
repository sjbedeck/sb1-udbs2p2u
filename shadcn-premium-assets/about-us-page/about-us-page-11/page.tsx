import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-11/about-us-page-11'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    fallback: 'MC',
    name: 'Michael Chen'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    fallback: 'SD',
    name: 'Sarah Davis'
  }
]

const logos = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo-bw.png',
    alt: 'Amazon'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo-bw.png',
    alt: 'Walmart'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo-bw.png',
    alt: 'HubSpot'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo-bw.png',
    alt: 'Microsoft'
  }
]

const AboutUsPage = () => {
  return <AboutUs avatars={avatars} logos={logos} />
}

export default AboutUsPage
