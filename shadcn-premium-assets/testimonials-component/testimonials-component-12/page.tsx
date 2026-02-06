import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-12/testimonials-component-12'
import type {
  StatTestimonialItem,
  SimpleTestimonialItem
} from '@/components/shadcn-studio/blocks/testimonials-component-12/testimonials-component-12'

const featuredTestimonial: StatTestimonialItem = {
  stat: '8x',
  statLabel: 'Increase in Conversion Rate',
  content:
    'Hours that were previously spent on repetitive design adjustments. The ability to easily tailor each component to meet our specific project needs has not only enhanced our creativity but also fostered greater collaboration among team members. Additionally, the user-friendly nature of Clarify has significantly reduced onboarding time for new designers.',
  name: 'Dustin porier',
  role: 'CEO at Spotify',
  avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
  companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/spotify-icon.png',
  companyName: 'Spotify'
}

const secondaryTestimonial: StatTestimonialItem = {
  stat: '2x',
  statLabel: 'Increase in Conversion Rate',
  content:
    'The time once dedicated to repetitive design tweaks has been significantly reduced. Now, we can effortlessly customize each element to fit our unique project requirements, which has boosted our creativity and improved teamwork.',
  name: 'John carter',
  role: 'CEO & Co Founder at Google',
  avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
  companyLogo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png',
  companyName: 'Google'
}

const simpleTestimonials: SimpleTestimonialItem[] = [
  {
    content: 'This product is amazing-super high quality and easy to use!',
    name: 'Charles Olivera',
    role: 'Founder at Zendesk',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png'
  },
  {
    content: 'This tool is excellent-great quality and so, simple to use!',
    name: 'Anika Franci',
    role: 'Founder at Cola',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png'
  }
]

const TestimonialsComponentPage = () => {
  return (
    <TestimonialsComponent
      featuredTestimonial={featuredTestimonial}
      secondaryTestimonial={secondaryTestimonial}
      simpleTestimonials={simpleTestimonials}
    />
  )
}

export default TestimonialsComponentPage
