import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SideBar } from '@/pages/dashboard/components/sideBar'
import { BreadcrumbLocal } from './components/breadcrumb'
import { BreadcrumbItem } from './components/breadcrumb/breadcrumbTypes'
import { Users } from './components/users'
import { Products } from './components/products'
import { Metrics } from './components/metrics'
import { Unities } from './components/unities'
import { Orders } from './components/orders'

export function Dashboard() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Metricas', link: '' }
  ])

  const updateBreadcrumbs = (newBreadcrumb: BreadcrumbItem): void => {
    setBreadcrumbs([{ name: 'Dashboard', link: '/dashboard' }, newBreadcrumb])
  }

  return (
    <div className="flex h-screen bg-slate-100 p-5">
      <SideBar updateBreadcrumbs={updateBreadcrumbs} />
      <main className="flex-1 flex flex-col h-full">
        <header className="p-5 pb-24 -mb-20 rounded-3xl" id="header">
          <BreadcrumbLocal items={breadcrumbs} />
        </header>
        <Routes>
          <Route path="/funcionarios" element={<Users />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/unidades" element={<Unities />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/" element={<Metrics />} />
        </Routes>
      </main>
    </div>
  )
}
