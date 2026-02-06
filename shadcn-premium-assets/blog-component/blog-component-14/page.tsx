import Blog from '@/components/shadcn-studio/blocks/blog-component-14/blog-component-14'

const blogEntries = [
  {
    category: 'Product Design',
    title: 'Rebuilding a Design System: What Changed',
    date: '20 July 2022',
    blogLink: '#'
  },
  {
    category: 'Engineering',
    title: 'How We Ship Without Breaking Things',
    date: '18 July 2025',
    blogLink: '#'
  },
  {
    category: 'UX Research',
    title: 'Rebuilding a Design System: What Changed',
    date: '16 July 2025',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogEntries={blogEntries} />
}

export default BlogPage
