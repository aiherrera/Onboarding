import { StateCreator } from 'zustand'

export type GeneralSlice = {
  isOpen: boolean
  dashboardIsOpen: boolean
  searchIsOpen: boolean

  toggle: (value: boolean) => void
  dashboardToggle: (value: boolean) => void
  searchModalToggle: (value: boolean) => void
}

export const createGeneralSlice: StateCreator<GeneralSlice, [], [], GeneralSlice> = set => ({
  isOpen: false,
  dashboardIsOpen: false,
  searchIsOpen: false,

  toggle: value => set(() => ({ isOpen: value })),
  dashboardToggle: value => set(() => ({ dashboardIsOpen: value })),
  searchModalToggle: value => set(() => ({ searchIsOpen: value })),
})
