import Features from '@/components/shadcn-studio/blocks/features-section-28/features-section-28'

const featuresData = [
  {
    badge: 'Automatic Cleaning',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-07.png',
    quote: "By automating lead qualification and follow-up tasks, we've focused on high-impact sales activities",
    link: '#'
  },
  {
    badge: 'Smart Home Integration',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-08.png',
    quote: 'Smart home integration has revolutionized how we manage our daily routines and household efficiency',
    link: '#'
  },
  {
    badge: 'Reliable Maintenance',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-09.png',
    quote: 'Reliable maintenance ensures our home systems run smoothly without constant manual intervention',
    link: '#'
  },
  {
    badge: 'Laundry Assistance',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-10.png',
    quote: 'Automated laundry assistance saves hours every week, giving us more time for what matters most',
    link: '#'
  },
  {
    badge: 'Hands-Free Help',
    image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-11.png',
    quote: 'Hands-free help allows us to multitask efficiently while maintaining a clean and organized home',
    link: '#'
  }
]

const FeaturesPage = () => {
  return <Features featuresData={featuresData} />
}

export default FeaturesPage
