import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-10/app-integration-10'

const apps = [
  {
    name: 'Instagram',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/instagram-icon.png',
    bgColor: 'bg-destructive/10'
  },
  {
    name: 'Github',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png',
    bgColor: 'bg-primary/10'
  },
  {
    name: 'Youtube',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/youtube-icon.png',
    bgColor: 'bg-destructive/10'
  },
  {
    name: 'Gmail',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/gmail-icon.png',
    bgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
    name: 'LinkedIn',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/linkdin-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    name: 'WhatsApp',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/whatsapp-icon.png',
    bgColor: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
    name: 'Facebook',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    name: 'Google',
    icon: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png',
    bgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration apps={apps} />
}

export default AppIntegrationPage
