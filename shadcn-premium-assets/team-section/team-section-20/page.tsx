import Team from '@/components/shadcn-studio/blocks/team-section-20/team-section-20'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-60.png',
    name: 'Jaxson Vetrovs',
    role: 'Marketing head',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-59.png',
    name: 'Makenna Donin',
    role: 'Product Manager',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-58.png',
    name: 'Leo Dorwart',
    role: 'Ux designer',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-109.png',
    name: 'Jessica Williams',
    role: 'UX Designer',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-110.png',
    name: 'Michael Brown',
    role: 'Frontend Developer',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-111.png',
    name: 'Daniel Martinez',
    role: 'Backend Developer',
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
