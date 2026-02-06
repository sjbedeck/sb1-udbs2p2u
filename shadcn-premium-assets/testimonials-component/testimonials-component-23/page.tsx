import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-23/testimonials-component-23'

import type { Testimonial } from '@/components/shadcn-studio/blocks/testimonials-component-23/testimonials-component-23'

const testimonials: Testimonial[] = [
  {
    id: '1',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-40.png',
    fallback: 'JL',
    name: 'Jamie Lee',
    designation: 'Operations Manager',
    companyName: 'Bright Sync',
    companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-01.png',
    message:
      "This is completely transformed how we manage our daily tasks. What used to take hours now happens automatically and we've never been more productive."
  },
  {
    id: '2',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-55.png',
    fallback: 'RQ',
    name: 'Roy Quilor',
    designation: 'CEO',
    companyName: 'Novas Solution',
    companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-02.png',
    companyLogoDark: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-02-dark.png',
    message:
      "The intuitive interface and powerful features have streamlined our workflow. Our team collaboration improved dramatically and we've never been efficient."
  },
  {
    id: '3',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-56.png',
    fallback: 'AH',
    name: 'Andy Hooke',
    designation: 'CTO Co-founder',
    companyName: 'Looma Labs',
    companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-03.png',
    companyLogoDark: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-03-dark.png',
    message:
      "Implementing this solution was seamless and results were immediate. We've seen a 40% increase in efficiency and our customers are noticing difference."
  },
  {
    id: '4',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-53.png',
    fallback: 'AN',
    name: 'Amrit Nagi',
    designation: 'Product Manager',
    companyName: 'Crestline',
    companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-04.png',
    companyLogoDark: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-04-dark.png',
    message:
      'From day one, this platform exceeded expectations. The customer support is outstanding and continuous updates keep bringing valuable features.'
  },
  {
    id: '5',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png',
    fallback: 'PJ',
    name: 'Praveen Juge',
    designation: 'Senior Developer',
    companyName: 'Cognitech Labs',
    companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-05.png',
    companyLogoDark: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-05-dark.png',
    message:
      'As a developer, I appreciate the clean architecture and comprehensive docs. Integration was straightforward and it scales perfectly with our needs.'
  },
  {
    id: '6',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-58.png',
    fallback: 'RA',
    name: 'Rob Austin',
    designation: 'Marketing Director',
    companyName: 'Tech Wave',
    companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/orion/image-06.png',
    message:
      'Our marketing campaigns have reached new heights with this tool. The analytics insights are detailed and help us make data-driven decisions every day.'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
