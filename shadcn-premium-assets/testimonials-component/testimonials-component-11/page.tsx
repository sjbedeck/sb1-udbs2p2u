import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-11/testimonials-component-11'

const testimonials = [
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
      'shadcn/studio components saved us so much time! The responsive designs made our development process faster.'
  },
  {
    name: 'Jason Wu',
    role: 'Product Designer',
    company: 'InnovateX',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png?width=40&height=40&format=auto',
    rating: 4.5,
    content:
      'shadcn/studio design library helped us scale our UI design efforts while maintaining a consistent, professional look.'
  }
]

const avatars = [
  { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png', className: 'top-[50%] left-[8%]' },
  { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png', className: 'top-[10%] left-[18%]' },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    className: 'top-[50%] left-[28%] max-md:hidden'
  },
  { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png', className: 'top-[10%] left-[45%]' },
  { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png', className: 'bottom-15 left-[40%]' },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    className: 'bottom-15 left-[60%] max-md:hidden'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    className: 'top-[37%] left-[66%] max-md:hidden'
  },
  { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png', className: 'top-[5%] left-[80%]' },
  { src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png', className: 'top-[60%] left-[88%]' }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent avatars={avatars} testimonials={testimonials} />
}

export default TestimonialsComponentPage
