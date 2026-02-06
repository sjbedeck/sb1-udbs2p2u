import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-04/testimonials-component-04'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-04/testimonials-component-04'

const testimonials: TestimonialItem[] = [
  {
    name: 'Marley Catzoni',
    role: 'CEO & Co Founder',
    company: 'Lemonsqueezy',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.'
  },
  {
    name: 'Craig Bator',
    role: 'CEO & Co Founder',
    company: 'Zipline',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations'
  },
  {
    name: 'Martin Dorwart',
    role: 'CEO & Co Founder',
    company: 'Gumroad',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'Impressive product—high quality, simple to use, and exactly as promised. Customer service was superb and very responsive.'
  },
  {
    name: 'Alexandra Lee',
    role: 'Lead Developer',
    company: 'TechNova',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 5,
    content:
      'shadcn/studio components saved us so much time! The responsive designs and intuitive interface made our development process faster and more efficient.'
  },
  {
    name: 'Jason Wu',
    role: 'Product Designer',
    company: 'InnovateX',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      "shadcn/studio design library helped us scale our UI design efforts while maintaining a consistent, professional look. Couldn't have asked for a better tool!"
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
