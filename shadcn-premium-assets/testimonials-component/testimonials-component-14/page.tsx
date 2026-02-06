import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-14/testimonials-component-14'

const testimonials = [
  {
    name: 'Craig Bator',
    role: 'CEO & Co-Founder',
    company: 'Zendesk',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-19.png',
    content:
      "ThemeSelection's admin template exceeded my expectations. Its clean architecture and thoughtful design patterns made our development process faster and more enjoyable. The UI feels modern and intuitive.",
    rating: 4.5
  },
  {
    name: 'Martin Dorwart',
    role: 'Product Manager',
    company: 'Orbit',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-20.png',
    content:
      'The template offers excellent flexibility and structure. It helped our team prototype ideas quickly and maintain consistency across the product. A great tool for scaling design systems.',
    rating: 4
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    company: 'Figma',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-21.png',
    content:
      'As a designer, I appreciate the attention to detail in every component. Everything feels polished and pixel-perfect. It’s one of the best starter templates I’ve worked with.',
    rating: 5
  },
  {
    name: 'Daniel Rivera',
    role: 'Senior Frontend Engineer',
    company: 'Stripe',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-22.png',
    content:
      'The code quality is outstanding. The template integrates smoothly with our existing stack and reduces onboarding time for new engineers. Highly recommend it for any modern web project.',
    rating: 5
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
