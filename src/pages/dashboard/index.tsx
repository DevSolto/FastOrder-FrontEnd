import { Routes, Route } from 'react-router-dom'
import { SideBar } from './components/sideBar'
import { Users } from '../users'

export function Dashboard() {

  return (
    <div className="w-screen h-screen bg-slate-100 flex ">
      <SideBar/>
      <section className="flex flex-col flex-1">
        <header className="p-5">
          {/* <BreadcrumbLocal/> */}
        </header>
        <main>
          <Routes>
            <Route path="/usuarios" element={<Users />} />
          </Routes>
        </main>
      </section>
    </div>
  )
}
