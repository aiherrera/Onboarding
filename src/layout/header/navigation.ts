import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  PlayCircleIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

import { HeroIcon } from '@/typings'

export interface NavigationItem {
  name: string
  href: string
  hasDeepEl: boolean
}

export interface NavigationData {
  items: {
    name: string
    description: string
    href: string
    Icon: HeroIcon
  }[]
  cta: {
    name: string
    href: string
    Icon: HeroIcon
  }[]
}

export const NAVIGATION: Map<NavigationItem, NavigationData> = new Map([
  // Examples of leafs
  [
    { name: 'Grupos', href: '#', hasDeepEl: false },
    { items: [], cta: [] },
  ],
  [
    { name: 'Cursos', href: '#', hasDeepEl: false },
    { items: [], cta: [] },
  ],
  // Example with call to actions
  [
    { name: 'Solutions', href: '#', hasDeepEl: true },
    {
      items: [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', Icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', Icon: CursorArrowRaysIcon },
        {
          name: 'Security',
          description: "Your customers' data will be safe and secure",
          href: '#',
          Icon: FingerPrintIcon,
        },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', Icon: SquaresPlusIcon },
        {
          name: 'Automations',
          description: 'Build strategic funnels that will convert',
          href: '#',
          Icon: ArrowPathIcon,
        },
      ],
      cta: [
        { name: 'Watch demo', href: '#', Icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', Icon: PhoneIcon },
      ],
    },
  ],
  // Example without call to actions
  [
    { name: 'Company', href: '#', hasDeepEl: true },
    {
      items: [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', Icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', Icon: CursorArrowRaysIcon },
        {
          name: 'Security',
          description: "Your customers' data will be safe and secure",
          href: '#',
          Icon: FingerPrintIcon,
        },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', Icon: SquaresPlusIcon },
        {
          name: 'Automations',
          description: 'Build strategic funnels that will convert',
          href: '#',
          Icon: ArrowPathIcon,
        },
      ],
      cta: [],
    },
  ],
])
