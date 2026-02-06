import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-14/bento-grid-14'
import type { StackProps } from '@/components/shadcn-studio/blocks/bento-grid-14/card-stack'

const images: StackProps['cardsData'] = [
  {
    id: 4,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-55.png?width=398&format=auto',
    imgDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-55-dark.png?width=398&format=auto'
  },
  {
    id: 3,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-54.png?width=398&format=auto',
    imgDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-54-dark.png?width=398&format=auto'
  },
  {
    id: 2,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-53.png?width=398&format=auto',
    imgDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-53-dark.png?width=398&format=auto'
  },
  {
    id: 1,
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-52.png?width=398&format=auto',
    imgDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-52-dark.png?width=398&format=auto'
  }
]

const BentoGridPage = () => {
  return <BentoGrid images={images} />
}

export default BentoGridPage
