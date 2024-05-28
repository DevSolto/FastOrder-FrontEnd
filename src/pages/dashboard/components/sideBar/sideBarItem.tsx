import React from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbItem } from '../breadcrumb/breadcrumbTypes'

interface SideBarItemProps extends BreadcrumbItem {
  icon: React.ReactNode
  updateBreadcrumbs: (newBreadcrumb: BreadcrumbItem) => void
}

export function SideBarItemComponent({
  name,
  link,
  icon,
  updateBreadcrumbs
}: SideBarItemProps) {
  const handleClick = () => {
    if (name === 'Dashboard') {
      updateBreadcrumbs({ name: '', link })
      return
    }
    updateBreadcrumbs({ name, link })
  }

  return (
    <Link
      to={link}
      onClick={handleClick}
      className="flex items-center gap-3 p-2 text-gray-400 hover:text-primary"
    >
      <div className="rounded-lg bg-white p-2 shadow text-sm text-gray-800">
        {icon}
      </div>
      <p className="font-semibold">{name}</p>
    </Link>
  )
}
