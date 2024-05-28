import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SideBar } from '@/pages/dashboard/components/sideBar'
import { BreadcrumbLocal } from './components/breadcrumb'
import { BreadcrumbItem } from './components/breadcrumb/breadcrumbTypes'
import { Users } from '../users'

export function Dashboard() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { name: 'Dashboard', link: '/dashboard' }
  ])

  const updateBreadcrumbs = (newBreadcrumb: BreadcrumbItem): void => {
    setBreadcrumbs([{ name: 'Dashboard', link: '/dashboard' }, newBreadcrumb])
  }

  return (
    <div className="flex bg-slate-100">
      <SideBar updateBreadcrumbs={updateBreadcrumbs} />
      <main className="flex-1 h-screen flex flex-col">
        <header className="p-5">
          <BreadcrumbLocal items={breadcrumbs} />
        </header>
        <Routes>
          <Route path="/usuarios" element={<Users />} />
        </Routes>
      </main>
    </div>
  )
}
