import Team from '@/components/shadcn-studio/blocks/team-section-19/team-section-19'

const teamMembers = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-64.png',
    name: 'Marcus Chen',
    role: 'CEO & Founder',
    description: 'Visionary leader driving innovation and company growth.'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-63.png',
    name: 'James Rodriguez',
    role: 'CTO',
    description: 'Tech expert leading engineering and product development.'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-62.png',
    name: 'Sarah Mitchell',
    role: 'Marketing Lead',
    description: 'Strategic marketer scaling brand presence and engagement.'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-61.png',
    name: 'David Thompson',
    role: 'Lead Engineer',
    description: 'Senior developer architecting scalable solutions.'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-65.png',
    name: 'Alex Kumar',
    role: 'Product Manager',
    description: 'Product strategist delivering user-centric experiences.'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-66.png',
    name: 'Emily Parker',
    role: 'Design Director',
    description: 'Creative lead crafting exceptional user interfaces.'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-67.png',
    name: 'Ryan Foster',
    role: 'DevOps Lead',
    description: 'Infrastructure expert ensuring reliable deployments.'
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
