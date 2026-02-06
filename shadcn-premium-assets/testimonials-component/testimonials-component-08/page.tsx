import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-08/testimonials-component-08'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-08/testimonials-component-08'

const testimonials: TestimonialItem[] = [
  {
    name: 'Brad Hanna',
    handle: '@Marko',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    content: 'Shadcn Studio has improved my workflow. The components are appealing and perform well across devices!',
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/logo-1.png',
    bgColor: 'bg-purple-100',
    logoAlt: 'HubSpot'
  },
  {
    name: 'Brad Hanna',
    handle: '@Marko',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    content:
      'Using Shadcn Studio has made my projects intuitive and efficient. The documentation is clear, making it easy to get started!',
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/logo-2.png',
    bgColor: 'bg-green-100',
    logoAlt: 'Logoipsum'
  },
  {
    name: 'Brad Hanna',
    handle: '@Marko',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    content: "The community around Shadcn Studio is fantastic! I've received support, making my experience better.",
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/logo-3.png',
    bgColor: 'bg-blue-100',
    logoAlt: 'Logoipsum'
  },
  {
    name: 'Ella Johnson',
    handle: '@EllaJ',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    content:
      'Using shadcn/studio has made my projects more efficient. The clear documentation makes it easy to get started!',
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/testimonials/logo-4.png',
    bgColor: 'bg-orange-100',
    logoAlt: 'Logoipsum'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
