import { CookieIcon, LockKeyholeIcon, ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const CookiesConsent = () => {
  return (
    <div className='bg-muted min-h-screen'>
      <Card className='fixed border-2 shadow-none max-md:top-1/2 max-md:-translate-y-1/2 max-sm:mx-4 sm:max-md:left-1/2 sm:max-md:-translate-x-1/2 md:right-10 md:bottom-10 md:max-w-xl'>
        <CardHeader className='grid-rows-1'>
          <CardTitle className='text-2xl font-medium'>Allow use of cookies ?</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-6'>
          <ul className='space-y-3'>
            <li className='flex gap-4 p-2'>
              <CookieIcon className='size-6 shrink-0' />
              <span className='text-muted-foreground font-medium'>
                Provide and improve content on HTML stream Products
              </span>
            </li>
            <li className='flex gap-4 p-2'>
              <ShieldCheckIcon className='size-6 shrink-0' />
              <span className='text-muted-foreground font-medium'>
                Provide a safer experience by using information that we recieve from cookies.
              </span>
            </li>
            <li className='flex gap-4 p-2'>
              <LockKeyholeIcon className='size-6 shrink-0' />
              <span className='text-muted-foreground font-medium'>
                Provide and improve HTML Stream products for people who have an account.
              </span>
            </li>
          </ul>
          <p className='text-muted-foreground'>
            You can allow the use of all cookies, just essential cookies or you can choose more options below. you can
            learn more about cookies and how we use them, and review or change your choice at any time in our{' '}
            <a href='#' className='text-primary underline'>
              Cookies Policy
            </a>
            .
          </p>
        </CardContent>

        <CardFooter className='gap-4'>
          <Button size='lg' className='flex-1 rounded-lg text-base'>
            Allow
          </Button>
          <Button
            size='lg'
            className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 flex-1 rounded-lg text-base'
          >
            Decline
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CookiesConsent
