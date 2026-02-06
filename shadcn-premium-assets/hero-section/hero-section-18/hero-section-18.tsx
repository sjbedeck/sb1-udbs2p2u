import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { MotionPreset } from '@/components/ui/motion-preset'

const HeroSection = () => {
  return (
    <section className='flex flex-1 justify-end overflow-hidden py-12 before:absolute before:bottom-0 before:h-3/5 before:w-full before:bg-linear-to-t before:from-neutral-900 sm:py-16 md:items-end lg:py-24'>
      <div className='mx-auto flex w-full max-w-7xl flex-col justify-end gap-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex gap-6 max-md:flex-col'>
          <MotionPreset
            component='h1'
            fade
            blur
            slide
            transition={{ duration: 0.5 }}
            className='flex-1 text-5xl font-bold text-white'
          >
            Helping You Find and Grow Your Dream Home
          </MotionPreset>
          <MotionPreset
            component='p'
            fade
            blur
            slide={{ direction: 'right' }}
            transition={{ duration: 0.5 }}
            delay={0.5}
            className='flex-1 text-white/80'
          >
            In today&apos;s ever-evolving real estate market, finding the perfect home or investment requires the right
            tools, insights, and strategy. Whether you&apos;re buying, selling, or renting—we&apos;re here to simplify
            your journey with expert guidance and verified listings tailored to your needs.
          </MotionPreset>
        </div>
        <MotionPreset
          fade
          blur
          slide
          transition={{ duration: 0.5 }}
          delay={1}
          className='grid overflow-hidden rounded-xl md:grid-cols-2 lg:grid-cols-4'
        >
          <div className='bg-background flex-1 px-6 py-5'>
            <div className='relative w-full flex-1'>
              <Label htmlFor='propertyType' className='text-foreground absolute text-lg font-semibold'>
                Property Type
              </Label>
              <Select defaultValue='classicApartment'>
                <SelectTrigger
                  id='propertyType'
                  className='text-muted-foreground [&_svg]:!text-foreground !h-12 w-full border-none !bg-transparent p-0 pt-7 shadow-none focus-visible:border-none focus-visible:ring-0 [&_svg]:absolute [&_svg]:top-1/2 [&_svg]:right-0 [&_svg]:size-6.5 [&_svg]:-translate-y-1/2'
                >
                  <SelectValue placeholder='Select a property type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='classicApartment'>Classic Apartment</SelectItem>
                    <SelectItem value='modernLoft'>Modern Loft</SelectItem>
                    <SelectItem value='studioApartment'>Studio Apartment</SelectItem>
                    <SelectItem value='luxuryCondo'>Luxury Condo</SelectItem>
                    <SelectItem value='townHouse'>Town House</SelectItem>
                    <SelectItem value='villa'>Villa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='bg-background flex-1 px-6 py-5'>
            <div className='relative w-full flex-1'>
              <Label htmlFor='priceRange' className='text-foreground absolute text-lg font-semibold'>
                Property Type
              </Label>
              <Select defaultValue='$200-$1000'>
                <SelectTrigger
                  id='priceRange'
                  className='text-muted-foreground [&_svg]:!text-foreground !h-12 w-full border-none !bg-transparent p-0 pt-7 shadow-none focus-visible:border-none focus-visible:ring-0 [&_svg]:absolute [&_svg]:top-1/2 [&_svg]:right-0 [&_svg]:size-6.5 [&_svg]:-translate-y-1/2'
                >
                  <SelectValue placeholder='Select a price range' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='$200-$1000'>$200-$1000/-month</SelectItem>
                    <SelectItem value='$1000-$2000'>$1000-$2000/-month</SelectItem>
                    <SelectItem value='$2000-$3000'>$2000-$3000/-month</SelectItem>
                    <SelectItem value='$3000-$5000'>$3000-$5000/-month</SelectItem>
                    <SelectItem value='$5000+'>$5000+/-month</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='bg-background flex-1 px-6 py-5'>
            <div className='relative w-full flex-1'>
              <Label htmlFor='location' className='text-foreground absolute text-lg font-semibold'>
                Location
              </Label>
              <Select defaultValue='california'>
                <SelectTrigger
                  id='propertyType'
                  className='text-muted-foreground [&_svg]:!text-foreground !h-12 w-full border-none !bg-transparent p-0 pt-7 shadow-none focus-visible:border-none focus-visible:ring-0 [&_svg]:absolute [&_svg]:top-1/2 [&_svg]:right-0 [&_svg]:size-6.5 [&_svg]:-translate-y-1/2'
                >
                  <SelectValue placeholder='Select a location' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='california'>California</SelectItem>
                    <SelectItem value='newYork'>New York</SelectItem>
                    <SelectItem value='texas'>Texas</SelectItem>
                    <SelectItem value='florida'>Florida</SelectItem>
                    <SelectItem value='illinois'>Illinois</SelectItem>
                    <SelectItem value='washington'>Washington</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex-1'>
            <Button className='group h-full w-full rounded-none max-md:h-19'>
              <SearchIcon className='size-7.5 group-hover:scale-110' />
            </Button>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
