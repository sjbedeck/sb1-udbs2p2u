import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-07/testimonials-component-07'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-07/testimonials-component-07'

const testimonials: TestimonialItem[] = [
  {
    name: 'Lindsey Rhiel Madsen',
    email: 'eanderson@icloud.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png?width=92&height=92&format=auto',
    rating: 4.5,
    content:
      'shadcn/studio has made designing my web applications effortless. The components are easy to customize and integrate seamlessly!'
  },
  {
    name: 'Terry Westervelt',
    email: 'cmoore@yahoo.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png?width=92&height=92&format=auto',
    rating: 4.5,
    content:
      'Using shadcn/studio has made my projects intuitive and efficient. The documentation is clear, making it easy to get started!'
  },
  {
    name: 'Lydia Dokidis',
    email: 'wthompson@outlook.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png?width=92&height=92&format=auto',
    rating: 4.5,
    content:
      'shadcn/studio is perfect for prototyping! The components let me focus on functionality without sacrificing design.'
  },
  {
    name: 'James Press',
    email: 'nlopez@gmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png?width=92&height=92&format=auto',
    rating: 4.5,
    content: "The community around shadcn/studio is fantastic! I've received support, making my experience better."
  },
  {
    name: 'Sarah K. Williams',
    email: 'sarah.williams@outlook.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png?width=92&height=92&format=auto',
    rating: 4.5,
    content:
      "The best design library I've ever used. shadcn/studio responsive components make development smooth and fast."
  },
  {
    name: 'James P. Watson',
    email: 'james.watson@protonmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png?width=92&height=92&format=auto',
    rating: 4,
    content:
      'As a designer, shadcn/studio saves me so much time. The components are not only sleek but also incredibly flexible.'
  },
  {
    name: 'Olivia M. Carter',
    email: 'olivia.carter@company.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png?width=92&height=92&format=auto',
    rating: 4.5,
    content:
      "Using shadcn/studio has sped up my workflow exponentially. The designs are beautiful, and it's a joy to work with."
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
