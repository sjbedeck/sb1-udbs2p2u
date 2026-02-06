import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-16/testimonials-component-16'

const testimonials = [
  {
    name: 'Craig Bator',
    role: 'CEO',
    company: 'Zendesk',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-27.png',
    className: 'bg-amber-600/20 dark:bg-amber-400/20'
  },
  {
    name: 'Martin Dorwart',
    role: 'Product Manager',
    company: 'Orbit',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-28.png',
    className: 'bg-green-600/20 dark:bg-green-400/20'
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    company: 'Figma',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-29.png',
    className: 'bg-primary/20'
  },
  {
    name: 'Daniel Rivera',
    role: 'CFO',
    company: 'Stripe',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-29-1.png',
    className: 'bg-sky-600/20 dark:bg-sky-400/20'
  },
  {
    name: 'Jakob Korsgaard',
    role: 'Co Founder',
    company: 'Oracle',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-30.png',
    className: 'bg-destructive/20'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
