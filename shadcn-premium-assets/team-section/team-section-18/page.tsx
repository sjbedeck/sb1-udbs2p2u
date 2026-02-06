import Team from '@/components/shadcn-studio/blocks/team-section-18/team-section-18'

const teamMembers = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-68.png',
    name: 'Phillip Bothman',
    role: 'CEO & Founder',
    description:
      'Phillip is the visionary founder and CEO, passionate about building scalable web applications and leading teams to deliver high-quality software. He enjoys mentoring junior developers and exploring new technologies.',
    socialLinks: {
      facebook: '#',
      github: '#',
      twitter: '#',
      insta: '#'
    }
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-67.png',
    name: 'Mike Lee',
    role: 'Frontend Developer',
    description:
      'Mike specializes in crafting beautiful and performant user interfaces using React and TypeScript. She loves collaborating with designers to create seamless user experiences.',
    socialLinks: {
      facebook: '#',
      github: '#',
      twitter: '#',
      insta: '#'
    }
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-66.png',

    name: 'Emily Park',
    role: 'UI/UX Designer',
    description:
      'Emily is dedicated to designing intuitive and engaging digital experiences. She combines creativity with user research to deliver interfaces that delight users.',
    socialLinks: {
      facebook: '#',
      github: '#',
      twitter: '#',
      insta: '#'
    }
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-65.png',
    name: 'Michael Chen',
    role: 'Backend Developer',
    description:
      'Michael focuses on building robust APIs and microservices. He is experienced with Node.js, databases, and cloud infrastructure, ensuring reliability and scalability.',
    socialLinks: {
      facebook: '#',
      github: '#',
      twitter: '#',
      insta: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
