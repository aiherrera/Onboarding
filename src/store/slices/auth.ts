import { StateCreator } from 'zustand'

import { User } from '@/typings'

export type AuthSlice = {
  currentUser: User | undefined
  isAuthProcessing: boolean

  updateAuthProcessing: (status: boolean) => void
  setCurrentUser: (user: User | undefined) => void
  // loginUser: (user: Pick<User, 'email' | 'password'>) => void
  // isLoggedIn: () => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = set => ({
  currentUser: undefined,
  currentSession: null,
  isAuthProcessing: false,

  updateAuthProcessing: status => {
    set(() => ({ isAuthProcessing: status }))
  },

  setCurrentUser: user => set(() => ({ currentUser: user })),
})
