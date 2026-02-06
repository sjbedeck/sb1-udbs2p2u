import Team from '@/components/shadcn-studio/blocks/team-section-16/team-section-16'

const teamMembers = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-46.png',
    name: 'Phillip Bothman',
    role: 'Founder & CEO'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-45.png',
    name: 'Marcus Chen',
    role: 'Senior Frontend Developer'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-107.png',
    name: 'Emma Thompson',
    role: 'Software Engineer'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-44.png',
    imgDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-44-dark.png',
    name: 'David Mitchell',
    role: 'UI/UX Designer'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-47.png',
    name: 'Alex Rodriguez',
    role: 'Backend Developer'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-48.png',
    imgDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-48-dark.png',
    name: 'Sarah Johnson',
    role: 'Product Manager'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-108.png',
    name: 'Jessica Martinez',
    role: 'DevOps Engineer'
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
