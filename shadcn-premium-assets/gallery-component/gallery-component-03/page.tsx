import Gallery from '@/components/shadcn-studio/blocks/gallery-component-03/gallery-component-03'

const galleryImages = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-14.png',
    alt: 'Animals'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-15.png',
    alt: 'Mountain'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-16.png',
    alt: 'House'
  }
]

const GalleryPage = () => {
  return <Gallery galleryImages={galleryImages} />
}

export default GalleryPage
