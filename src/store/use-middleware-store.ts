/**
 * Solution brought from: https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5
 */

import { useEffect, useState } from 'react'

const useMiddlewareStore = <T, F>(store: (callback: (state: T) => unknown) => unknown, callback: (state: T) => F) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useMiddlewareStore
