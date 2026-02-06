import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-02/about-us-page-02'

const aboutUsData = {
  leftImage: {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-20.png',
    alt: 'Team collaboration',
    buttonText: 'Success story',
    buttonLink: '#'
  },
  rightImage: {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-19.png',
    alt: 'Office workspace',
    buttonText: 'About us',
    buttonLink: '#'
  },
  stats: [
    {
      value: '10K+',
      title: 'Completed Projects',
      description: 'Discuss key moments where creativity or unconventional thinking.'
    },
    {
      value: '15K+',
      title: 'Satisfied Customer',
      description: 'Highlight milestones—awards, completed projects, personal victories.'
    }
  ]
}

const AboutUsPage = () => {
  return <AboutUs aboutUs={aboutUsData} />
}

export default AboutUsPage
