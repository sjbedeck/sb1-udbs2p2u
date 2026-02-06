import Gallery from '@/components/shadcn-studio/blocks/gallery-component-02/gallery-component-02'

const galleryTabs = [
  {
    name: 'Home',
    value: 'home',
    items: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-70.png',
        title: 'Denta'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-49.png',
        title: 'Eduweks'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-53.png',
        title: 'Sicio'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-57.png',
        title: 'Uidino'
      }
    ]
  },
  {
    name: 'Pages',
    value: 'pages',
    items: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-71.png',
        title: 'Lattice'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-72.png',
        title: 'WonderKids'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-54.png',
        title: 'HH'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-56.png',
        title: 'Blue Peak'
      }
    ]
  },
  {
    name: 'Templates',
    value: 'templates',
    items: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-13.png',
        title: 'Materio Admin Dashboard'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-12.png',
        title: 'Vuexy Admin Dashboard'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-11.png',
        title: 'Sneat Admin Dashboard'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-55.png',
        title: 'Materialize Admin Dashboard'
      }
    ]
  },
  {
    name: 'UI Elements',
    value: 'ui-elements',
    items: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-50.png',
        title: 'EventSphere'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-51.png',
        title: 'Wealth Management'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-52.png',
        title: 'Password Manager'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-73.png',
        title: 'Travel Buddy'
      }
    ]
  }
]

const GalleryPage = () => {
  return <Gallery tabs={galleryTabs} />
}

export default GalleryPage
