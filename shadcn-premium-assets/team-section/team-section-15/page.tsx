import Team from '@/components/shadcn-studio/blocks/team-section-15/team-section-15'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-53.png',
    name: 'Makenna Levin',
    role: 'Product Manager',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-61.png',
    name: 'Elizabeth Jane ',
    role: 'Creative Director',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-54.png',
    name: 'Thomas Henry',
    role: 'UI/UX Designer',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
