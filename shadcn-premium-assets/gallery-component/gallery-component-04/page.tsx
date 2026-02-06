import Gallery from '@/components/shadcn-studio/blocks/gallery-component-04/gallery-component-04'

const GalleryImage = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-21.png',
    alt: 'Mountain lake reflection',
    className: 'col-span-2 row-span-2'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-20.png',
    alt: 'Coastal mountain'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-19.png',
    alt: 'Forest path'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-18.png',
    alt: 'Mountain range',
    className: 'col-span-2 max-h-60'
  }
]

const GalleryPage = () => {
  return <Gallery galleryImage={GalleryImage} />
}

export default GalleryPage
