import { v4 as uuidv4 } from 'uuid'

export const SKILLS = [
  {
    key: uuidv4(),
    skillname: 'Scrum methodology',
    type: 'Mandatory',
    resourceLink: '/training',
  },
  {
    key: uuidv4(),
    skillname: 'Git / Github',
    type: 'Mandatory',
    resourceLink: '/training',
  },
  {
    key: uuidv4(),
    skillname: 'SOLID',
    type: 'Suggested',
    resourceLink: '/training',
  },
  {
    key: uuidv4(),
    skillname: 'Javascript',
    type: 'Mandatory',
    resourceLink: '/training',
  },
]
