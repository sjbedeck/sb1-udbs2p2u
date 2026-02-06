import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-18/bento-grid-18'
import type { StackProps } from '@/components/shadcn-studio/blocks/bento-grid-18/card-stack'

const images: StackProps['cardsData'] = [
  {
    id: 5,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-86.png',
    avatars: [
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png', fallback: 'AB' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png', fallback: 'JK' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png', fallback: 'OP' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png', fallback: 'NP' }
    ],
    title: 'React Calendar library',
    days: 1,
    href: '#'
  },
  {
    id: 4,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-85.png',
    avatars: [
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png', fallback: 'AB' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png', fallback: 'JK' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png', fallback: 'OP' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png', fallback: 'NP' }
    ],
    title: 'Pen tool in figma',
    days: 4,
    href: '#'
  },
  {
    id: 3,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-84.png',
    avatars: [
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png', fallback: 'AB' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png', fallback: 'JK' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png', fallback: 'OP' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png', fallback: 'NP' }
    ],
    title: 'Bootstrap Calendar library',
    days: 5,
    href: '#'
  },
  {
    id: 2,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-87.png',
    avatars: [
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png', fallback: 'AB' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png', fallback: 'JK' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png', fallback: 'OP' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png', fallback: 'NP' }
    ],
    title: 'Landing page design in figma',
    days: 7,
    href: '#'
  },
  {
    id: 1,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-83.png',
    avatars: [
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png', fallback: 'AB' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png', fallback: 'JK' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png', fallback: 'OP' },
      { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png', fallback: 'NP' }
    ],
    title: 'React Calendar library',
    days: 6,
    href: '#'
  }
]

const BentoGridPage = () => {
  return <BentoGrid images={images} />
}

export default BentoGridPage
