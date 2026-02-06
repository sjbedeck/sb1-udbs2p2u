'use client'

import { useEffect } from 'react'

import { BlocksIcon, CodeXmlIcon, FolderGitIcon, ShieldCheckIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'

import AnimatedCode from '@/components/shadcn-studio/blocks/bento-grid-12/animated-code'

const code = `// Security Scan
{
  "vulnerabilities": [
    {
      "severity": "high",
      "type": "exposed_secret",
      "file": "config.js",
      "message": "API key detected"
    }
  ],
  "status": "resolved"
}`

const BentoGrid = () => {
  useEffect(() => {
    const all = document.querySelectorAll('.card')

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector('.blob') as HTMLElement
        const fblob = e.querySelector('.fake-blob') as HTMLElement

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()

        blob.style.opacity = '1'

        blob.animate(
          [
            {
              transform: `translate(${ev.clientX - rec.left - 24 - rec.width / 2}px, ${ev.clientY - rec.top - 24 - rec.height / 2}px)`
            }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className='bg-neutral-800 py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2'>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 80 }}
            delay={0.15}
            transition={{ duration: 0.5 }}
            className='flex'
          >
            <div className='card group relative w-full overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'>
              <div className='relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-black shadow-sm'>
                <div className='p-6'>
                  <FolderGitIcon className='mb-4 size-9 stroke-white stroke-1' />
                  <h4 className='mb-2 text-xl font-medium text-white'>Automate Your Workflow</h4>
                  <p className='text-white/70'>
                    Define custom CI/CD pipelines to streamline testing, building, and deployment.
                  </p>
                </div>
                <div className='relative pl-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-49.png'
                    alt='Automate Your Workflow'
                    className='size-full rounded-tl-xl object-cover transition-shadow duration-500 group-hover:shadow-[-1px_-1px_30px] group-hover:shadow-amber-600/80'
                  />
                  <div className='absolute inset-y-0 right-0 h-full w-10 bg-linear-to-r from-neutral-900/5 to-neutral-900 blur-sm'></div>
                  <div className='absolute inset-x-0 -bottom-2 h-15 w-full bg-linear-to-b from-neutral-900/5 to-neutral-900 blur-sm'></div>
                </div>
              </div>
              <div className='blob absolute top-0 left-0 -z-1 size-62.5 rounded-full bg-white/80 opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
              <div className='fake-blob absolute top-0 left-0 -z-1 [display:hidden] size-50 rounded-full' />
            </div>
          </MotionPreset>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 80 }}
            delay={0.35}
            transition={{ duration: 0.5 }}
            className='flex'
          >
            <div className='card group relative w-full overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'>
              <div className='relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-black shadow-sm'>
                <div className='p-6'>
                  <BlocksIcon className='mb-4 size-9 stroke-white stroke-1' />
                  <h4 className='mb-2 text-xl font-medium text-white'>Manage Private Packages</h4>
                  <p className='text-white/70'>
                    Publish, share, and install internal packages securely across your team.
                  </p>
                </div>
                <div className='relative pl-6'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-50.png'
                    alt='Automate Your Workflow'
                    className='size-full rounded-tl-xl object-cover transition-shadow duration-500 group-hover:shadow-[-1px_-1px_30px] group-hover:shadow-sky-600/80'
                  />
                  <div className='absolute inset-y-0 right-0 h-full w-10 bg-linear-to-r from-neutral-900/5 to-neutral-900 blur-sm'></div>
                  <div className='absolute inset-x-0 -bottom-2 h-15 w-full bg-linear-to-b from-neutral-900/5 to-neutral-900 blur-sm'></div>
                </div>
              </div>
              <div className='blob absolute top-0 left-0 -z-1 size-62.5 rounded-full bg-white/80 opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
              <div className='fake-blob absolute top-0 left-0 -z-1 [display:hidden] size-50 rounded-full' />
            </div>
          </MotionPreset>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 80 }}
            delay={0.75}
            transition={{ duration: 0.5 }}
            className='flex md:col-span-2'
          >
            <div className='card group relative w-full overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'>
              <div className='group relative grid h-full grid-cols-1 gap-6 overflow-hidden rounded-xl bg-black p-6 shadow-sm sm:grid-cols-2'>
                <div>
                  <ShieldCheckIcon className='mb-4 size-9 stroke-white stroke-1' />
                  <h4 className='mb-2 text-xl font-medium text-white'>Smart Application Security</h4>
                  <p className='text-white/70'>
                    Instantly detect exposed secrets and resolve vulnerabilities before they cause harm. By proactively
                    identifying these issues, you can safeguard your systems and protect sensitive information.
                  </p>
                </div>
                <div className='relative'>
                  <AnimatedCode
                    className='group-hover:shadow-destructive/60 h-full transition-shadow duration-500 group-hover:shadow-[0px_0px_30px]'
                    code={code}
                  />
                </div>
              </div>
              <div className='blob absolute top-0 left-0 -z-1 size-62.5 rounded-full bg-white/80 opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
              <div className='fake-blob absolute top-0 left-0 -z-1 [display:hidden] size-50 rounded-full' />
            </div>
          </MotionPreset>
        </div>
        <MotionPreset
          fade
          blur
          slide={{ direction: 'down', offset: 80 }}
          delay={0.55}
          transition={{ duration: 0.3 }}
          className='flex'
        >
          <div className='card group relative w-full overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'>
            <div className='group relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-black shadow-sm'>
              <div className='p-6'>
                <CodeXmlIcon className='mb-4 size-9 stroke-white stroke-1' />
                <h4 className='mb-2 text-xl font-medium text-white'>Built-in Code Reviews</h4>
                <p className='text-white/70'>
                  Catch issues early with automated checks and team approvals on every pull request.
                </p>
              </div>
              <div className='relative flex justify-end pl-6'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/bento-grid/image-51.png'
                  alt='Automate Your Workflow'
                  className='size-full max-w-75 rounded-tl-xl object-cover transition-shadow duration-500 group-hover:shadow-[-1px_-1px_30px] group-hover:shadow-green-600/80'
                />
                <div className='absolute inset-y-0 -right-2 h-full w-15 bg-linear-to-r from-neutral-900/10 to-neutral-900 blur-sm'></div>
                <div className='absolute inset-x-0 -bottom-2 h-20 w-full bg-linear-to-b from-neutral-900/10 to-neutral-900 blur-sm'></div>
              </div>
            </div>
            <div className='blob absolute top-0 left-0 -z-1 size-62.5 rounded-full bg-white/80 opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
            <div className='fake-blob absolute top-0 left-0 -z-1 [display:hidden] size-50 rounded-full' />
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default BentoGrid
