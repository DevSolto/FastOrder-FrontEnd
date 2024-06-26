import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  name: string
  link: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbLocal({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index < items.length - 1 ? (
              <>
                <Link to={item.link} className="text-white">
                  {item.name}
                </Link>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="text-slate-300">
                {item.name}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
