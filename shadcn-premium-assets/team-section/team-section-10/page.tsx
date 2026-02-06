import Team from '@/components/shadcn-studio/blocks/team-section-10/team-section-10'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-82.png',
    name: 'Omar Saris',
    role: 'Product Manager',
    cardClass: 'md:rounded-tl-[48px]! group-hover:ring-green-600 bg-green-600/20 dark:dark-green-400/20',
    href: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-79.png',
    name: 'Chance Press',
    role: 'UI/UX Designer',
    cardClass: 'md:rounded-tr-[48px]! group-hover:ring-amber-600 bg-amber-600/20 dark:dark-amber-400/20',
    href: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-81.png',
    name: 'Mira Workman',
    role: 'Creative Director',
    cardClass: 'md:rounded-tl-[48px]! group-hover:ring-destructive bg-destructive/20 dark:dark-destructive/20',
    href: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-80.png',
    name: 'Makenna Levin',
    role: 'Product Manager',
    cardClass: 'md:rounded-tr-[48px]! group-hover:ring-sky-600 bg-sky-600/20 dark:dark-sky-400/20',
    href: '#'
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
