import { StoreApi, UseBoundStore } from 'zustand'

export type ZustandHookSelectors<StateType> = {
  [Key in keyof StateType as `use${Capitalize<string & Key>}`]: () => StateType[Key]
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export function generateSelectorHooks<StateType extends object>(store: UseBoundStore<StoreApi<StateType>>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storeIn = store as any

  Object.keys(storeIn.getState()).forEach(key => {
    const selector = (state: StateType) => state[key as keyof StateType]
    storeIn[`use${capitalize(key)}`] = () => storeIn(selector)
  })

  return storeIn as UseBoundStore<StoreApi<StateType>> & ZustandHookSelectors<StateType>
}
