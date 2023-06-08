import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UserCircleIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

export const ACTIONS = [
  {
    title: 'Profile',
    description:
      'Provides a quick overview of your personal information. It includes your name, profile picture, contact information, and a brief bio. You can update your details and manage your account settings from here.',
    href: '#',
    icon: UserCircleIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Skillset',
    description:
      "Showcases your professional skills and expertise. It lists the programming languages, tools, and technologies you're familiar with, as well as your proficiency level in each.",
    href: '#',
    icon: WrenchScrewdriverIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'POD',
    description:
      'Your team or group within the organization. It displays the members of your pod, their roles, and their contact information.',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Custom Training',
    description:
      'This is your gateway to personalized learning. It suggests courses, tutorials, and resources based on your POD requirements.',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]
