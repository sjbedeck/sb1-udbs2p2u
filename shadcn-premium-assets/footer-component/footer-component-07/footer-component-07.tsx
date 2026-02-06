import { GithubIcon, InstagramIcon, MessageSquareText, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import CraftLogo from '@/assets/svg/craft-logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-2xl justify-center border-x px-8 py-7 xl:max-w-6xl'>
        <a href='#' className='flex flex-col items-center gap-3'>
          <CraftLogo className='size-12.5' />
          <span className='text-xl font-semibold uppercase'>Craft</span>
        </a>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-2xl flex-col items-center gap-6 border-x px-8 py-7 xl:max-w-6xl'>
        <h2 className='max-w-89 text-center text-2xl font-semibold md:text-3xl lg:text-4xl'>
          Let&apos;s collaborate and craft your vision
        </h2>

        <CraftButton asChild>
          <a href='#'>
            <CraftButtonLabel>Let&apos;s talk</CraftButtonLabel>
            <CraftButtonIcon>
              <MessageSquareText className='size-3' />
            </CraftButtonIcon>
          </a>
        </CraftButton>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 border-x px-8 py-7 xl:max-w-6xl'>
        <a
          href='#'
          className='text-muted-foreground link-animated hover:text-foreground text-lg transition-colors duration-300'
        >
          Portfolio
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a
          href='#'
          className='text-muted-foreground link-animated hover:text-foreground text-lg transition-colors duration-300'
        >
          Services
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a
          href='#'
          className='text-muted-foreground link-animated hover:text-foreground text-lg transition-colors duration-300'
        >
          About
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a
          href='#'
          className='text-muted-foreground link-animated hover:text-foreground text-lg transition-colors duration-300'
        >
          Projects
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a
          href='#'
          className='text-muted-foreground link-animated hover:text-foreground text-lg transition-colors duration-300'
        >
          Testimonials
        </a>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-2xl items-center justify-center gap-4 border-x px-8 py-7 xl:max-w-6xl'>
        <a href='#' target='#'>
          <GithubIcon className='size-5' />
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a href='#' target='#'>
          <InstagramIcon className='size-5 text-sky-600 dark:text-sky-400' />
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a href='#' target='#'>
          <TwitterIcon className='size-5 text-amber-600 dark:text-amber-400' />
        </a>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
        <a href='#' target='#'>
          <YoutubeIcon className='text-destructive size-5' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
