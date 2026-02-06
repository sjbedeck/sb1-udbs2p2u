import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-18/about-us-page-18'

const stats = [
  {
    value: 50,
    description: 'Companies'
  },
  {
    value: 7,
    description: 'Years Of Experience'
  },
  {
    value: 10,
    description: 'Live Products'
  }
]

const AboutUsPage = () => {
  return <AboutUs stats={stats} />
}

export default AboutUsPage
