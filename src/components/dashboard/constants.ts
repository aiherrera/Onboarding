import { AcademicCapIcon, UserCircleIcon, UsersIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export const ACTIONS = [
  {
    title: 'Profile',
    description:
      'Provides a quick overview of your personal information. It includes your name, profile picture, contact information, and a brief bio. You can update your details and manage your account settings from here.',
    href: '/profile',
    icon: UserCircleIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Skill & tooling set',
    description:
      "Showcases your professional skills and expertise. It lists the programming languages, tools, and technologies you're familiar with, as well as your proficiency level in each.",
    href: '/skillset',
    icon: WrenchScrewdriverIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'POD',
    description:
      'Your team or group within the organization. It displays the members of your pod, their roles, and their contact information.',
    href: '/pod',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Custom Training',
    description:
      'This is your gateway to personalized learning. It suggests courses, tutorials, and resources based on your POD requirements.',
    href: '/training',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]
