'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import { HeartIcon } from 'lucide-react'

// Component Imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const Components = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <ScrollArea className='w-full rounded-[0.75rem] whitespace-nowrap'>
      <div className='grid w-full gap-8.5 p-6'>
        <div className='flex gap-9.75'>
          <Button>Button</Button>
          <Button variant='secondary'>Button</Button>
          <Button variant='destructive'>Button</Button>
          <Button variant='outline'>Button</Button>
          <Button variant='ghost'>Button</Button>
          <Button>
            <HeartIcon />
            Button
          </Button>
        </div>
        <div className='flex gap-6'>
          <div className='flex flex-col justify-between gap-6'>
            <Card className='rounded-md border-none py-4 text-wrap shadow-md'>
              <CardContent className='px-4'>
                <div className='space-y-4'>
                  <div className='space-y-1.5'>
                    <h3 className='leading-none font-medium'>Share to teammates</h3>
                    <p className='text-muted-foreground text-sm'>
                      Give your team mates access to this project and start collaborating in real time
                    </p>
                  </div>

                  <div className='space-y-1'>
                    <Label htmlFor='team-email' className='text-muted-foreground text-xs'>
                      Email
                    </Label>
                    <div className='flex gap-2'>
                      <Input id='team-email' type='email' placeholder='name@email.com' className='h-8' />
                      <Button size='sm' type='submit'>
                        Share invite
                      </Button>
                    </div>
                  </div>

                  <div className='space-y-1.5'>
                    <h4 className='text-xs'>Team mates</h4>
                    <div className='flex items-center gap-3'>
                      <Checkbox id='graphic-designer' aria-label='Graphic designer' />
                      <div className='flex flex-1 items-center gap-2'>
                        <Avatar className='size-6'>
                          <AvatarImage
                            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=24&format=auto'
                            alt='Lisa'
                          />
                          <AvatarFallback className='text-xs'>L</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-1 items-center justify-between gap-4 text-sm'>
                          <Label htmlFor='graphic-designer' className='font-medium'>
                            Lisa
                          </Label>
                          <span className='text-muted-foreground'>Graphic designer</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Checkbox id='frontend-developer' aria-label='Frontend developer' />
                      <div className='flex flex-1 items-center gap-2'>
                        <Avatar className='size-6'>
                          <AvatarImage
                            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png?width=24&format=auto'
                            alt='Jake'
                          />
                          <AvatarFallback className='text-xs'>J</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-1 items-center justify-between gap-4 text-sm'>
                          <Label htmlFor='frontend-developer' className='font-medium'>
                            Jake
                          </Label>
                          <span className='text-muted-foreground'>Frontend developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href='#' />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='bg-primary/10 hover:bg-primary/20! text-primary'>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='bg-primary/10 hover:bg-primary/20! text-primary'>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href='#'
                    isActive
                    className='bg-primary text-primary-foreground hover:!text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:text-primary-foreground dark:hover:bg-primary/90 hover:bg-primary/90 border-transparent dark:border-transparent'
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='bg-primary/10 hover:bg-primary/20! text-primary'>
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href='#' />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <Calendar
            mode='single'
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
            className='h-max rounded-md shadow-sm'
          />
        </div>
      </div>
      <ScrollBar orientation='horizontal' className='pb-0' />
    </ScrollArea>
  )
}

export default Components
