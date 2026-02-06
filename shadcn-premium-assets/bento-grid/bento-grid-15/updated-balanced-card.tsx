'use client'

import type { ComponentPropsWithoutRef } from 'react'
import React, { useEffect, useMemo, useState } from 'react'

import type { MotionProps } from 'motion/react'
import { AnimatePresence, motion } from 'motion/react'

import { ArrowUpIcon, DollarSignIcon, LoaderIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'

import { cn } from '@/lib/utils'

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: 1, opacity: 1 },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    transition: { type: 'spring', stiffness: 350, damping: 40 }
  }

  return (
    <motion.div {...animations} layout className='mx-auto w-full'>
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
  delay?: number
  onTopItemChange?: (index: number) => void
}

export type TransactionListType = {
  logo: string
  platform: string
  purpose: string
  amount: number
  transactionType: 'credit' | 'debit'
}

// Animated list component
const AnimatedList = React.memo(
  ({ children, className, delay = 1000, onTopItemChange, ...props }: AnimatedListProps) => {
    const childrenArray = useMemo(() => React.Children.toArray(children), [children])

    const [items, setItems] = useState(() =>
      childrenArray.map((child, idx) => ({
        id: `${(child as React.ReactElement).key}-${idx}`,
        element: child,
        originalIndex: idx
      }))
    )

    const [currentTopIndex, setCurrentTopIndex] = useState(0)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setItems(prevItems => {
          const newItems = [...prevItems]
          const firstItem = newItems.shift()

          if (firstItem) {
            // Re-add at the end with a new id to trigger exit/enter animations
            newItems.push({
              ...firstItem,
              id: `${firstItem.id}-${Date.now()}`
            })

            // Update the current top index
            if (newItems.length > 0) {
              setCurrentTopIndex(newItems[0].originalIndex)
            }
          }

          return newItems
        })
      }, delay)

      return () => clearTimeout(timeout)
    }, [items, delay])

    // Notify parent of the top item change in a separate effect
    useEffect(() => {
      if (onTopItemChange) {
        onTopItemChange(currentTopIndex)
      }
    }, [currentTopIndex, onTopItemChange])

    return (
      <div className={cn(`flex flex-col items-center gap-4`, className)} {...props}>
        <AnimatePresence mode='popLayout'>
          {items.map(item => (
            <AnimatedListItem key={item.id}>{item.element}</AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = 'AnimatedList'

const UpdatedBalanceCard = ({ transactionList }: { transactionList: TransactionListType[] }) => {
  const [currentTopIndex, setCurrentTopIndex] = useState(0)
  const initialBalance = 21432

  const handleTopItemChange = (index: number) => {
    setCurrentTopIndex(index)
  }

  const currentTopItem = transactionList[currentTopIndex]

  // Calculate current balance based on transaction type
  const currentBalance = useMemo(() => {
    if (currentTopItem.transactionType === 'credit') {
      return initialBalance + currentTopItem.amount
    } else {
      return initialBalance - currentTopItem.amount
    }
  }, [currentTopItem, initialBalance])

  return (
    <Card className='bg-muted group/palette h-full border-0 shadow-none lg:col-span-2'>
      <MotionPreset
        fade
        blur
        slide={{ direction: 'down', offset: 15 }}
        delay={0.15}
        transition={{ duration: 0.5 }}
        className='relative flex h-85.5 flex-col items-center gap-4 overflow-hidden py-3'
      >
        {/* Balance Info */}
        <div className='grid w-full grid-cols-6 items-center gap-5 max-sm:px-1'>
          <div className='h-14.5 rounded-r-full border border-l-0 p-2 max-xl:hidden' />
          <div className='text-card-foreground col-span-4 flex rounded-full border p-2 max-xl:col-span-full'>
            <div className='bg-card flex items-center gap-3 rounded-l-full border-r px-6 py-2'>
              <div className='bg-primary text-primary-foreground flex size-9.5 shrink-0 items-center justify-center rounded-full'>
                <DollarSignIcon className='size-5' />
              </div>
              <div className='flex flex-col'>
                <span className='text-muted-foreground text-xs'>Current balance</span>
                <span className='font-medium'>${<NumberTicker stiffness={350} value={currentBalance} />}</span>
              </div>
            </div>
            <div className='bg-card flex items-center gap-3 rounded-r-full px-6 py-2'>
              <div className='bg-primary text-primary-foreground flex size-9.5 shrink-0 items-center justify-center rounded-full'>
                <LoaderIcon className='size-5' />
              </div>
              <div className='flex flex-col'>
                <span className='text-muted-foreground text-xs'>Due payments</span>
                <span className='font-medium'>$6,135</span>
              </div>
            </div>
          </div>
          <div className='h-14.5 rounded-l-full border border-r-0 p-2 max-xl:hidden' />
        </div>

        {/* Spending Info */}
        <Badge className='gap-3 border-none px-3 py-2 shadow-xl'>
          <div className='bg-primary-foreground text-primary flex size-6 items-center justify-center rounded-full'>
            <ArrowUpIcon className='size-3.5' />
          </div>
          <span className='text-sm font-light'>
            {currentTopItem.transactionType === 'credit' ? 'Earned' : 'Spend'} : $
            {<NumberTicker stiffness={350} value={currentTopItem.amount} />}
          </span>
        </Badge>

        {/* Transaction list */}
        <AnimatedList
          className='w-full max-w-112.5 gap-1.5 px-6 max-md:max-w-full'
          onTopItemChange={handleTopItemChange}
        >
          {transactionList.map((item, index) => (
            <div
              key={index}
              className='bg-card text-card-foreground flex items-center justify-between rounded-md px-3 py-1.5 shadow-sm'
            >
              <div className='flex-1'>
                <img src={item.logo} alt={item.platform} className='h-3.75' />
              </div>
              <span className='flex-1 font-medium'>{item.platform}</span>
              <span className='text-muted-foreground flex-1 text-center text-xs font-light'>{item.purpose}</span>
              <span
                className={cn(
                  'flex-1 text-end text-sm',
                  item.transactionType === 'credit' ? 'text-green-600 dark:text-green-400' : 'text-destructive'
                )}
              >
                ${item.amount}
              </span>
            </div>
          ))}
        </AnimatedList>
        <div className='from-muted/90 pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-10% to-transparent' />
      </MotionPreset>

      <CardContent className='flex flex-col gap-4 md:items-center'>
        <MotionPreset
          component='h3'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.3}
          transition={{ duration: 0.5 }}
          className='text-2xl font-semibold md:text-center'
        >
          Updated balance
        </MotionPreset>
        <MotionPreset
          component='p'
          fade
          blur
          slide={{ direction: 'down', offset: 15 }}
          delay={0.45}
          transition={{ duration: 0.5 }}
          className='text-muted-foreground text-lg md:text-center'
        >
          Track every spend with clear categories and insights, making it easier to control budgets and spot savings
          opportunities.
        </MotionPreset>
      </CardContent>
    </Card>
  )
}

export default UpdatedBalanceCard
