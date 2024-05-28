import logo from '../../../../assets/logo.svg'
import {
  IoBusiness,
  IoHome,
  IoLogoBuffer,
  IoPeople,
  IoReceipt,
  IoRestaurant
} from 'react-icons/io5'
import { SideBarItemComponent } from './sideBarItem'
import { BreadcrumbItem, SideBarItem } from '../breadcrumb/breadcrumbTypes'

interface SideBarProps {
  updateBreadcrumbs: (newBreadcrumb: BreadcrumbItem) => void
}

export function SideBar({ updateBreadcrumbs }: SideBarProps) {
  const sideBarItems: SideBarItem[] = [
    {
      link: '/dashboard',
      name: 'Dashboard',
      icon: <IoHome className="text-slate-800" size={20} />
    },
    {
      link: '/dashboard/reports',
      name: 'Relatórios',
      icon: <IoLogoBuffer className="text-slate-800" size={20} />
    },
    {
      link: '/dashboard/products',
      name: 'Produtos',
      icon: <IoRestaurant className="text-slate-800" size={20} />
    },
    {
      link: '/dashboard/orders',
      name: 'Pedidos',
      icon: <IoReceipt className="text-slate-800" size={20} />
    },
    {
      link: '/dashboard/unities',
      name: 'Unidades',
      icon: <IoBusiness className="text-slate-800" size={20} />
    },
    {
      link: '/dashboard/users',
      name: 'Usuários',
      icon: <IoPeople className="text-slate-800" size={20} />
    }
  ]

  return (
    <aside className="flex flex-col w-64 h-full p-10">
      <div className="mb-4">
        <img src={logo} alt="Logo" className="w-full pb-5" />
      </div>
      <div className="flex flex-col space-y-2">
        {sideBarItems.map((item, index) => (
          <SideBarItemComponent
            key={index}
            name={item.name}
            link={item.link}
            icon={item.icon}
            updateBreadcrumbs={updateBreadcrumbs}
          />
        ))}
      </div>
    </aside>
  )
}
