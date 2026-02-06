import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-11/bento-grid-11'
import type { IconType } from '@/components/shadcn-studio/blocks/bento-grid-11/random-icons'

const icons: IconType[] = [
  'PencilRulerIcon',
  'SparklesIcon',
  'RocketIcon',
  'HeartIcon',
  'StarIcon',
  'ZapIcon',
  'CloudIcon',
  'SunIcon',
  'MoonIcon',
  'CpuIcon',
  'GlobeIcon',
  'LightbulbIcon',
  'PaletteIcon',
  'TargetIcon',
  'TrophyIcon',
  'BrainIcon',
  'SmileIcon',
  'CodeIcon'
]

const BentoGridPage = () => {
  return <BentoGrid icons={icons} />
}

export default BentoGridPage
