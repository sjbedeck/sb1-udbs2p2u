'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { useMedia } from 'react-use'
import { ChevronRightIcon, CircleSmallIcon, MenuIcon } from 'lucide-react'

import { GlassButton } from '@/components/ui/glass-button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger
} from '@/components/ui/sheet'
import Neural from '@/assets/svg/neural'

import { cn } from '@/lib/utils'

type NavigationSection = {
  type: 'section'
  title: string
  items: NavigationItem[]
}

type NavigationItem = {
  title: string
  href: string
  icon?: ReactNode
  badge?: ReactNode
  description?: string
}

type Navigation = {
  title: string
  contentClassName?: string
} & (
  | {
      items: NavigationSection[]
      splitItems: true
      href?: never
    }
  | {
      items: NavigationItem[]
      splitItems?: never | false
      href?: never
    }
  | {
      items?: never
      splitItems?: never
      href: string
    }
)

const ListItem = (props: {
  title: NavigationItem['title']
  href: NavigationItem['href']
  icon?: NavigationItem['icon']
  badge?: NavigationItem['badge']
  description?: NavigationItem['description']
  splitItems?: boolean
}) => {
  const { title, href, icon, badge, description, splitItems } = props

  return (
    <li className={cn({ 'h-19.5': description && splitItems })}>
      <NavigationMenuLink
        href={href}
        className={cn(
          'bg-transparent hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:ring-0 focus-visible:outline-0 data-[active=true]:bg-transparent data-[active=true]:text-white data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent',

          //Hover
          'hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
          'hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:backdrop-blur-md',

          { 'flex flex-row items-start gap-2': icon }
        )}
      >
        {icon && (
          <span className='flex aspect-square size-7.5 shrink-0 items-center justify-center rounded-sm border bg-white [&>svg]:size-4.5 [&>svg]:text-black!'>
            {icon}
          </span>
        )}
        {description ? (
          <div className='grow space-y-1'>
            <div className={cn({ 'flex items-center gap-1.5': badge })}>
              <h6 className='font-medium text-white'>{title}</h6>
              {badge}
            </div>
            <p className='line-clamp-2 text-white/80'>{description}</p>
          </div>
        ) : (
          <div className={cn('grow', { 'flex items-center gap-1.5': badge })}>
            <h6 className='font-medium text-white'>{title}</h6>
            {badge}
          </div>
        )}
      </NavigationMenuLink>
    </li>
  )
}

const HeroNavigation = ({
  navigationData,
  navigationClassName
}: {
  navigationData: Navigation[]
  navigationClassName?: string
}) => {
  return (
    <NavigationMenu viewport={false} className={cn(navigationClassName)}>
      <NavigationMenuList className='flex-wrap gap-6'>
        {navigationData.map(navItem => {
          if (navItem.href) {
            // Root link item
            return (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  href={navItem.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'rounded-none p-0 text-base font-medium text-white/80 transition',
                    'hover:font-semibold focus:font-semibold data-[active=true]:hover:font-semibold data-[active=true]:focus:font-semibold',

                    // Overrides
                    'bg-transparent hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:ring-0 focus-visible:outline-0 data-[active=true]:bg-transparent data-[active=true]:text-white data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent'
                  )}
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          }

          // Section with dropdown
          return (
            <NavigationMenuItem key={navItem.title}>
              <NavigationMenuTrigger
                className={cn(
                  'rounded-none p-0 text-base text-white/80 [&_svg]:ml-2 [&_svg]:size-4',
                  'hover:font-semibold focus:font-semibold data-[active=true]:hover:font-semibold data-[active=true]:focus:font-semibold',

                  // Override
                  'h-auto bg-transparent transition-[color,box-shadow,font-weight] outline-none hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-transparent data-[state=open]:text-white data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent'
                )}
              >
                {navItem.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={cn(
                  'left-1/2 -translate-x-1/2 !bg-white/35 shadow-lg! !backdrop-blur-sm group-data-[viewport=false]/navigation-menu:mt-6! group-data-[viewport=false]/navigation-menu:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]'
                )}
              >
                {navItem.splitItems ? (
                  <div className={cn('grid grid-cols-1 gap-2', navItem.contentClassName)}>
                    {navItem.items.map(section => (
                      <div key={section.title} className='grid grid-cols-1 gap-2'>
                        <div className='px-2 text-sm text-white/80'>{section.title}</div>
                        <ul
                          className={cn('grid grid-cols-1 gap-0.5', {
                            'gap-3': section.items.find(item => item.description)
                          })}
                        >
                          {section.items.map((item, index) => (
                            <ListItem
                              key={index}
                              icon={item.icon}
                              title={item.title}
                              description={item.description}
                              href={item.href}
                              badge={item.badge}
                              splitItems={navItem.splitItems}
                            />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul
                    className={cn(
                      'grid grid-cols-1 gap-0.5',
                      { 'gap-2': navItem.items?.find(item => item.description) },
                      navItem.contentClassName
                    )}
                  >
                    {navItem.items?.map((item, index) => (
                      <ListItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        href={item.href}
                        badge={item.badge}
                      />
                    ))}
                  </ul>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const HeroNavigationSmallScreen = ({
  navigationData,
  triggerClassName,
  screenSize = 1023
}: {
  navigationData: Navigation[]
  triggerClassName?: string
  screenSize?: number
}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMedia(`(max-width: ${screenSize}px)`, false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!isMobile) {
      setOpen(false)
    }
  }, [isMobile])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <GlassButton size='icon-lg' className={cn('inline-flex', triggerClassName)}>
          <MenuIcon />
          <span className='sr-only'>Menu</span>
        </GlassButton>
      </SheetTrigger>
      <SheetContent
        side='left'
        className={cn(
          'w-75 gap-0 bg-transparent p-0 [&_.lucide-x]:text-white',
          'shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
          'bg-linear-to-r from-white/25 to-white/35 backdrop-blur-md'
        )}
      >
        <SheetHeader className='p-4'>
          <SheetTitle hidden />
          <SheetDescription hidden />
          <a href='#' onClick={handleLinkClick} className='flex items-center gap-3 self-start'>
            <Neural />
            <span className='text-xl font-semibold text-white'>Neural</span>
          </a>
        </SheetHeader>
        <div className='space-y-0.5 overflow-y-auto p-2'>
          {navigationData.map((navItem, index) => {
            if (navItem.href) {
              return (
                <a
                  key={navItem.title}
                  href={navItem.href}
                  className={cn(
                    'flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium text-white/80 transition hover:font-semibold hover:text-white',

                    'hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
                    'hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:backdrop-blur-md'
                  )}
                  onClick={handleLinkClick}
                >
                  {navItem.title}
                </a>
              )
            }

            return (
              <Collapsible key={index} className='w-full'>
                <CollapsibleTrigger
                  className={cn(
                    'group flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm font-medium text-white/80 transition hover:font-semibold hover:text-white',

                    'hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
                    'hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:backdrop-blur-md'
                  )}
                >
                  <div className='flex items-center gap-2'>{navItem.title}</div>
                  <ChevronRightIcon className='size-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90' />
                </CollapsibleTrigger>
                <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
                  {navItem.splitItems
                    ? navItem.items.map((item, i) => (
                        <div key={i} className='mt-1.5'>
                          <div className='mb-1 pl-4.5 text-xs font-medium text-white/80'>{item.title}</div>
                          {item.items.map((subItem, j) => (
                            <a
                              key={j}
                              href={subItem.href}
                              className='ml-4.5 flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-white/80 hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:text-white hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] hover:backdrop-blur-md'
                              onClick={handleLinkClick}
                            >
                              {subItem.icon ? subItem.icon : <CircleSmallIcon className='size-4 text-white' />}
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      ))
                    : navItem.items?.map(item => (
                        <a
                          key={item.title}
                          href={item.href}
                          className='ml-3 flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-white/80 hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:text-white hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] hover:backdrop-blur-md'
                          onClick={handleLinkClick}
                        >
                          {item.icon ? item.icon : <CircleSmallIcon className='size-4 text-white' />}
                          {item.title}
                        </a>
                      ))}
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { HeroNavigation, HeroNavigationSmallScreen, type Navigation, type NavigationItem, type NavigationSection }
