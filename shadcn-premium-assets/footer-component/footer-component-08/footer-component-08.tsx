import { ArrowRightIcon, GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import MatterLogo from '@/assets/svg/matter-logo'
import { MatterButton } from '@/components/ui/matter-button'

const Footer = () => {
  return (
    <footer>
      <div className='relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between gap-8 py-8 max-lg:flex-col sm:py-16 lg:py-24 lg:max-xl:gap-10'>
          <div className='flex max-w-95.5 flex-col gap-8 max-lg:gap-6'>
            <a href='#' className='flex items-center gap-3'>
              <MatterLogo className='size-8' />
              <span className='font-[Orbitron] text-[1.75rem] leading-6.5 font-semibold'>Matter</span>
            </a>

            <div className='flex flex-col gap-8 max-lg:gap-4'>
              <div>
                <p className='text-lg font-medium'>Subscribe to newsletter</p>
                <p className='text-muted-foreground'>
                  Have questions or need assistance? Get in touch with our team for personalised support.
                </p>
              </div>

              <div className='flex w-full items-center gap-2'>
                <Input type='email' placeholder='Your email...' className='h-10 rounded-full' />
                <MatterButton size='icon-sm'>
                  <ArrowRightIcon />
                </MatterButton>
              </div>

              <div className='flex items-center gap-4'>
                <a href='#' target='#'>
                  <GithubIcon className='text-muted-foreground size-5' />
                </a>
                <a href='#' target='#'>
                  <InstagramIcon className='size-5 text-sky-600 dark:text-sky-400' />
                </a>
                <a href='#' target='#'>
                  <TwitterIcon className='size-5 text-amber-600 dark:text-amber-400' />
                </a>
                <a href='#' target='#'>
                  <YoutubeIcon className='text-destructive size-5' />
                </a>
              </div>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:max-xl:gap-6 xl:min-w-172'>
            <div className='flex flex-col gap-8'>
              <span className='text-muted-foreground pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>Useful links</span>
              <ul className='space-y-8'>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>01</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Career
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>02</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Help
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>03</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Works
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>04</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    News
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>05</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Partners
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>06</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Community
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>07</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-8'>
              <span className='text-muted-foreground pl-18 max-lg:pl-18 md:text-lg lg:text-xl'>Pages</span>
              <ul className='space-y-8'>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>01</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Features
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>02</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Use cases
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>03</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    About us
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>04</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Testimonials
                  </a>
                </li>
                <li className='flex items-center gap-11 lg:max-xl:gap-7'>
                  <span className='text-muted-foreground w-7 md:text-lg lg:text-xl'>05</span>
                  <a href='#' className='link-animated text-2xl md:text-3xl lg:text-4xl'>
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-muted-foreground flex flex-wrap items-center gap-6 py-6 text-nowrap md:justify-end'>
          <a href='#' className='hover:text-foreground font-light underline transition-colors duration-300'>
            Terms & condition
          </a>
          <a href='#' className='hover:text-foreground font-light underline transition-colors duration-300'>
            Privacy policy
          </a>
          <a href='#' className='hover:text-foreground font-light underline transition-colors duration-300'>
            Accessibility statement
          </a>
          <span className='font-light'>© Matter 2025</span>
        </div>

        <img
          src='https://cdn.shadcnstudio.com/ss-assets/template/landing-page/matter/image-15.png'
          alt='robot'
          className='absolute -bottom-16 left-15.5 w-95 rotate-15 max-lg:hidden xl:w-105'
        />
      </div>
    </footer>
  )
}

export default Footer
