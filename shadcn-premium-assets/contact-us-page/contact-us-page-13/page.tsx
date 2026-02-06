import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-13/contact-us-page-13'

const testimonial = {
  name: 'Marley Calzoni',
  title: 'CEO & Co Founder at Lemoncreamy',
  image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-15.png',
  rating: 4.5,
  quote:
    'Outstanding product—well-crafted, user-friendly and exactly what I expected. The team went above and beyond to help. Outstanding product—well-crafted, user-friendly and exactly what I expected. The team went above and beyond to help.'
}

const ContactUsPage = () => {
  return <ContactUs testimonial={testimonial} />
}

export default ContactUsPage
