import { ReactNode } from 'react'

const ProfileCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center gap-x-10 py-12 md:flex-row">
      <div className="px-4 pb-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Globant Information</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use this section to input Globant information.</p>
      </div>

      <div className="px-4">{children}</div>
    </div>
  )
}

export default ProfileCard
