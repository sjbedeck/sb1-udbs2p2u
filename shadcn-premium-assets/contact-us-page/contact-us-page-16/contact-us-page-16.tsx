'use client'

import { InstagramIcon, DribbbleIcon, LinkedinIcon, GithubIcon } from 'lucide-react'

import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-16/contact-form'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import BlurText from '@/components/ui/blur-text'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'

type ContactInfo = {
  name: string
  role: string
  image: string
  availability: string
  social: {
    instagram?: string
    dribbble?: string
    linkedin?: string
    github?: string
  }
  companies: {
    name: string
    logo: string
  }[]
}

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-6xl space-y-9 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='space-y-2.5'>
          <MotionPreset fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none px-1.5'>
              Get in Touch
            </Badge>
          </MotionPreset>
          <div className='flex justify-between gap-4 max-md:flex-col'>
            <MotionPreset delay={0.3} transition={{ duration: 0.5 }} className='max-w-100'>
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                <BlurText text='Connect With Me 👋' delay={50} animateBy='words' direction='bottom' />
              </h2>
            </MotionPreset>
            <MotionPreset
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-150 text-xl'>
                Whether you&apos;re looking for more information, have a suggestion, or need help with something,
                we&apos;re here for you.
              </p>
            </MotionPreset>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {/* Left Side - Form */}
          <MotionPreset fade slide={{ direction: 'up', offset: 80 }} blur delay={0.3} transition={{ duration: 0.6 }}>
            <Card className='border shadow-sm'>
              <CardContent>
                {/* Form */}
                <ContactForm />
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Right Side - Profile Info */}
          <MotionPreset
            fade
            slide={{ direction: 'up', offset: 100 }}
            blur
            delay={0.4}
            transition={{ duration: 0.7 }}
            className='space-y-6'
          >
            {/* Profile Image */}
            <div className='group relative overflow-hidden rounded-xl lg:rounded-3xl'>
              <img
                src={contactInfo.image}
                alt={contactInfo.name}
                className='w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              {/* Availability Badge */}
              <Badge
                variant='secondary'
                className='bg-card text-card-foreground absolute inset-x-1/2 bottom-0 flex -translate-x-1/2 items-center gap-1.5 rounded-t-sm rounded-b-none px-2.5 py-1.5 text-xs font-medium'
              >
                {/* <span className='size-2 animate-pulse rounded-full bg-green-500' /> */}
                <span className='relative flex size-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-400'></span>
                  <span className='relative inline-flex size-2 rounded-full bg-green-700 dark:bg-green-500'></span>
                </span>
                {contactInfo.availability}
              </Badge>
            </div>

            {/* Profile Info */}
            <div className='space-y-4'>
              <div className='flex items-center justify-center gap-3 text-center'>
                <h3 className='text-xl font-semibold'>{contactInfo.name}</h3>
                <span className='bg-primary/20 relative inline-flex size-2 rounded-full'></span>
                <p className='text-muted-foreground text-lg'>{contactInfo.role}</p>
              </div>

              {/* Social Links */}
              <div className='flex items-center justify-center gap-3'>
                {contactInfo.social.instagram && (
                  <a
                    href={contactInfo.social.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-card-foreground hover:text-muted-foreground transition-colors'
                  >
                    <InstagramIcon className='size-5' />
                  </a>
                )}
                {contactInfo.social.dribbble && (
                  <a
                    href={contactInfo.social.dribbble}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-card-foreground hover:text-muted-foreground transition-colors'
                  >
                    <DribbbleIcon className='size-5' />
                  </a>
                )}
                {contactInfo.social.linkedin && (
                  <a
                    href={contactInfo.social.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-card-foreground hover:text-muted-foreground transition-colors'
                  >
                    <LinkedinIcon className='size-5' />
                  </a>
                )}
                {contactInfo.social.github && (
                  <a
                    href={contactInfo.social.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-card-foreground hover:text-muted-foreground transition-colors'
                  >
                    <GithubIcon className='size-5' />
                  </a>
                )}
              </div>
            </div>
            {/* Company Logos */}
            <MotionPreset
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.9}
              transition={{ duration: 0.5 }}
              className='relative'
            >
              <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-15 bg-gradient-to-r via-85% to-transparent' />
              <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-15 bg-gradient-to-l via-85% to-transparent' />
              <div>
                <Marquee pauseOnHover duration={20} gap={2} className='*:items-center'>
                  {contactInfo.companies.map((company, index) => (
                    <img
                      key={index}
                      src={company.logo}
                      alt={company.name}
                      className='h-6 w-auto shrink-0 object-contain opacity-60 invert dark:invert-0'
                    />
                  ))}
                </Marquee>
              </div>
            </MotionPreset>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
