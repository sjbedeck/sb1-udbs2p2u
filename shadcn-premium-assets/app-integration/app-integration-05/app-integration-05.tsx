import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Integration = {
  name: string
  image: string
}[]

const AppIntegration = ({ integrations }: { integrations: Integration }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='text-sm font-normal'>
            App Integration
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Simply connect the apps to boost your profile
          </h2>
          <p className='text-muted-foreground text-xl'>Supercharge your work by connecting the tools</p>
        </div>

        {/* Apps */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'>
          {integrations.map((app, index) => (
            <div key={index} className='bg-muted flex items-center gap-6 rounded-md p-4'>
              <Avatar className='size-12 rounded-lg'>
                <AvatarFallback className='bg-card rounded-lg'>
                  <img src={app.image} alt={app.name} className='size-7 object-contain' />
                </AvatarFallback>
              </Avatar>
              <p className='text-xl font-medium'>{app.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
