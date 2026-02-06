'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party Imports
import { motion } from 'motion/react'

// Component Imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import { Rating } from '@/components/ui/rating'

export type TestimonialCardData = {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

const TestimonialCard = ({ testimonialsList }: { testimonialsList: TestimonialCardData[] }) => {
  // States
  const [testimonials, setTestimonials] = useState<TestimonialCardData[]>(testimonialsList)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials(prevCards => {
        const newArray = [...prevCards]

        newArray.push(newArray.shift()!)

        return newArray
      })
      setCurrentIndex(prev => (prev + 1) % testimonialsList.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [testimonialsList.length])

  return (
    <div className='space-y-8 md:space-y-3'>
      <div className='flex items-center justify-center gap-1'>
        {testimonialsList.map((_, index) => (
          <button
            key={index}
            className={cn(
              'size-2.5 rounded-full transition-colors',
              index === currentIndex ? 'bg-primary' : 'bg-primary/20'
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className='relative mx-auto flex min-h-68 w-full max-w-3xl items-end'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className='absolute left-1/2 min-h-61 w-full -translate-x-1/2'
            style={{
              transformOrigin: 'bottom center'
            }}
            animate={{
              bottom: (index - 2) * -13,
              scale: 1 - index * 0.1,
              opacity: 1 - index * 0.25,
              zIndex: testimonials.length - index
            }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut'
            }}
          >
            <Card className='h-full border-none shadow-lg'>
              <CardContent className='flex flex-col items-center gap-4 text-center'>
                <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />

                <p className='text-muted-foreground line-clamp-3'>{testimonial.content}</p>
                <div className='flex flex-col items-center gap-2'>
                  <Avatar className='size-10.5'>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ', 2)
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-0.5'>
                    <h3 className='font-medium'>{testimonial.name}</h3>
                    <p className='text-muted-foreground text-xs'>
                      {testimonial.role} at{' '}
                      <span className='text-card-foreground font-semibold'>{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
