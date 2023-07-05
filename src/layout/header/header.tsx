'use client'

import { Fragment } from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import FlyoutMenuItem from '@/layout/header/flyout-menu-item'
import Logo from '@/layout/header/logo'
import MobileMenu from '@/layout/header/mobile-menu'
import { NAVIGATION } from '@/layout/header/navigation'
import OpenMenuButton from '@/layout/header/open-menu-button'

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <Logo />

          <OpenMenuButton />

          <div className="hidden md:gap-x-6 md:flex">
            {Array.from(NAVIGATION).map(([key, dataMenu]) => {
              const { name, href, hasDeepEl } = key
              const { items, cta } = dataMenu

              return (
                <Fragment key={uuidv4()}>
                  {hasDeepEl ? (
                    <FlyoutMenuItem name={name} items={items} cta={cta} />
                  ) : (
                    <Link
                      href={href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {name}
                    </Link>
                  )}
                </Fragment>
              )
            })}
          </div>

          <div className="hidden md:flex md:justify-end">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>

        <MobileMenu />
      </header>
    </>
  )
}

export default Header
