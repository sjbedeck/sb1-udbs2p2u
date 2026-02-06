import { TruckIcon, SettingsIcon, FolderIcon, CreditCardIcon, RotateCcwIcon } from 'lucide-react'

import FAQ from '@/components/shadcn-studio/blocks/faq-component-13/faq-component-13'

const tabs = [
  {
    name: 'Shipping',
    value: 'shipping',
    icon: TruckIcon,
    faqs: [
      {
        question: 'What does your company do?',
        answer:
          'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance.'
      },
      {
        question: 'How much do your services cost?',
        answer:
          'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance.'
      },
      {
        question: 'How do I track my order?',
        answer:
          'Once your order is shipped, you will receive a tracking number via email. You can use this number on our website.'
      },
      {
        question: 'Do you offer international shipping?',
        answer:
          'Yes, we ship to most countries worldwide. Shipping fees and delivery times may vary based on the destination and shipping method selected at checkout.'
      }
    ]
  },
  {
    name: 'Tools',
    value: 'tools',
    icon: SettingsIcon,
    faqs: [
      {
        question: 'What tools do you use?',
        answer:
          'We use industry-leading tools and platforms to provide the best service experience, including modern booking systems, customer management platforms.'
      },
      {
        question: 'Are your tools secure?',
        answer:
          'Yes, all our tools are secured with enterprise-grade encryption and follow industry best practices for data protection and privacy compliance.'
      },
      {
        question: 'Can I integrate your tools with my existing systems?',
        answer:
          'Many of our tools offer integration options with popular third-party systems. Please contact our support team to discuss your specific integration needs.'
      },
      {
        question: 'Do you offer training for your tools?',
        answer:
          'Yes, we provide comprehensive training sessions and resources to help you get the most out of our tools and services.'
      }
    ]
  },
  {
    name: 'General',
    value: 'general',
    icon: FolderIcon,
    faqs: [
      {
        question: 'What does your company do?',
        answer:
          'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance, and customized itineraries.'
      },
      {
        question: 'How do I get started?',
        answer:
          'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance, and customized itineraries.'
      },
      {
        question: 'How much do your services cost?',
        answer:
          'You can reach our customer support team via email, phone, or live chat on our website. We are available 24/7 to assist you with any inquiries or issues.'
      },
      {
        question: 'Is there a free trial or demo available?',
        answer:
          'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance.'
      }
    ]
  },
  {
    name: 'Payments',
    value: 'payments',
    icon: CreditCardIcon,
    faqs: [
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, debit cards, bank transfers, and popular digital payment platforms including PayPal, Apple Pay.'
      },
      {
        question: 'Is my payment information secure?',
        answer:
          'Absolutely. We use SSL encryption and PCI DSS compliance standards to ensure all payment information is processed securely and safely.'
      },
      {
        question: 'Can I get an invoice for my purchase?',
        answer:
          'Yes, invoices are automatically generated and emailed to you upon completion of your purchase. You can also access them through your account dashboard.'
      },
      {
        question: 'Do you offer installment plans or financing options?',
        answer:
          'Yes, we offer flexible installment plans and financing options through our partnered financial institutions. Please contact our sales team for more details.'
      }
    ]
  },
  {
    name: 'Returns',
    value: 'returns',
    icon: RotateCcwIcon,
    faqs: [
      {
        question: 'What is your refund policy?',
        answer:
          'We offer flexible refund policies depending on the service type. Most bookings can be cancelled within 24-48 hours with full.'
      },
      {
        question: 'How long does the refund process take?',
        answer:
          'Refunds are typically processed within 5-10 business days, though the exact timeframe may vary depending on your payment method and banking institution.'
      },
      {
        question: 'Can I exchange my service for another?',
        answer:
          'Yes, exchanges are possible for most services within a specified period. Please contact our support team to discuss your options and any applicable fees.'
      },
      {
        question: 'Who do I contact for return-related issues?',
        answer:
          'For any return or refund-related inquiries, please reach out to our dedicated customer support team via email, phone, or live chat for prompt assistance.'
      }
    ]
  }
]

const FAQPage = () => {
  return <FAQ tabs={tabs} />
}

export default FAQPage
