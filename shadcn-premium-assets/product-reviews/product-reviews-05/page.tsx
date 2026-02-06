import ProductReviews from '@/components/shadcn-studio/blocks/product-reviews-05/product-reviews-05'

const reviewsData = [
  {
    id: 1,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
    name: 'Michael Gough',
    verified: true,
    rating: 4.5,
    description:
      "Almost complete building my replacement website and very pleased with the result. although the customization is freate the theme's features and customer support have also been great.",
    date: 'November 18 2023',
    helpfull: 2,
    title: 'Fast and reliable',
    time: '15:08'
  },
  {
    id: 2,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Jese Leos',
    verified: true,
    rating: 4.5,
    description:
      'Really nicely designed theme and quite fast loading. the quickness of page loads you can really appreciate once you turn off page transition theme options. Custom support was really quick to respond to all my questions and resolve all my issues.',
    date: 'October 19 2023',
    helpfull: 2,
    title: "Finally went back to a 'desktop' ",
    time: '21:21'
  },
  {
    id: 3,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    name: 'John Doe',
    verified: true,
    rating: 4.5,
    description: "Great packaging and fast delivery. Product works perfectly and I'm very satisfied.",
    date: 'October 19 2023',
    helpfull: 1,
    title: 'Amazing Packaging',
    time: '21:21'
  },
  {
    id: 4,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Jese Leos',
    verified: true,
    rating: 4.5,
    description:
      'Really nicely designed theme and quite fast loading. the quickness of page loads you can really appreciate once you turn off page transition theme options. Custom support was really quick to respond to all my questions and resolve all my issues.',
    date: 'October 19 2023',
    helpfull: 2,
    title: "Finally went back to a 'desktop' ",
    time: '21:21'
  },
  {
    id: 5,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    name: 'John Doe',
    verified: true,
    rating: 4.5,
    description: "Great packaging and fast delivery. Product works perfectly and I'm very satisfied.",
    date: 'October 19 2023',
    helpfull: 1,
    title: 'Amazing Packaging',
    time: '21:21'
  },
  {
    id: 6,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'John Doe',
    verified: true,
    rating: 4.5,
    description: "Great packaging and fast delivery. Product works perfectly and I'm very satisfied.",
    date: 'October 19 2023',
    helpfull: 1,
    title: 'Amazing Packaging',
    time: '21:21'
  }
]

const ProductReviewPage = () => {
  return <ProductReviews reviewItems={reviewsData} />
}

export default ProductReviewPage
