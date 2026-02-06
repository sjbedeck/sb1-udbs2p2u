import { BotMessageSquareIcon, LanguagesIcon, LightbulbIcon, TicketIcon } from 'lucide-react'

import SocialProof from '@/components/shadcn-studio/blocks/social-proof-10/social-proof-10'

const socialProofs = [
  {
    id: 1,
    icon: <BotMessageSquareIcon className='size-7' />,
    title: 'Conversations',
    value: '50K+'
  },
  {
    id: 2,
    icon: <LanguagesIcon className='size-7' />,
    title: 'Languages',
    value: '10+'
  },
  {
    id: 3,
    icon: <TicketIcon className='size-7' />,
    title: 'Support Tickets',
    value: '2844+'
  },
  {
    id: 4,
    icon: <LightbulbIcon className='size-7' />,
    title: 'Availability',
    value: '24/7'
  }
]

const SocialProofPage = () => {
  return <SocialProof socialProofs={socialProofs} />
}

export default SocialProofPage
