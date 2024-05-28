import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { IconType } from 'react-icons/lib'
import { Link, useLocation } from 'react-router-dom'
import { BreadcrumbItem } from './breadcrumb/breadcrumbTypes'

const sideBarItemVariant = cva(
  'hover:scale-110 flex items-center gap-2 rounded-lg pl-2 py-1 pr-4 transition focus:outline-none ',
  {
    variants: {
      variant: {
        default: '',
        active: 'bg-white text-primary shadow-sm'
      },
      icon: {
        default: 'bg-white p-2 rounded-xl shadow',
        active: 'bg-white p-2 rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface SideBarItemProps {
  Icon: IconType
  link: string
  name: string
  updateBreadcrumbs: (newBreadcrumb: BreadcrumbItem) => void
}

export function SideBarItem({
  Icon,
  link,
  name,
  updateBreadcrumbs
}: SideBarItemProps) {
  const location = useLocation()

  const active = location.pathname === link

  const variant = active ? 'active' : 'default'
  const iconVariant = active ? 'active' : 'default'

  const handleClick = () => {
    updateBreadcrumbs({ name, link })
  }

  return (
    <Link
      onClick={handleClick}
      to={link}
      className={cn(sideBarItemVariant({ variant }))}
    >
      <div className={cn(sideBarItemVariant({ icon: iconVariant }))}>
        <Icon size={20} />
      </div>
      {name}
    </Link>
  )
}
