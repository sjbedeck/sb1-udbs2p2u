import { Fragment } from 'react'

import CompareUILib from '@/components/shadcn-studio/blocks/compare-01/compare-01'
import { Badge } from '@/components/ui/badge'
import GrowLogo from '@/assets/svg/grow-logo'
import CoMediaLogo from '@/assets/svg/comedia-logo'
import HiveStudioLogo from '@/assets/svg/hive-studio-logo'

const rowdata = [
  {
    name: 'Feature',
    isKey: true,
    columnData: [
      'Best For',
      'Strategy Approach',
      'Work Quality',
      'Pricing',
      'Iteration Speed',
      'Support',
      'Asset Management',
      'SEO & Content',
      'Communication',
      'Team Collaboration'
    ]
  },
  {
    name: 'CoMedia',
    icon: <CoMediaLogo />,
    columnData: [
      'Small businesses needing basic help',
      'Basic ready-made plans',
      <Badge key='comedia-badge' className='bg-destructive/10 text-destructive rounded-sm px-3 py-1'>
        Average
      </Badge>,
      <Fragment key='comedia-price'>
        <span className='font-medium'>$499</span> Medium pricing
      </Fragment>,
      'Slow updates',
      '😕',
      'Files scattered in different places',
      'Basic SEO support',
      '❌',
      'Very little teamwork'
    ]
  },
  {
    name: 'Grow',
    icon: <GrowLogo className='size-6' />,
    isHighlighted: true,
    columnData: [
      'All types and sizes of businesses',
      'Custom plan made for your business',
      <Badge
        key='grow-badge'
        className='rounded-sm bg-green-600/10 px-3 py-1 text-green-600 dark:bg-green-400/10 dark:text-green-400'
      >
        Excellent
      </Badge>,
      <Fragment key='grow-price'>
        <span className='font-semibold'>$399</span> Fair pricing for the work you get
      </Fragment>,
      'Fast and regular updates',
      '🤩',
      'All files kept in one neat system',
      'Easy SEO setup with helpful content',
      '✅',
      'Works closely with your team'
    ]
  },
  {
    name: 'Hive-Studio',
    icon: <HiveStudioLogo />,
    columnData: [
      'Growing small–medium businesses',
      'General plans for most businesses',
      <Badge
        key='hive-badge'
        className='rounded-sm bg-amber-600/10 px-3 py-1 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400'
      >
        Good
      </Badge>,
      <Fragment key='hive-price'>
        <span className='font-medium'>$599</span> High pricing
      </Fragment>,
      'Decent speed',
      '🙂',
      'Files somewhat organized',
      'Medium-level SEO',
      '✅',
      'Some teamwork'
    ]
  }
]

const CompareUILibPage = () => {
  return <CompareUILib rowdata={rowdata} />
}

export default CompareUILibPage
