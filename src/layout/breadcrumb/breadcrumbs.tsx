import { FC } from 'react'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

interface BreadcrumbProps {
  name: string
  href: string
  current: boolean
}

const Breadcrumb: FC<{ pages: BreadcrumbProps[] }> = ({ pages }) => {
  return (
    <nav className="mx-auto flex max-w-7xl scroll-px-8 px-8 pt-5" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4 text-lg">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        {pages.map(page => (
          <li key={uuidv4()}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
