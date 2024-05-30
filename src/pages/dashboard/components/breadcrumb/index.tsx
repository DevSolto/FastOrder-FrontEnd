import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Slash } from 'lucide-react'
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
            {
              index < items.length - 1 ? (
                <>
                  <Link to={item.link}>{item.name}</Link>
                  <BreadcrumbSeparator/>
                </>
              ) : (
                item.name !== "Dashboard" ? <BreadcrumbPage>{item.name}</BreadcrumbPage> : <></>
              )
            }
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
