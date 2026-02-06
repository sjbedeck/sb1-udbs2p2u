'use client'

import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { motion } from 'motion/react'

export type Card = {
  id: string
  card: ReactNode
}

const CardStack = ({ cards: initialCards }: { cards: Card[] }) => {
  const [cards, setCards] = useState<Card[]>(initialCards)

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prevCards => {
        const newArray = [...prevCards]

        newArray.unshift(newArray.pop()!)

        return newArray
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className='absolute inset-x-4 flex justify-center sm:inset-x-6'
          style={{
            transformOrigin: 'top center'
          }}
          animate={{
            top: (index - 3) * -14,
            scale: 1 - index * 0.075,
            opacity: 1 - index * 0.2,
            zIndex: cards.length - index
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut'
          }}
        >
          {card.card}
        </motion.div>
      ))}
    </>
  )
}

export default CardStack
