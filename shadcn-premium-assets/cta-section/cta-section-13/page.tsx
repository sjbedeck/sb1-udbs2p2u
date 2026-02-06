import CTA from '@/components/shadcn-studio/blocks/cta-section-13/cta-section-13'

const stats = [
  {
    number: 100,
    suffix: '+',
    description: 'Businesses are automating workflows to improve efficiency and productivity.'
  },
  {
    number: 1,
    suffix: 'Million+',
    description: 'Tasks executed automatically every week without any issues.'
  },
  {
    number: 98,
    suffix: '%',
    description: 'Significant reduction in manual admin time per user achieved.'
  }
]

const CTASection = () => {
  return <CTA stats={stats} />
}

export default CTASection
