import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-11/contact-form'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

const ContactUs = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            We&apos;re
            <span className='relative z-10 ml-2'>
              Here to Help
              <span className='bg-primary absolute bottom-0 left-0 -z-10 h-px w-full' aria-hidden='true' />
            </span>
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            If you have any inquiries or need support, our team is ready and happy to assist.
          </MotionPreset>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 items-center gap-8 md:gap-20 lg:grid-cols-2 xl:gap-24'>
          {/* Left Side - Image */}
          <MotionPreset
            className='group relative flex justify-end gap-2'
            fade
            slide={{ direction: 'left', offset: 100 }}
            blur
            delay={0.4}
            transition={{ duration: 0.6 }}
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-11.png'
              alt='Business team meeting'
              className='z-1 w-1/2 object-cover transition-transform duration-500 ease-in-out group-hover:-translate-x-2 md:absolute md:top-18 md:left-0 md:w-[60%] md:rotate-3 dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-11-dark.png'
              alt='Business team meeting'
              className='z-1 hidden w-1/2 object-cover transition-transform duration-500 ease-in-out group-hover:-translate-x-2 md:absolute md:top-18 md:left-0 md:w-[60%] md:rotate-3 dark:block'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-12.png'
              alt='Business team meeting 2'
              className='w-1/2 object-cover transition-transform duration-500 ease-in-out group-hover:translate-x-2 md:w-[60%]'
            />
          </MotionPreset>

          {/* Right Side - Form Card */}
          <MotionPreset
            fade
            slide={{ direction: 'right', offset: 100 }}
            blur
            zoom={{ initialScale: 0.95 }}
            delay={0.6}
            transition={{ duration: 0.6 }}
          >
            <Card className='border shadow-sm'>
              <CardHeader className='text-center'>
                <CardTitle className='text-2xl'>Send us a message</CardTitle>
                <CardDescription className='text-base'>
                  Get in touch with us for any inquiries or support.
                  <br />
                  We&apos;re here to assist you and ensure your experience
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ContactForm />
              </CardContent>
              <CardFooter>
                <p className='text-muted-foreground text-center text-lg'>
                  I understand that my data will be hold securely in accordance with the{' '}
                  <a href='#' className='text-card-foreground font-semibold underline'>
                    privacy policy
                  </a>
                </p>
              </CardFooter>
            </Card>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
