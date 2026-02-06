import Gallery from '@/components/shadcn-studio/blocks/gallery-component-06/gallery-component-06'

const galleryData = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-33.png',
    alt: 'Image'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-31.png',
    alt: 'Image',
    className: 'row-span-2'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-29.png',
    alt: 'Image'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-32.png',
    alt: 'Image',
    className: 'row-span-2'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-28.png',
    alt: 'Image',
    className: 'md:row-span-2'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-30.png',
    alt: 'Image'
  }
]

const GalleryPage = () => {
  return <Gallery GalleryImage={galleryData} />
}

export default GalleryPage
