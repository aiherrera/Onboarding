import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

// import { generateSelectorHooks } from './generators/generate-selector-hooks'
import { AuthSlice, createAuthSlice } from './slices/auth'
import { createGeneralSlice, GeneralSlice } from './slices/general'

const useStoreBase = create<GeneralSlice & AuthSlice>()((...a) => ({
  ...createGeneralSlice(...a),
  ...createAuthSlice(...a),
}))

export const useStore = useStoreBase
// export const useStore = generateSelectorHooks(useStoreBase)

if (process.env.NODE_ENV === 'development') {
  console.log('development')
  mountStoreDevtool('Store', useStore)
}
