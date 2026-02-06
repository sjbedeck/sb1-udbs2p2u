import ProductReviews from '@/components/shadcn-studio/blocks/product-reviews-03/product-reviews-03'

const reviewsData = [
  {
    id: 1,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-2.png',
    name: "Men's Cricket Woven Pants",
    rating: 4.5,
    date: '10-07-2025',
    description:
      'Ideal for workouts, these training shorts offer flexibility and breathability. Reviewers highlight their comfortable',
    iconImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-15.png',
    iconName: 'Puma',
    discountedPrice: 84,
    price: 100
  },
  {
    id: 2,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-1.png',
    name: 'Nike Victory',
    rating: 4.5,
    date: '10-07-2025',
    description:
      "The Nike Victory Women's Dri-FIT Golf Polo is lightweight, breathable, and moisture-wicking, offering comfort and style for golfers.",
    iconImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-16.png',
    iconName: 'Nike',
    discountedPrice: 54,
    price: 87
  },
  {
    id: 3,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-10.png',
    name: 'Adidas T-shirt',
    rating: 4.5,
    date: '10-07-2025',
    description:
      'This classic Adidas T-shirt features premium cotton fabric and the iconic three-stripe design. Reviewers love its perfect fit and durability.',
    iconImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-14.png',
    iconName: 'Adidas',
    discountedPrice: 25,
    price: 39
  },
  {
    id: 4,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-11.png',
    name: 'Nike Jordans',
    rating: 4.5,
    date: '08-01-2025',
    description:
      'The iconic Air Jordan silhouette delivers exceptional comfort and style. Reviewers praise its premium materials and timeless design for youths.',
    iconImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-reviews/image-16.png',
    iconName: 'Nike',
    discountedPrice: 110,
    price: 169
  }
]

const ProductReviewPage = () => {
  return <ProductReviews reviewItems={reviewsData} />
}

export default ProductReviewPage
