import { MotionPreset } from '@/components/ui/motion-preset'

const AnimatedHeading = () => {
  return (
    <h2 className='mx-auto max-w-4xl text-6xl leading-normal font-semibold text-white md:text-7xl lg:text-8xl'>
      <MotionPreset
        component='span'
        fade
        blur
        slide={{ direction: 'down', offset: 50 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Build {''}
      </MotionPreset>

      <MotionPreset
        component='span'
        className='inline-flex w-full max-w-100 gap-7 overflow-hidden rounded-tr-3xl rounded-br-3xl bg-sky-600 p-4'
        fade
        blur
        slide={{ direction: 'left', offset: 80 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        delay={0.15}
      >
        <MotionPreset
          fade
          blur
          zoom
          slide={{ direction: 'up', offset: 30 }}
          delay={0.3}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          motionProps={{ initial: { rotate: -180 }, animate: { rotate: 0 } }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='74' height='74' viewBox='0 0 74 74' fill='none'>
            <path
              d='M67.1773 46.1577C62.3039 46.7427 57.4305 47.1327 52.5571 45.7677C58.795 45.3777 64.838 42.8427 69.3215 38.3577C70.6861 36.7977 71.8557 35.2377 72.6355 33.2877C73.4152 30.9477 74 28.4127 74 25.8777C73.8051 22.7577 72.4405 18.4677 68.7367 19.0527C66.9823 19.2477 65.6178 20.4177 64.6431 21.9777C63.4735 23.9277 62.3039 25.2927 60.9393 26.8527C58.795 28.9977 56.4558 31.1427 53.5317 32.3127C58.2102 27.6327 60.7444 20.6127 60.5494 13.9827C60.3545 10.4727 58.795 7.35272 56.6507 4.42772C54.5064 1.89272 51.1925 -0.642284 47.8786 0.527716C44.7596 1.50272 45.5394 5.79272 46.1242 8.52272C46.5141 11.8377 46.709 14.9577 46.1242 18.4677C45.9293 19.4427 45.9293 20.4177 45.3445 21.1977C44.7596 13.0077 40.666 4.62272 32.8686 1.50272C29.3597 -0.0572837 25.2661 -0.642284 21.5623 0.917716C20.1977 1.50272 18.6383 2.28272 18.4433 4.03772C18.0535 6.96272 20.7826 8.91271 23.1218 10.2777C23.7066 10.8627 24.2914 11.2527 25.0711 11.8377C27.9952 14.1777 30.3344 17.1027 32.0888 20.4177C27.8002 16.3227 22.1471 14.1777 16.299 13.5927C11.4256 13.2027 6.55225 15.1527 3.0434 18.8577C1.09405 21.0027 -0.660376 23.7327 0.314303 26.8527C2.26366 29.5827 5.96744 28.8027 8.89147 28.2177C12.9851 27.4377 16.8838 27.8277 20.7826 28.8027C17.0788 28.9977 13.375 30.3627 10.0611 32.1177C7.13705 33.8727 4.60289 35.6277 2.84847 38.5527C0.314303 42.6477 -0.855312 47.5227 0.704174 52.0077C1.48392 53.9577 2.84847 55.9077 4.99276 55.9077C6.35731 55.7127 7.52692 54.9327 8.5016 53.7627C11.6206 49.4727 14.7395 45.3777 19.2231 42.8427C15.9092 46.9377 14.1547 51.8127 13.375 57.0777C12.9851 60.3927 13.7649 63.5127 15.3244 66.4377C16.1041 67.8027 16.8838 68.9727 17.8585 70.1427C18.6383 70.9227 19.418 71.5077 20.3927 72.2877C22.1471 73.4577 24.0965 74.2377 26.0458 73.6527C28.7749 72.4827 28.58 69.1677 28.1901 66.6327C27.2154 61.9527 27.4104 57.4677 28.385 52.9827C28.9699 58.8327 31.1141 64.2927 35.0129 68.5827C39.6913 73.4577 47.6837 75.9927 53.9216 72.0927C55.4811 71.1177 55.676 69.3627 55.0912 67.8027C54.8963 67.6077 54.7014 67.2177 54.5064 66.8277C53.7267 65.8527 52.9469 65.0727 51.7773 64.4877L51.5824 64.0977C47.8786 61.7577 44.7596 58.6377 42.6153 54.9327C46.709 58.2477 51.5824 60.1977 56.8457 60.7827C63.4735 61.3677 70.2962 58.0527 73.2203 52.0077C74 50.4477 74 48.4977 72.8304 47.1327C71.2709 45.7677 69.1266 45.7677 67.1773 46.1577Z'
              fill='white'
            />
          </svg>
        </MotionPreset>

        <MotionPreset
          fade
          blur
          zoom
          slide={{ direction: 'up', offset: 30 }}
          delay={0.5}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          motionProps={{ initial: { rotate: 180 }, animate: { rotate: 0 } }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='74' height='73' viewBox='0 0 74 73' fill='none'>
            <path
              d='M74 48.9678C74 35.5029 63.1695 24.5265 49.627 24.0834V0C35.9809 0 24.8567 10.6867 24.4076 24.0493H0C0 37.5141 10.8305 48.4905 24.373 48.9337V73C38.0191 73 49.1433 62.3133 49.5924 48.9507H74V48.9678Z'
              fill='black'
            />
          </svg>
        </MotionPreset>

        <MotionPreset
          fade
          blur
          zoom
          slide={{ direction: 'up', offset: 30 }}
          delay={0.7}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          motionProps={{ initial: { rotate: -270 }, animate: { rotate: 0 } }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='69' height='70' viewBox='0 0 69 70' fill='none'>
            <path
              d='M68.6264 24.8369L59.9019 9.74543C57.1918 11.3047 45.8685 19.7507 38.9075 26.619C41.3763 17.152 43.0284 3.11854 43.0284 0H25.598C25.598 3.11854 27.2501 17.1705 29.7189 26.619C22.7579 19.7507 11.4161 11.3047 8.72448 9.74543L0 24.8369C2.71016 26.3962 15.6855 32.0021 25.1154 34.5824C15.6855 37.1811 2.71016 42.7685 0 44.3278L8.72448 59.4193C11.4346 57.86 22.7579 49.414 29.7189 42.5458C27.2501 52.0128 25.598 66.0462 25.598 69.1647H43.0284C43.0284 66.0462 41.3763 51.9942 38.9075 42.5458C45.8685 49.414 57.2103 57.86 59.9019 59.4193L68.6264 44.3278C65.9162 42.7685 52.9409 37.1626 43.511 34.5824C52.9409 31.9836 65.9162 26.3962 68.6264 24.8369Z'
              fill='#D97706'
            />
          </svg>
        </MotionPreset>
      </MotionPreset>

      <MotionPreset
        component='span'
        fade
        blur
        slide={{ direction: 'right', offset: 60 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        delay={0.2}
      >
        {''} your {''}
      </MotionPreset>

      <MotionPreset
        component='span'
        className='inline-flex h-25 w-24 items-center justify-center rounded-[16px] bg-green-600'
        fade
        blur
        zoom={{ initialScale: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        delay={0.4}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='47' height='90' viewBox='0 0 47 90' fill='none'>
          <path
            d='M29.1237 20.6402L23.5 0L17.8763 20.6402C15.1392 30.7023 8.74568 39.3884 0 45C8.76706 50.6116 15.1392 59.2977 17.8763 69.3598L23.5 90L29.1237 69.3598C31.8608 59.2977 38.2543 50.6116 47 45C38.2543 39.3884 31.8608 30.7023 29.1237 20.6402Z'
            fill='white'
          />
        </svg>
      </MotionPreset>

      <MotionPreset
        component='span'
        fade
        blur
        slide={{ direction: 'right', offset: 60 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        delay={0.5}
      >
        {' '}
        skills{' '}
      </MotionPreset>

      <MotionPreset
        component='span'
        className='inline-flex h-25 w-52 items-center rounded-[16px] bg-amber-600 px-4'
        fade
        blur
        zoom={{ initialScale: 0.5, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        delay={0.55}
      >
        <MotionPreset
          fade
          slide={{ direction: 'right' }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          delay={0.8}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='93' height='93' viewBox='0 0 93 93' fill='none'>
            <path
              d='M46.5 0C20.831 0 0 20.8059 0 46.5C0 72.1941 20.8059 93 46.5 93C72.1941 93 93 72.1941 93 46.5C93 20.8059 72.169 0 46.5 0ZM46.5 65.9523C35.7461 65.9523 27.0477 57.2288 27.0477 46.5C27.0477 35.7712 35.7712 27.0477 46.5 27.0477C57.2539 27.0477 65.9523 35.7712 65.9523 46.5C65.9523 57.2288 57.2539 65.9523 46.5 65.9523Z'
              fill='white'
            />
          </svg>
        </MotionPreset>
      </MotionPreset>

      <MotionPreset
        component='span'
        fade
        blur
        slide={{ direction: 'left', offset: 60 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        delay={0.6}
      >
        {' '}
        online
      </MotionPreset>
    </h2>
  )
}

export default AnimatedHeading
