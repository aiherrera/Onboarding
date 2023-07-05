import { Bars3Icon } from '@heroicons/react/24/outline'

import { useStore } from '@/store/use-store'

const OpenMenuButton = () => {
  const toggle = useStore(state => state.toggle)

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => toggle(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default OpenMenuButton
