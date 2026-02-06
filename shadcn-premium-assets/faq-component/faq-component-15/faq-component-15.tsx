import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MotionPreset } from '@/components/ui/motion-preset'

type FAQItem = {
  question: string
  answer: string
}

type FAQComponentProps = {
  faqItems: FAQItem[]
}

const FAQ = ({ faqItems }: FAQComponentProps) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
          {/* Left Section - Dark Background with Image */}
          <MotionPreset
            fade
            slide={{ direction: 'left', offset: 50 }}
            transition={{ duration: 0.7 }}
            className='bg-primary text-primary-foreground relative z-1 h-100 overflow-hidden rounded-xl p-6 sm:h-95'
          >
            <div className='space-y-4'>
              <p className='text-sm font-medium uppercase'>FAQ</p>
              <h2 className='text-3xl leading-tight font-semibold md:text-4xl'>
                Frequently asked <br className='hidden xl:block' /> question?
              </h2>
            </div>

            {/* Person Image */}
            <div className='absolute -right-0.5 bottom-0 h-[73%]'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/faq/image-2.png'
                alt='Customer support representative'
                className='h-full'
              />
            </div>

            {/* Background Pattern */}
            <div className='absolute bottom-0 left-0 -z-1 h-[85%]'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/faq/image-6.png'
                alt='Background pattern'
                className='h-full object-cover dark:hidden'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/faq/image-6-dark.png'
                alt='Background pattern dark'
                className='hidden h-full object-cover dark:block'
              />
            </div>
          </MotionPreset>

          {/* Right Section - FAQ Accordion */}
          <MotionPreset fade slide={{ direction: 'right', offset: 50 }} delay={0.3} transition={{ duration: 0.7 }}>
            <Accordion type='single' collapsible className='space-y-2' defaultValue='item-0'>
              {faqItems.map((item, index) => (
                <MotionPreset
                  key={index}
                  fade
                  slide={{ direction: 'up', offset: 30 }}
                  delay={0.6 + index * 0.15}
                  transition={{ duration: 0.6 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className='bg-card rounded-md border-b-0 shadow-md data-[state=open]:shadow-lg'
                  >
                    <AccordionTrigger className='px-5 text-base hover:no-underline [&>svg]:size-5'>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-muted-foreground px-5 text-base leading-relaxed'>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </MotionPreset>
              ))}
            </Accordion>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default FAQ
