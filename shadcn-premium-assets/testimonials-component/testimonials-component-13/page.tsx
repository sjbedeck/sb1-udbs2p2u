import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-13/testimonials-component-13'
import type { TestimonialCardData } from '@/components/shadcn-studio/blocks/testimonials-component-13/testimonials-card'

const testimonialsList: TestimonialCardData[] = [
  {
    id: '1',
    name: 'Marley Catzoni',
    role: 'CEO & Co Founder',
    company: 'Lemonsqueezy',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.'
  },
  {
    id: '2',
    name: 'Craig Bator',
    role: 'CEO & Co Founder',
    company: 'Zipline',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations'
  },
  {
    id: '3',
    name: 'Martin Dorwart',
    role: 'CEO & Co Founder',
    company: 'Gumroad',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Impressive product—high quality, simple to use, and exactly as promised. Customer service was superb and very responsive.'
  },
  {
    id: '4',
    name: 'Alexandra Lee',
    role: 'Lead Developer',
    company: 'TechNova',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 5,
    content:
      'shadcn/studio components saved us so much time! The responsive designs and intuitive interface made our development process faster and more efficient.'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonialsList} />
}

export default TestimonialsComponentPage
