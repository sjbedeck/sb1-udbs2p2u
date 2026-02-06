import Blog from '@/components/shadcn-studio/blocks/blog-component-12/blog-component-12'

const blogCards = [
  {
    title: 'How We Scaled Our Design System Across 5 Product',
    description:
      'A deep dive into how we unified UX patterns and components across multiple teams and platforms—without breaking anything.',
    blogLink: '#',
    bgColor: 'bg-primary/20',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-51.png?width=186',
    alt: 'Design System',
    gridSpan: 'xl:col-span-2'
  },
  {
    title: 'Inside Our Onboarding Redesign',
    description: 'How we improved activation by 26% through UX research, simplified flows, and smarter microcopy.',
    blogLink: '#',
    bgColor: 'bg-green-600/20 dark:bg-green-400/20'
  },
  {
    title: 'API Docs that Don’t Suck',
    description:
      'We reimagined our developer documentation to make it faster to write, easier to navigate, and actually helpful.',
    blogLink: '#',
    bgColor: 'bg-amber-600/20 dark:bg-amber-400/20'
  },
  {
    title: 'Figma to Code: What Works (and What Doesn’t)',
    description:
      'Our product team shares the workflows, plugins, and process hacks we use to keep design and dev in sync.',
    blogLink: '#',
    bgColor: 'bg-destructive/20'
  },
  {
    title: 'Why We Rebuilt Our Frontend from Scratch',
    description:
      'What started as a few refactors turned into a full-blown rebuild. Here&apos;s why we did it—and what we&apos;d do differently next time.',
    blogLink: '#',
    bgColor: 'bg-sky-600/20 dark:bg-sky-400/20'
  },
  {
    title: 'We Thought Our UX Was Great — Until We Watched Real Users',
    description:
      'Usability testing opened our eyes to friction points we never noticed. Here&apos;s what we learned (and fixed).',
    blogLink: '#',
    bgColor: 'bg-primary/20',
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-52.png?width=195',
    alt: 'User Testing',
    gridSpan: 'xl:col-span-2'
  }
]

const BlogPage = () => {
  return <Blog blogCards={blogCards} />
}

export default BlogPage
