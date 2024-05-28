export interface BreadcrumbItem {
  name: string
  link: string
}

export interface SideBarItem extends BreadcrumbItem {
  icon: React.ReactNode
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export interface SideBarProps {
  addBreadcrumb: (newBreadcrumb: BreadcrumbItem) => void
}
