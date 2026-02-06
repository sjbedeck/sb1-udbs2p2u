import Features from '@/components/shadcn-studio/blocks/features-section-14/features-section-14'
import type { NotificationCard } from '@/components/shadcn-studio/blocks/features-section-14/notification-stack'

const notifications: NotificationCard[] = [
  {
    id: '1',
    name: 'Steve Rogers',
    time: 'Today, 11:56',
    amount: '$49',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'SR'
  },
  {
    id: '2',
    name: 'Tony Stark',
    time: 'Today, 10:32',
    amount: '$89',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'TS'
  },
  {
    id: '3',
    name: 'Bruce Banner',
    time: 'Today, 09:15',
    amount: '$156',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'BB'
  }
]

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'HL',
    name: 'Olivia Sparks',
    size: 'size-12'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    size: 'size-16'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    size: 'size-20'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson',
    size: 'size-16'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png',
    fallback: 'MY',
    name: 'Maya Wilson',
    size: 'size-12'
  }
]

const FeaturesPage = () => {
  return <Features notifications={notifications} avatarData={avatars} />
}

export default FeaturesPage
