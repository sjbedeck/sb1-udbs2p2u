import FAQ from '@/components/shadcn-studio/blocks/faq-component-14/faq-component-14'

const faqItems = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/faq/image-5.png',
    title: 'How can I contact your team?',
    description: (
      <>
        You can reach us via our{' '}
        <a href='#' className='text-primary underline'>
          Contact page
        </a>
        , email, or live chat. We typically respond within 24 hours.
      </>
    )
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/faq/image-4.png',
    title: 'What are your pricing options?',
    description:
      'Explore our competitive pricing options. Our team is ready to assist you and typically responds within 24 hours.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/faq/image-3.png',
    title: 'Do you provide ongoing support?',
    description:
      'We&apos;re here to provide you with ongoing support through our Team. Expect a response from us within few days.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
