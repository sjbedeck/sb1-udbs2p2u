import { GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import Neural from '@/assets/svg/neural'

import { Marquee } from '@/components/ui/marquee'

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='mx-auto max-w-348 p-6'>
        <div className='flex flex-col items-center gap-16 overflow-hidden rounded-3xl border-2 border-[#00B8DB]/20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 px-4 py-16 md:px-24'>
          <div className='flex max-w-143.5 flex-col items-center gap-6 px-4 py-2'>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 z-1 w-15 bg-gradient-to-r from-[#141D30] to-[#141D30]/0 max-md:hidden max-sm:w-15' />
              <div className='pointer-events-none absolute inset-y-0 right-0 z-1 w-15 bg-gradient-to-l from-[#1A2537] to-[#141D30]/0 max-md:hidden max-sm:w-15' />

              {/* Trusted by Logos */}
              <Marquee pauseOnHover duration={20} reverse gap={2} className='*:items-center md:max-w-135.5'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png'
                  alt='University of Mississippi'
                  className='h-7.5 w-auto shrink-0 object-contain'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png'
                  alt='Star Health'
                  className='h-9 w-auto shrink-0 object-contain'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/dhl-logo.png'
                  alt='DHL'
                  className='h-4 w-auto shrink-0 object-contain'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png'
                  alt='Sense Arena'
                  className='h-11 w-auto shrink-0 object-contain'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png'
                  alt='Shemaroo'
                  className='h-10 w-auto shrink-0 object-contain'
                />
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/mercedes-benz-logo.png'
                  alt='Mercedes Benz'
                  className='h-7.5 w-auto shrink-0 object-contain'
                />
              </Marquee>
            </div>

            <span className='text-center text-white/80'>More than 300+ Companies trusted one</span>
          </div>

          <div className='grid gap-8 text-white sm:grid-cols-2 xl:grid-cols-4'>
            {/* About Neural Column */}
            <div className='flex flex-col items-start gap-4'>
              <a href='#' className='flex items-center gap-3'>
                <Neural />
                <span className='text-xl font-semibold'>Neural</span>
              </a>
              <p className='opacity-80'>
                The features provided by AI Neural are powered by intelligent AI systems and designed for informational
                purposes. Please ensure to verify any critical results before implementation.
              </p>
              <div className='flex items-center gap-4'>
                <a href='#' target='#'>
                  <GithubIcon className='size-5' />
                </a>
                <a href='#' target='#'>
                  <InstagramIcon className='size-5' />
                </a>
                <a href='#' target='#'>
                  <TwitterIcon className='size-5' />
                </a>
                <a href='#' target='#'>
                  <YoutubeIcon className='size-5' />
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div className='flex flex-col gap-3'>
              <div className='text-lg font-medium'>Company</div>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links Column */}
            <div className='flex flex-col gap-3'>
              <div className='text-lg font-medium'>Social Links</div>
              <ul className='space-y-3'>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Linked in
                  </a>
                </li>
                <li>
                  <a href='#' className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                    Git Hub
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App Column */}
            <div className='flex flex-col gap-3'>
              <div className='mb-2 text-lg font-medium'>Download App</div>

              <a
                href='#'
                target='_blank'
                className='flex w-fit items-center gap-4 rounded-lg border-2 border-[#00B8DB]/20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 px-4 py-3 shadow-[0_26.941px_53.881px_-12.931px_rgba(0,184,219,0.10)]'
              >
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
                  alt='App Store'
                  className='size-8.5 invert'
                />
                <div className='flex flex-col items-start'>
                  <p className='text-xs'>Download on the</p>
                  <p className='text-base font-medium opacity-90'>App Store</p>
                </div>
              </a>

              <a
                href='#'
                target='_blank'
                className='flex w-fit items-center gap-4 rounded-lg border-2 border-[#00B8DB]/20 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 px-4 py-3 shadow-[0_26.941px_53.881px_-12.931px_rgba(0,184,219,0.10)]'
              >
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png'
                  alt='Google Play'
                  className='size-8.5'
                />
                <div className='flex flex-col items-start'>
                  <p className='text-xs'>Download on the</p>
                  <p className='text-base font-medium opacity-90'>Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
