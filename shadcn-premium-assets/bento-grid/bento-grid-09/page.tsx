import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-09/bento-grid-09'
import type { BentoGridProps } from '@/components/shadcn-studio/blocks/bento-grid-09/bento-grid-09'

const data: BentoGridProps = {
  all: {
    products: [
      {
        name: 'Lite casual shoes',
        price: 299,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-26.png',
            color: 'bg-cyan-500 outline-cyan-500'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-47.png',
            color: 'bg-orange-400 outline-orange-400'
          }
        ]
      },
      {
        name: 'Crazy shoes',
        price: 249,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-25.png',
            color: 'bg-yellow-400 outline-yellow-400'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-46.png',
            color: 'bg-pink-400 outline-pink-400'
          }
        ]
      }
    ]
  },
  trending: {
    products: [
      {
        name: 'Cross-body bag',
        price: 299,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-33.png',
            color: 'bg-black outline-black'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-44.png',
            color: 'bg-gray-400 outline-gray-400'
          }
        ]
      },
      {
        name: 'Cool cap',
        price: 59,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-32.png',
            color: 'bg-amber-100 outline-amber-100'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-45.png',
            color: 'bg-sky-700 outline-sky-700'
          }
        ]
      },
      {
        name: 'Lite casual shoes',
        price: 299,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-26.png',
            color: 'bg-cyan-500 outline-cyan-500'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-47.png',
            color: 'bg-orange-400 outline-orange-400'
          }
        ]
      },
      {
        name: 'Crazy shoes',
        price: 249,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-25.png',
            color: 'bg-yellow-400 outline-yellow-400'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-46.png',
            color: 'bg-pink-400 outline-pink-400'
          }
        ]
      }
    ]
  },
  bestReviews: {
    products: [
      {
        name: 'Sneaker shoes',
        price: 225,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-34.png',
            color: 'bg-gray-300 outline-gray-300'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-43.png',
            color: 'bg-black outline-black'
          }
        ]
      },
      {
        name: 'Formal shoes',
        price: 159,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-35.png',
            color: 'bg-black outline-black'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-42.png',
            color: 'bg-rose-900 outline-rose-900'
          }
        ]
      },
      {
        name: 'Casual shoes',
        price: 299,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-36.png',
            color: 'bg-stone-200 outline-stone-200'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-41.png',
            color: 'bg-stone-800 outline-stone-800'
          }
        ]
      },
      {
        name: 'Sports shoes',
        price: 249,
        link: '#',
        variants: [
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-37.png',
            color: 'bg-sky-400 outline-sky-400'
          },
          {
            image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-40.png',
            color: 'bg-pink-400 outline-pink-400'
          }
        ]
      }
    ]
  }
}

const BentoGridPage = () => {
  return <BentoGrid all={data.all} trending={data.trending} bestReviews={data.bestReviews} />
}

export default BentoGridPage
