import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-10/testimonials-component-10'

const testimonials = [
  {
    name: 'Craig Bator',
    role: 'CEO & Co Founder',
    company: 'Zendesk',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-16.png',
    content: "ThemeSelection's admin template impresses me with its code structure, quality, and UI design."
  },
  {
    name: 'Martin Dorwart',
    role: 'Product manager',
    company: 'Orbit',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-17.png',
    content: 'shadcn/studio makes tracking my investments simple, clear, and effortless.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    company: 'Figma',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-18.png',
    content: 'The components are crafted and streamline our design process with clean, reliable UI patterns.'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
