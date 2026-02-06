import Features from '@/components/shadcn-studio/blocks/features-section-15/features-section-15'

const tabs = [
  {
    name: 'One Click Analytics',
    value: 'analytics',
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-28.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-28-dark.png'
  },
  {
    name: 'Real-Time Data Monitoring',
    value: 'monitoring',
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-27.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-27-dark.png'
  },
  {
    name: 'Custom Dashboard Creation',
    value: 'creation',
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-37.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-37-dark.png'
  },
  {
    name: 'Interactive Reporting Tools',
    value: 'tools',
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-38.png',
    darkSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-38-dark.png'
  }
]

const FeaturesPage = () => {
  return <Features tabs={tabs} />
}

export default FeaturesPage
