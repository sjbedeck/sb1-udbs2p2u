'use client'

import { useEffect, useRef } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import { ChevronsDownUpIcon } from '@/components/shadcn-studio/blocks/portfolio-17/chevron-up-down-icon'
import type { ChevronsDownUpIconHandle } from '@/components/shadcn-studio/blocks/portfolio-17/chevron-up-down-icon'

type AnimatedChevronsAccordionRootProps = React.ComponentProps<typeof Accordion>

function AnimatedChevronsAccordionRoot({ ...props }: AnimatedChevronsAccordionRootProps) {
  return <Accordion {...props} />
}

type AnimatedChevronsAccordionItemProps = React.ComponentProps<typeof AccordionItem>

function AnimatedChevronsAccordionItem({ ...props }: AnimatedChevronsAccordionItemProps) {
  return <AccordionItem {...props} />
}

type AnimatedChevronsAccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  children: React.ReactNode
}

function AnimatedChevronsAccordionTrigger({ children, className, ...props }: AnimatedChevronsAccordionTriggerProps) {
  const iconRef = useRef<ChevronsDownUpIconHandle>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const trigger = triggerRef.current

    if (!trigger) return

    const handleStateChange = () => {
      const state = trigger.getAttribute('data-state')

      if (state === 'open') {
        iconRef.current?.startAnimation()
      } else {
        iconRef.current?.stopAnimation()
      }
    }

    // Initial check
    handleStateChange()

    // Create a MutationObserver to watch for data-state changes
    const observer = new MutationObserver(handleStateChange)

    observer.observe(trigger, {
      attributes: true,
      attributeFilter: ['data-state']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger ref={triggerRef} data-slot='accordion-trigger' className={className} {...props}>
        {children}
        <ChevronsDownUpIcon ref={iconRef} className='mr-10.5 shrink-0' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

type AnimatedChevronsAccordionContentProps = React.ComponentProps<typeof AccordionContent>

function AnimatedChevronsAccordionContent({ ...props }: AnimatedChevronsAccordionContentProps) {
  return <AccordionContent {...props} />
}

export {
  AnimatedChevronsAccordionRoot,
  AnimatedChevronsAccordionItem,
  AnimatedChevronsAccordionTrigger,
  AnimatedChevronsAccordionContent
}
