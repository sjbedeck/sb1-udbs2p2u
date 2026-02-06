import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-15/testimonials-component-15'

const testimonials = [
  {
    name: 'Craig Bator',
    role: 'CEO & Co-Founder',
    company: 'Zendesk',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-23.png',
    content:
      "ThemeSelection's admin template exceeded my expectations. Its clean architecture and thoughtful design patterns made our development process faster and more enjoyable. The UI feels modern and intuitive."
  },
  {
    name: 'Martin Dorwart',
    role: 'Product Manager',
    company: 'Orbit',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-24.png',
    content:
      'The template offers excellent flexibility and structure. It helped our team prototype ideas quickly and maintain consistency across the product. A great tool for scaling design systems.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    company: 'Figma',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-25.png',
    content:
      "As a designer, I appreciate the attention to detail in every component. Everything feels polished and pixel-perfect. It's one of the best starter templates I've worked with."
  },
  {
    name: 'Daniel Rivera',
    role: 'Senior Frontend Engineer',
    company: 'Stripe',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/image-26.png',
    content:
      'The code quality is outstanding. The template integrates smoothly with our existing stack and reduces onboarding time for new engineers. Highly recommend it for any modern web project.'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
