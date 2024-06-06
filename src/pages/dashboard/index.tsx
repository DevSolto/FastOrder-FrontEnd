import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SideBar } from '@/pages/dashboard/components/sideBar'
import { BreadcrumbLocal } from './components/breadcrumb'
import { BreadcrumbItem } from './components/breadcrumb/breadcrumbTypes'
import { Users } from '../users'
import { Metrics } from '../metrics'
import { Products } from '../products'

export function Dashboard() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Metricas', link: '' },
  ])

  const updateBreadcrumbs = (newBreadcrumb: BreadcrumbItem): void => {
    setBreadcrumbs([{ name: 'Dashboard', link: '/dashboard' }, newBreadcrumb])
  }

  return (
    <div className="flex flex-col  bg-slate-100">
      <div className="flex p-5">
        <SideBar updateBreadcrumbs={updateBreadcrumbs} />
        <main className="flex-1 h-screen flex flex-col">
          <header className="p-5 pb-52 -mb-40 rounded-3xl" id='header'>
            <BreadcrumbLocal items={breadcrumbs}/>
          </header>
          <Routes>
            <Route path="/funcionarios" element={<Users />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/" element={<Metrics />} />
          </Routes>
        </main>
      </div>
      <p className="w-full text-center p-2  text-xs text-slate-400">
        @ 2024, Criado por Fast Order. Todos os direitos reservados.
      </p>
    </div>
  )
}
