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
    { name: 'Metricas', link: '' }
  ])

  const updateBreadcrumbs = (newBreadcrumb: BreadcrumbItem): void => {
    setBreadcrumbs([{ name: 'Dashboard', link: '/dashboard' }, newBreadcrumb])
  }

  return (
    <div className="p-5 bg-slate-100 h-screen">
      <div className="flex h-full">
        <SideBar updateBreadcrumbs={updateBreadcrumbs} />
        <main className="flex-1 flex flex-col">
          <header className="p-5 pb-24 -mb-20 rounded-3xl" id="header">
            <BreadcrumbLocal items={breadcrumbs} />
          </header>
          <Routes>
            <Route path="/funcionarios" element={<Users />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/" element={<Metrics />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
