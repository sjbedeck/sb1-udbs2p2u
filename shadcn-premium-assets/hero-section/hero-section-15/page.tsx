import HeroSection from '@/components/shadcn-studio/blocks/hero-section-15/hero-section-15'
import type { MenuItem } from '@/components/shadcn-studio/blocks/hero-section-15/hero-section-15'
import Header from '@/components/shadcn-studio/blocks/hero-section-15/header'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

import Tomato from '@/assets/svg/tomato'
import Onion from '@/assets/svg/onion'
import Cabbage from '@/assets/svg/cabbage'
import Chilli from '@/assets/svg/chilli'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const menuItems: MenuItem[] = [
  {
    heading: 'Mexican Grilled Cheese Burger + Fries',
    description:
      'Satisfy your taste buds with our mouthwatering Mexican Grilled Cheese Burger, a bold fusion of spicy Mexican herbs, juicy grilled patty, crisp lettuce, and melted cheese, all tucked into a toasted bun. This fiery delight is perfectly paired with crispy golden fries, making it the ultimate combo for those who crave flavor, comfort, and satisfaction in every bite.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-41.png',
    buyNow: '#',
    value: '1',
    ingredients: [
      <Tomato key='tomato' />,
      <Onion key='onion' />,
      <Cabbage key='cabbage-1' />,
      <Chilli key='chilli-1' />,
      <Cabbage key='cabbage-2' />,
      <Chilli key='chilli-2' />
    ]
  },
  {
    heading: '2 Mexican Grilled Cheese Burgers + Fries',
    description:
      'Double the flavor with our irresistible 2 Mexican Grilled Cheese Burgers, each packed with a bold fusion of spicy Mexican herbs, juicy grilled patties, crisp lettuce, and melted cheese, all nestled in a perfectly toasted bun.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-40.png',
    buyNow: '#',
    value: '2',
    ingredients: [
      <Tomato key='tomato' />,
      <Onion key='onion' />,
      <Cabbage key='cabbage-1' />,
      <Chilli key='chilli-1' />,
      <Cabbage key='cabbage-2' />,
      <Chilli key='chilli-2' />
    ]
  },
  {
    heading: 'Mexican Grilled Cheese Burger + Coke',
    description:
      'Satisfy your taste buds with our mouthwatering Mexican Grilled Cheese Burger a bold fusion of spicy Mexican herbs, juicy grilled patty, crisp lettuce, and melted cheese, all tucked into a toasted bun. This fiery delight is perfectly paired with an ice-cold Coca-Cola, making it the ultimate combo for those who crave flavor, comfort, and refreshment in every bite.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-46.png',
    buyNow: '#',
    value: '3',
    ingredients: [
      <Tomato key='tomato' />,
      <Onion key='onion' />,
      <Cabbage key='cabbage-1' />,
      <Chilli key='chilli-1' />,
      <Cabbage key='cabbage-2' />,
      <Chilli key='chilli-2' />
    ]
  },
  {
    heading: 'Egg Patty Burger',
    description:
      'Satisfy your taste buds with our mouthwatering Egg Patty Burger, a bold fusion of spicy Mexican herbs, juicy grilled patty, crisp lettuce, and melted cheese, all tucked into a toasted bun. This fiery delight is perfectly paired with an ice-cold Coca-Cola, making it the ultimate combo for those who crave flavor, comfort, and refreshment in every bite.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-39.png',
    buyNow: '#',
    value: '4',
    ingredients: [
      <Tomato key='tomato' />,
      <Onion key='onion' />,
      <Cabbage key='cabbage-1' />,
      <Chilli key='chilli-1' />,
      <Cabbage key='cabbage-2' />,
      <Chilli key='chilli-2' />
    ]
  },
  {
    heading: 'Burger with Fries, Spices & Shake Bag',
    description:
      'Satisfy your taste buds with our mouthwatering Burger with Fries, Spices & Shake Bag, a bold fusion of flavors and textures that will leave you craving more. This delightful combo features a juicy grilled burger, perfectly seasoned fries, and a shake bag filled with a variety of delicious spices to elevate your meal.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-38.png',
    buyNow: '#',
    value: '5',
    ingredients: [
      <Tomato key='tomato' />,
      <Onion key='onion' />,
      <Cabbage key='cabbage-1' />,
      <Chilli key='chilli-1' />,
      <Cabbage key='cabbage-2' />,
      <Chilli key='chilli-2' />
    ]
  },
  {
    heading: 'Burger and Sprite, K-pop',
    description:
      'Satisfy your taste buds with our mouthwatering Burger and Sprite, K-pop, a bold fusion of spicy Mexican herbs, juicy grilled patty, crisp lettuce, and melted cheese, all tucked into a toasted bun. This fiery delight is perfectly paired with an ice-cold Sprite, making it the ultimate combo for those who crave flavor, comfort, and refreshment in every bite.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-37.png',
    buyNow: '#',
    value: '6',
    ingredients: [
      <Tomato key='tomato' />,
      <Onion key='onion' />,
      <Cabbage key='cabbage-1' />,
      <Chilli key='chilli-1' />,
      <Cabbage key='cabbage-2' />,
      <Chilli key='chilli-2' />
    ]
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection menuItems={menuItems} />
      </main>
    </div>
  )
}

export default HeroSectionPage
