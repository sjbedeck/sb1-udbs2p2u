import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-15/contact-us-page-15'

const contactInfo = {
  phone: '+1-316-555-1258',
  email: 'abc@gmail.com'
}

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage
