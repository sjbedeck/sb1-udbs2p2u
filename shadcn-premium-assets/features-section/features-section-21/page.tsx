import Features from '@/components/shadcn-studio/blocks/features-section-21/features-section-21'

const uiImages = [
  {
    id: '1',
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-04.png',
    alt: 'Image 1'
  },
  {
    id: '2',
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-05.png',
    alt: 'Image 2'
  },
  {
    id: '3',
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-06.png',
    alt: 'Image 3'
  }
]

const framerImages = [
  {
    id: '1',
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-01.png',
    alt: 'Modern UI Design'
  },
  {
    id: '2',
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-02.png',
    alt: 'Creative Illustrations'
  },
  {
    id: '3',
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-03.png',
    alt: 'Responsive Layouts'
  }
]

const skills = [
  'Figma',
  'UI Design',
  'UX Design',
  'Canva',
  'Blender',
  'Photoshop',
  'Research',
  'Graphics',
  'Copywriting'
]

const FeaturesPage = () => {
  return <Features uiImages={uiImages} framerImages={framerImages} skills={skills} />
}

export default FeaturesPage
