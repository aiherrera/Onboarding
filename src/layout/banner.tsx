'use client'

import { useUser } from '@clerk/nextjs'
import { XMarkIcon } from '@heroicons/react/20/solid'

const Banner = ({ message = 'Esta será tu herramienta de apoyo en tu proceso de Onboarding', canClose = false }) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const year = new Date().getFullYear()

  return (
    <div className="flex items-center gap-x-6 bg-gray-50 bg-gradient-to-r from-[#BED731] to-[#7CB13D] px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <div className="flex h-auto flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-base leading-6 text-slate-100">
          <strong className="font-semibold">APP {year}</strong> • Hola {isLoaded && isSignedIn && user.firstName},
          bienvenido! | {message}.
        </p>
      </div>

      <div className="flex flex-1 justify-end">
        {canClose && (
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Cerrar</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Banner
