import Team from '@/components/shadcn-studio/blocks/team-section-12/team-section-12'
import type { TeamMember } from '@/components/shadcn-studio/blocks/team-section-12/team-section-12'

const teamMember: TeamMember[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-57.png',
    name: 'Ethan Caldwell',
    title: 'Executive Director',
    description: 'Visionary leader driving innovation and fostering a culture of collaboration and growth.',
    type: 'management',
    facebookLink: '#',
    twitterLink: '#',
    githubLink: '#',
    instagramLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-56.png',
    name: 'Oliver Grayson',
    title: 'Chief Executive Officer',
    description: 'Dynamic CEO inspiring creativity, strategic thinking, and a unified team spirit.',
    type: 'management',
    facebookLink: '#',
    twitterLink: '#',
    githubLink: '#',
    instagramLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-55.png',
    name: 'Liam Hawthorne',
    title: 'Head of Innovation',
    description: 'Innovative thinker passionate about transforming ideas into impactful solutions.',
    type: 'design team',
    facebookLink: '#',
    twitterLink: '#',
    githubLink: '#',
    instagramLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-52.png',
    name: 'Lucas Bennett',
    title: 'UI/UX Architect',
    description: 'Expert UI/UX architect dedicated to crafting intuitive and memorable user experiences.',
    type: 'design team',
    facebookLink: '#',
    twitterLink: '#',
    githubLink: '#',
    instagramLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-50.png',
    name: 'Mason Rivers',
    title: 'Senior Developer',
    description: 'Skilled developer committed to building robust, scalable, and efficient digital products.',
    type: 'Development team',
    facebookLink: '#',
    twitterLink: '#',
    githubLink: '#',
    instagramLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-54.png',
    name: 'Noah Sinclair',
    title: 'A Chief Marketing Officer',
    description: 'Marketing strategist focused on elevating brand presence and driving successful campaigns.',
    type: 'Marketing team',
    facebookLink: '#',
    twitterLink: '#',
    githubLink: '#',
    instagramLink: '#'
  }
]

const TeamPage = () => {
  return <Team teamMember={teamMember} />
}

export default TeamPage
