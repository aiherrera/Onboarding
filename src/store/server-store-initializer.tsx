import { AuthSlice } from '@/store/slices/auth'
import { useStore } from '@/store/use-store'

import { GeneralSlice } from './slices/general'

type StoreInitializerProps = {
  stateItems: Partial<GeneralSlice & AuthSlice>
}

function ServerStoreInitializer({ stateItems }: StoreInitializerProps) {
  useStore.setState({ ...stateItems })

  return <div></div>
}

export default ServerStoreInitializer
