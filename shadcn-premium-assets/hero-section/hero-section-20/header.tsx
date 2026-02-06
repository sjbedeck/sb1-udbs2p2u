'use client'

import { useEffect, useState } from 'react'

import { ContactIcon, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/shadcn-studio/blocks/menu-dropdown'
import MenuNavigation from '@/components/shadcn-studio/blocks/menu-navigation'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

import { cn } from '@/lib/utils'

import Logo from '@/components/shadcn-studio/logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full bg-black transition-all duration-300',
        {
          'shadow-md backdrop-blur': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#'>
          <Logo className='gap-3 text-white [&_line]:stroke-black [&_path]:stroke-black [&_rect]:fill-white' />
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className='max-lg:hidden [&_[data-slot=navigation-menu-link]]:text-white/80! [&_[data-slot=navigation-menu-link]]:hover:bg-transparent! [&_[data-slot=navigation-menu-link]]:hover:text-white! [&_[data-slot=navigation-menu-link]]:focus:bg-transparent!'
        />

        {/* Actions */}
        <div className='flex gap-4'>
          <Button className='bg-white text-black hover:bg-white/90 max-sm:hidden' asChild>
            <a href='#'>Contact</a>
          </Button>

          {/* Navigation for small screens */}
          <div className='flex gap-3'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size='icon' className='sm:hidden' asChild>
                  <a href='#'>
                    <ContactIcon />
                    <span className='sr-only'>Contact</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Contact</TooltipContent>
            </Tooltip>

            <MenuDropdown
              align='end'
              navigationData={navigationData}
              trigger={
                <Button size='icon' className='lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
