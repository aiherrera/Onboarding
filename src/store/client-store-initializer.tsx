'use client'

import { useEffect, useRef } from 'react'

import { AuthSlice } from '@/store/slices/auth'
import { useStore } from '@/store/use-store'

import { GeneralSlice } from './slices/general'

type StoreInitializerProps = {
  stateItems: Partial<GeneralSlice & AuthSlice>
}

function ClientStoreInitializer({ stateItems }: StoreInitializerProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      useStore.setState({ ...stateItems })
      initialized.current = true
    }
  }, [stateItems])

  return null
}

export default ClientStoreInitializer
