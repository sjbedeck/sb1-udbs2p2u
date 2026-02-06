import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-09/testimonials-component-09'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-09/testimonials-component-09'

const testimonials: TestimonialItem[] = [
  {
    name: 'Carter Ekstrom Bothman',
    role: 'CEO & Co Founder',
    company: 'Outlook',
    videoUrl: 'https://www.youtube.com/embed/Axsf1PhPUik?si=vALy8MWKv9pPRNlM',
    title: 'Carter Ekstrom Bothman testimonial'
  },
  {
    name: 'Hanna Curtis',
    role: 'CEO & Co Founder',
    company: 'Zeplin',
    videoUrl: 'https://www.youtube.com/embed/uMIU8BiI_Ls?si=-W9r1o_S9ENrbAbN',
    title: 'Hanna Curtis testimonial'
  },
  {
    name: 'Zaire Bergson',
    role: 'CEO & Co Founder',
    company: 'Dribbble',
    videoUrl: 'https://www.youtube.com/embed/_CozYb52FM0?si=_xEb3nOKBB6WUNcT',
    title: 'Zaire Bergson testimonial'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
