import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-22/about-us-page-22'

const aboutData = {
  name: 'John Doe',
  role: 'UI/UX Designer',
  image: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-18.png',
  imageAlt: 'John Doe - UI/UX Designer',
  availableForHire: true,
  socialLinks: [
    { icon: 'instagram' as const, url: '#' },
    { icon: 'dribbble' as const, url: '#' },
    { icon: 'linkedin' as const, url: '#' },
    { icon: 'github' as const, url: '#' }
  ],
  signature: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-28.png',
  signatureDark: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-28-dark.png',
  aboutContent: {
    paragraphs: [
      "**Design isn't just my job—it's my passion.** What began as a hobby turned into a full-fledged career when I realized the true power of design: not just making things beautiful, but making them work better.",
      '**My approach is all about crafting user interfaces that serve a real purpose.** I believe great design should solve problems and provide seamless experiences.',
      "**I'm a perfectionist when it comes to the details, and I believe it's the little things that elevate design from good to great.** This meticulous attention to detail allows me to create lasting relationships with clients."
    ]
  },
  toolsTitle: 'Tools That Power My Design Process',
  toolsDescription:
    'My design process is powered by tools that encourage clarity, collaboration, and creativity — turning vision into user-centered experiences.',
  tools: [
    {
      name: 'Figma',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-19.png',
      url: 'https://figma.com',
      showName: true
    },
    {
      name: 'Framer',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-20.png',
      darkIcon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-20-dark.png',
      url: 'https://framer.com',
      showName: true
    },
    {
      name: 'Blender',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-21.png',
      url: 'https://blender.org',
      showName: true
    },
    {
      name: 'Webflow',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-22.png',
      url: 'https://webflow.com',
      showName: true
    },
    {
      name: 'Notion',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-23.png',
      darkIcon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-23-dark.png',
      url: 'https://notion.so',
      showName: true
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-24.png',
      darkIcon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-24-dark.png',
      url: 'https://github.com',
      showName: true
    },
    {
      name: 'Adobe XD',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-25.png',
      url: 'https://adobe.com/products/xd',
      showName: true
    },
    {
      name: 'Miro',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-26.png',
      url: 'https://miro.com',
      showName: true
    },
    {
      name: 'Canva',
      icon: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/craft/image-27.png',
      url: 'https://canva.com',
      showName: false
    }
  ]
}

const AboutUsPage = () => {
  return <AboutUs {...aboutData} />
}

export default AboutUsPage
