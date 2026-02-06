import Blog from '@/components/shadcn-studio/blocks/blog-component-11/blog-component-11'

const blogCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-47.png',
    alt: 'Landing Page Design',
    title: 'Landing Page Wins',
    description: 'Discover how we crafted a visually engaging and conversion-focused landing page for ConPLY.',
    blogLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-48.png',
    alt: 'Mobile App Interface',
    title: 'Designing for Better ROI',
    description: 'We designed a sleek identity verification dashboard for Rectangle&apos;s fintech app.',
    blogLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-49.png',
    alt: 'Digital Identity Design',
    title: 'Redefining Digital Identity',
    description: 'See how we reimagined Rectangle&apos;s ID verification with a minimalist, brand-focused design.',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogCards={blogCards} />
}

export default BlogPage
