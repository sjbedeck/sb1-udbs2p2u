import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

import AccountingOfTransaction from '@/components/shadcn-studio/blocks/bento-grid-15/accounting-of-transaction'
import type { transaction } from '@/components/shadcn-studio/blocks/bento-grid-15/accounting-of-transaction'
import ExchangeCurrencyCard from '@/components/shadcn-studio/blocks/bento-grid-15/exchange-currency-card'
import UpdatedBalanceCard from '@/components/shadcn-studio/blocks/bento-grid-15/updated-balanced-card'
import type { TransactionListType } from '@/components/shadcn-studio/blocks/bento-grid-15/updated-balanced-card'

const Transactions: transaction[] = [
  {
    title: 'Subscriptions',
    amount: 12236,
    logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png',
    progressValue: 75
  },
  {
    title: 'Taxes & rents',
    amount: 8236,
    logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png',
    progressValue: 50
  },
  {
    title: 'Groceries',
    amount: 1699,
    logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png',
    progressValue: 25
  },
  {
    title: 'Fuels & transports',
    amount: 420,
    logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png',
    progressValue: 15
  },
  {
    title: 'Internet & bills',
    amount: 530,
    logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png',
    progressValue: 70
  }
]

const TransactionList: TransactionListType[] = [
  {
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-66.png',
    platform: 'Netflix',
    purpose: 'Entertainment',
    amount: 299,
    transactionType: 'debit'
  },
  {
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-68.png',
    platform: 'McDonalds',
    purpose: 'Food & Dining',
    amount: 69,
    transactionType: 'debit'
  },
  {
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-75.png',
    platform: 'Shell',
    purpose: 'Fuel Refund',
    amount: 600,
    transactionType: 'credit'
  },
  {
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-72.png',
    platform: 'H&M',
    purpose: 'Shopping',
    amount: 300,
    transactionType: 'debit'
  },
  {
    logo: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-69.png',
    platform: 'Starbucks',
    purpose: 'Refund',
    amount: 399,
    transactionType: 'credit'
  }
]

const BentoGrid = () => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Grid Section */}
        <div className='space-y-6'>
          {/* Grid Row 1 */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Card 1 */}
            <MotionPreset fade blur slide={{ direction: 'down', offset: 15 }} transition={{ duration: 0.5 }}>
              <UpdatedBalanceCard transactionList={TransactionList} />
            </MotionPreset>

            {/* Card 2 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              <AccountingOfTransaction transactions={Transactions} />
            </MotionPreset>
          </div>

          {/* Grid Row 2 */}
          <div className='grid gap-6 xl:grid-cols-5'>
            {/* Card 3 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.2}
              transition={{ duration: 0.5 }}
              className='min-h-140 sm:min-h-130 md:min-h-97.5 xl:col-span-3'
            >
              <Card className='group bg-muted relative h-full overflow-hidden border-0 shadow-none'>
                <CardContent className='flex h-full items-center justify-between gap-6 max-md:flex-col'>
                  <div className='flex flex-col gap-4 md:max-w-70.25'>
                    <MotionPreset
                      component='h3'
                      fade
                      blur
                      slide={{ direction: 'down', offset: 15 }}
                      delay={1.35}
                      className='text-5xl font-medium max-md:text-2xl max-md:font-semibold md:leading-15'
                    >
                      Introducing FlowLedger
                    </MotionPreset>
                    <MotionPreset
                      component='p'
                      fade
                      blur
                      slide={{ direction: 'down', offset: 15 }}
                      delay={1.5}
                      className='text-muted-foreground text-lg'
                    >
                      Manage balances, expenses, and global payments in one secure app built to simplify your entire
                      financial life.
                    </MotionPreset>
                  </div>

                  <MotionPreset
                    fade
                    blur
                    slide={{ direction: 'down', offset: 15 }}
                    delay={1.65}
                    className='relative size-full'
                  >
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-64.png'
                      alt='Mobile image'
                      className='absolute -bottom-6 h-86.25 transition-transform duration-300 group-hover:scale-105 max-md:left-1/2 max-md:-translate-x-1/2 md:right-10 dark:hidden'
                    />
                    <img
                      src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-64-dark.png'
                      alt='Mobile image dark'
                      className='absolute -bottom-6 hidden h-86.25 transition-transform duration-300 group-hover:scale-105 max-md:left-1/2 max-md:-translate-x-1/2 md:right-10 dark:block'
                    />
                  </MotionPreset>
                </CardContent>
              </Card>
            </MotionPreset>

            {/* Card 4 */}
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 15 }}
              delay={1.8}
              transition={{ duration: 0.5 }}
              className='xl:col-span-2'
            >
              <ExchangeCurrencyCard />
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
