import Gallery from '@/components/shadcn-studio/blocks/gallery-component-05/gallery-component-05'

const GalleryImage = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-27.png',
    alt: 'Image',
    className: ' col-span-2 max-h-60'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-24.png',
    alt: 'Image',
    className: 'row-span-2 col-span-2'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-23.png',
    alt: 'Image',
    className: 'col-span-2  max-h-60'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-26.png',
    alt: 'Image',
    className: 'max-h-60'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-25.png',
    alt: 'Image',
    className: 'max-h-60'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-22.png',
    alt: 'Image',
    className: 'col-span-2 max-h-60'
  }
]

const GalleryPage = () => {
  return <Gallery galleryImage={GalleryImage} />
}

export default GalleryPage
