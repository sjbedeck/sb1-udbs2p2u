import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-16/contact-us-page-16'

const contactInfo = {
  name: 'John Doe',
  role: 'UI/UX Designer',
  image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-18.png',
  availability: 'Available for Hire',
  social: {
    instagram: 'https://www.instagram.com/themeselection/',
    dribbble: '#',
    linkedin: 'https://www.linkedin.com/company/themeselection/',
    github: 'https://github.com/themeselection/shadcn-studio'
  },
  companies: [
    {
      name: 'University of Mississippi',
      logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png'
    },
    {
      name: 'Star Health',
      logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png'
    },
    {
      name: 'Sense Arena',
      logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png'
    },
    {
      name: 'Shemaroo',
      logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png'
    },
    {
      name: 'Mercedes Benz',
      logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/mercedes-benz-logo.png'
    }
  ]
}

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage
