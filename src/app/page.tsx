import GridOptions from '@/components/dashboard/grid-options'
import Banner from '@/layout/banner'
import Header from '@/layout/header/header'

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Banner />

      <main className="mx-auto flex max-w-7xl items-center justify-center p-8">
        <GridOptions />
      </main>
    </div>
  )
}
