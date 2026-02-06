import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-19/testimonials-component-19'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-19/testimonials-component-19'

const testimonials: TestimonialItem[] = [
  {
    name: 'Paityn Lipshutz',
    role: 'Product Lead',
    company: 'NovaTech Labs',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    content:
      'This tool transformed our workflow—clean design, seamless performance, and saves us hours every week. Truly exceptional.',
    className: 'bg-destructive/10'
  },
  {
    name: 'Angel Lubin',
    role: 'COO',
    company: 'Aerius Systems',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png?width=40&height=40&format=auto',
    content:
      'Outstanding experience—setup was effortless, and the platform has been incredibly reliable. Support responded within minutes.',
    className: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    name: 'Lincoln Stanton',
    role: 'Founder',
    company: 'Brightline Studios',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    content:
      'A phenomenal product—robust features, intuitive UI, and consistent performance. Completely exceeded expectations.',
    className: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
    name: 'Skylar Lipshutz',
    role: 'UX Lead',
    company: 'PixelForge',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png?width=40&height=40&format=auto',
    content:
      'Beautifully crafted and incredibly easy to use. This instantly improved our team’s productivity. Highly recommended.',
    className: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
    name: 'Corey Franci',
    role: 'CTO',
    company: 'CloudNova',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png?width=40&height=40&format=auto',
    content:
      'Remarkable quality—fast, stable, and thoughtfully built. The support team handled every question with expertise.',
    className: 'bg-destructive/10'
  },
  {
    name: 'Anika Franci',
    role: 'Engineer',
    company: 'SupportFlow',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    content:
      'Highly efficient and incredibly user-friendly. Delivered exactly what we needed with flawless customer support.',
    className: 'bg-sky-600/10 dark:bg-sky-400/10'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
