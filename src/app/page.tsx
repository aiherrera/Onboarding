import GridOptions from '@/components/dashboard/grid-options'
import Banner from '@/layout/banner'
import Header from '@/layout/header/header'

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col bg-lime-50 text-slate-200">
      <Header />
      <Banner />

      <section className="mx-10 flex h-screen items-center justify-center">
        <GridOptions />
      </section>
    </div>
  )
}
