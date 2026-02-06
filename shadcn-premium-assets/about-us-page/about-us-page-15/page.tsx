import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-15/about-us-page-15'

const features1 = {
  title: 'Building a Sustainable Future',
  description:
    'offers concise summaries of over 6,500 nonfiction books, each designed to be read or listened offers concise summaries of over 6,500 nonfiction books, each designed to be read or listened. offers concise summaries of over 6,500 nonfiction books, each designed to be read or .',
  imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-31.png',
  imageAlt: 'Quick summaries illustration',
  url: '#'
}

const features2 = {
  title: 'Transforming  Landscape Engineering',
  description:
    'offers concise summaries of over 6,500 nonfiction books, each designed to be  listened offers concise summaries of over 6,500 nonfiction books, each designed to be read or listened.',
  imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-30.png',
  imageAlt: 'Request payments illustration',
  url: '#',
  stats: [
    {
      title: '100+',
      description: 'Projects Completed'
    },
    {
      title: '50+',
      description: 'Years of experience'
    },
    {
      title: '123+',
      description: 'Qualified Workers'
    },
    {
      title: '89+',
      description: 'Satisfied Clients'
    }
  ]
}

const AboutUsPage = () => {
  return <AboutUs features1={features1} features2={features2} />
}

export default AboutUsPage
