import ProductReviews from '@/components/shadcn-studio/blocks/product-reviews-04/product-reviews-04'

const reviewsData = [
  {
    id: 1,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
    name: 'Cristofer Torff',
    verified: true,
    rating: 4.5,
    description:
      "Almost complete building my replacement website and very pleased with the result. although the customization is freate the theme's features and customer support have also been great.",
    date: '5-1-2025',
    reviewLiked: 25,
    reviewUnLiked: 1
  },
  {
    id: 2,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'Cris Baptista',
    verified: true,
    rating: 4.5,
    description:
      'Really nicely designed theme and quite fast loading. the quickness of page loads you can really appreciateonce you turn off page transation theme options. Custom support was really quick to respond to all my questions and resolve all my issues.',
    date: '11-12-2023',
    reviewLiked: 33,
    reviewUnLiked: 3
  },
  {
    id: 3,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    name: 'Cheyenne',
    verified: true,
    rating: 4.5,
    description:
      "Very high quality theme and perfect for any business modal that wants to showcase it's products or services. Great work!",
    date: '8-11-2023',
    reviewLiked: 20,
    reviewUnLiked: 0
  }
]

const ProductReviewPage = () => {
  return <ProductReviews reviewItems={reviewsData} />
}

export default ProductReviewPage
