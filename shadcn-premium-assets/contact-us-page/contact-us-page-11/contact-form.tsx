'use client'

import { UserIcon, MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      {/* Name Input */}
      <div className='space-y-2'>
        <Label htmlFor='username'>Your Name</Label>
        <div className='relative'>
          <Input id='username' type='text' placeholder='Enter your name here...' className='peer h-10 pr-9' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
            <UserIcon className='size-4' />
            <span className='sr-only'>Name</span>
          </div>
        </div>
      </div>

      {/* Email Input */}
      <div className='space-y-2'>
        <Label htmlFor='email'>Your Email</Label>
        <div className='relative'>
          <Input id='email' type='email' placeholder='Enter your email here...' className='peer h-10 pr-9' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
            <MailIcon className='size-4' />
            <span className='sr-only'>Email</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className='space-y-2'>
        <Label htmlFor='feedback-message'>Message</Label>
        <Textarea placeholder='Enter your message' id='feedback-message' className='h-28 resize-none' />
      </div>

      {/* Submit Button */}
      <Button type='submit' size='lg' className='w-full rounded-lg text-base'>
        Get Free Quote
      </Button>
    </form>
  )
}

export default ContactForm
