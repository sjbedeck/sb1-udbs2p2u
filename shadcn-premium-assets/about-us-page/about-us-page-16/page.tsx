import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-16/about-us-page-16'

const data = [
  {
    title: 'Approach',
    bgColor: 'bg-sky-600/50 dark:bg-sky-400/40'
  },
  {
    title: 'Code Agency',
    bgColor: 'bg-green-600/50 dark:bg-green-400/40'
  },
  {
    title: 'Marketing Strategy',
    bgColor: 'bg-amber-600/50 dark:bg-amber-400/40'
  }
]

const images = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-27.png',
    title: 'Development'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-28.png',
    title: 'UI/UX Designer'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-29.png',
    title: 'Marketing'
  }
]

const AboutUsPage = () => {
  return <AboutUs data={data} images={images} />
}

export default AboutUsPage
