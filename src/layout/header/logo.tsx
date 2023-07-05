import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 flex gap-5 p-1.5">
        <Image className="h-6 w-full xl:h-8" src="/globant-logo.png" width={100} height={100} alt="Logo" />
        <Image className="h-6 w-full xl:h-8" src="/femsa-logo.png" width={100} height={100} alt="Logo" />
        <p className="text-2xl text-slate-800"></p>
      </Link>
    </div>
  )
}

export default Logo
