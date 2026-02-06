import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-23/about-us-page-23'

const aboutData = {
  badge: 'DataVerse',
  heading: 'Understand your performance with real-time analytics',
  description:
    'Shadcn Studio simplifies your marketing analytics workflow, saving you time and resources. Get accurate, real-time data to track growth, and make smarter decisions.'
}

const AboutUsPage = () => {
  return <AboutUs {...aboutData} />
}

export default AboutUsPage
