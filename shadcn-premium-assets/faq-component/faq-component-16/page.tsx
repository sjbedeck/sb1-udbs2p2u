import FAQ from '@/components/shadcn-studio/blocks/faq-component-16/faq-component-16'

const faqItems = [
  {
    icon: 'PackageIcon',
    title: 'What does your company do?',
    description:
      "Our company specializes in delivering high-quality solutions that are tailored to meet the evolving needs of businesses and individuals. Whether it's a digital product, a creative service, or a custom solution, we are committed to excellence."
  },
  {
    icon: 'WrenchIcon',
    title: 'Do you offer custom solutions or packages?',
    description:
      'Yes, we offer both custom solutions tailored to your specific needs and pre-designed packages for common requirements. Our team works closely with you to understand your goals and deliver the most suitable option, ensuring flexibility and value.'
  },
  {
    icon: 'DollarSignIcon',
    title: 'What is your pricing structure?',
    description:
      'Our pricing is flexible and depends on the scope, complexity, and timeline of your project. We offer transparent pricing with detailed quotes and work within various budget ranges to accommodate different client needs.'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Do you offer ongoing support or maintenance?',
    description:
      'Absolutely! We provide comprehensive ongoing support and maintenance services to ensure your solutions continue to perform optimally. Our support packages include regular updates, troubleshooting, and technical assistance.'
  },
  {
    icon: 'HomeIcon',
    title: 'What does your company do?',
    description:
      'We are a full-service company that provides end-to-end solutions for businesses looking to enhance their digital presence and operational efficiency. Our services range from consulting to implementation and ongoing support.'
  },
  {
    icon: 'MonitorCogIcon',
    title: 'Do you offer custom solutions or packages?',
    description:
      'Yes, we understand that every business is unique. We offer customizable solutions and packages that can be tailored to meet your specific requirements and objectives, ensuring you get the best value for your investment.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
