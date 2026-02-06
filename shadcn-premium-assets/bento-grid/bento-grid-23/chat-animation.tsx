'use client'

// React Imports
import { useState, useEffect } from 'react'

// Third-party Imports
import { motion, AnimatePresence } from 'motion/react'
import { BotIcon, CheckIcon, CopyIcon } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'

// Util Imports
import { cn } from '@/lib/utils'

// Types
interface Message {
  id: number
  text?: string
  image?: string
  sender: 'user' | 'ai'
  type: 'text' | 'image'
}

const chatMessages: Omit<Message, 'id'>[] = [
  { text: 'Create a monochrome manga-inspired theme', sender: 'user', type: 'text' },
  {
    text: "I've created a monochrome manga-inspired theme that captures the stark black and white contrast found in traditional manga artwork. The theme features deep blacks, crisp whites, and various shades of gray to create a dramatic, high-contrast aesthetic reminiscent of manga panels. The shadows have been adjusted to be more pronounced, mimicking the bold ink work found in manga illustrations.",
    sender: 'ai',
    type: 'text'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/ai-tools-theme-1',
    sender: 'ai',
    type: 'image'
  },
  { text: 'Perfect! Can you make the destructive color more vibrant?', sender: 'user', type: 'text' },
  {
    text: "I've updated the theme with a more vibrant destructive color in both light and dark modes. The new destructive colors are more intense and attention-grabbing while maintaining good contrast with their backgrounds.",
    sender: 'ai',
    type: 'text'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/landing-page/pro/ai-tools-theme-2',
    sender: 'ai',
    type: 'image'
  },
  { text: 'Thank you!', sender: 'user', type: 'text' },
  { text: "You're welcome! Please feel free to ask if you need anything else.", sender: 'ai', type: 'text' }
]

const CopyButton = ({ text }: { text: string }) => {
  // States
  const [copied, setCopied] = useState<boolean>(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)

      return true
    } catch (err) {
      console.error('Failed to copy text: ', err)

      return false
    }
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='relative size-5 cursor-pointer rounded-sm'
      onClick={() => copyToClipboard(text)}
    >
      <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <CheckIcon aria-hidden={true} className='text-green-500' />
      </div>
      <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <CopyIcon aria-hidden={true} />
      </div>
    </Button>
  )
}

const ChatAnimation = () => {
  // States
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatMessages.length) {
        const newMessage: Message = {
          id: currentMessageIndex,
          ...chatMessages[currentMessageIndex]
        }

        setMessages(prev => [...prev, newMessage])

        setCurrentMessageIndex(prev => prev + 1)
      } else {
        setMessages([])
        setCurrentMessageIndex(0)
      }
    }, 1800)

    return () => clearInterval(interval)
  }, [currentMessageIndex])

  const shouldShowAvatar = (message: Message, index: number) => {
    const isFirstMessage = index === 0
    const previousMessage = messages[index - 1]
    const isDifferentFromPrevious = previousMessage && previousMessage.sender !== message.sender

    return isFirstMessage || isDifferentFromPrevious
  }

  return (
    <div className='flex h-full flex-col justify-end space-y-2 overflow-hidden'>
      <AnimatePresence>
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            layout
            className={cn('flex gap-2', {
              'origin-bottom-right justify-end': message.sender === 'user',
              'origin-bottom-left justify-start': message.sender === 'ai'
            })}
          >
            {message.sender === 'ai' && (
              <div
                className={cn('shrink-0', {
                  'opacity-100': shouldShowAvatar(message, index),
                  'opacity-0': !shouldShowAvatar(message, index)
                })}
              >
                <span className='bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full'>
                  <BotIcon className='size-3.5' />
                </span>
              </div>
            )}

            {message.type === 'text' ? (
              <div
                className={cn('flex w-full flex-col gap-1', {
                  'items-end': message.sender === 'user',
                  'items-start': message.sender === 'ai'
                })}
              >
                <div
                  className={cn('max-w-[85%] rounded-lg px-3 py-2 text-xs', {
                    'bg-primary text-primary-foreground rounded-br-none': message.sender === 'user',
                    'bg-muted rounded-bl-none': message.sender === 'ai'
                  })}
                >
                  {message.text}
                </div>
                <CopyButton text={message.text || ''} />
              </div>
            ) : (
              <div
                className={cn('max-w-[85%] overflow-hidden rounded-lg', {
                  'rounded-tr-none': message.sender === 'user',
                  'rounded-bl-none': message.sender === 'ai'
                })}
              >
                <img
                  src={`${message.image}-light.png?height=336&format=auto`}
                  alt='Theme preview'
                  className='inline-block h-auto max-h-84 w-full object-cover dark:hidden'
                />
                <img
                  src={`${message.image}-dark.png?height=336&format=auto`}
                  alt='Theme preview'
                  className='hidden h-auto max-h-84 w-full object-cover dark:inline-block'
                />
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ChatAnimation
