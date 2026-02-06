import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-14/contact-form'

import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type CompanyLogo = {
  name: string
  src: string
  alt: string
  darkSrc?: string
}

const ContactUs = ({ companyLogos }: { companyLogos: CompanyLogo[] }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20'>
          {/* Left Side - Header and Form */}
          <div className='space-y-6'>
            {/* Header Section */}
            <div className='space-y-4'>
              <MotionPreset
                component='p'
                className='text-primary text-sm font-medium tracking-wider uppercase'
                fade
                slide={{ direction: 'down', offset: 30 }}
                blur
                transition={{ duration: 0.4 }}
              >
                Contact Us
              </MotionPreset>

              <MotionPreset
                component='h2'
                className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                delay={0.1}
                transition={{ duration: 0.5 }}
              >
                We&apos;d Love to Hear From You!
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-muted-foreground text-lg'
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                delay={0.2}
                transition={{ duration: 0.5 }}
              >
                Have a question or need assistance? Our team is here to help! Whether it&apos;s feedback, inquiries, or
                support, we&apos;re just a message away.
              </MotionPreset>
            </div>

            {/* Form */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 80 }}
              blur
              delay={0.4}
              transition={{ duration: 0.6 }}
            >
              <Card className='border shadow-sm'>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </MotionPreset>
          </div>

          {/* Right Side - Dashboard Image and Logos */}
          <div className='space-y-8'>
            {/* Dashboard Image */}
            <MotionPreset fade slide={{ direction: 'up', offset: 100 }} blur delay={0.6} transition={{ duration: 0.7 }}>
              <div>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-16.png'
                  alt='Analytics dashboard interface'
                  className='w-full object-cover dark:hidden'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-16-dark.png'
                  alt='Analytics dark dashboard interface'
                  className='hidden w-full object-cover dark:block'
                />
              </div>
            </MotionPreset>

            {/* Company Logos */}
            <MotionPreset fade slide={{ direction: 'up', offset: 60 }} blur delay={0.8} transition={{ duration: 0.6 }}>
              <div className='space-y-4'>
                <div className='mx-auto flex w-full max-w-lg flex-wrap items-center justify-center gap-6'>
                  {companyLogos.map((logo, index) => (
                    <div key={index}>
                      {logo.darkSrc ? (
                        <>
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className='h-6 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 dark:hidden'
                          />
                          <img
                            src={logo.darkSrc}
                            alt={logo.alt}
                            className='hidden h-6 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 dark:block'
                          />
                        </>
                      ) : (
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className='h-6 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
