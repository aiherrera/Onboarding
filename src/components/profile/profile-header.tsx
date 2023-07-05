import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/dist/types/server'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Link as EmailLink } from '@react-email/link'
import Image from 'next/image'

const ProfileHeader = async () => {
  const { firstName, lastName } = (await currentUser()) as User

  return (
    <section>
      <div>
        <Image className="h-32 w-full object-cover lg:h-48" src="/profile-banner.jpg" width={100} height={100} alt="" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src="/avatar.jpg"
              width={100}
              height={100}
              alt=""
            />
          </div>

          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-lg lg:text-2xl font-bold text-gray-900">
                {firstName} {lastName}
              </h1>
            </div>

            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <EmailLink
                href="mailto:alain.iglesias@globant.com?subject = Feedback&body = Message"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Message</span>
              </EmailLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
