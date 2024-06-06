import logo from '../../../assets/logo.svg'
import {
  IoBusiness,
  IoHome,
  IoLayers,
  IoPeople,
  IoReceipt,
  IoRestaurant
} from 'react-icons/io5'
import { SideBarItem } from './sideBarItem'
import { BreadcrumbItem } from './breadcrumb/breadcrumbTypes'

interface SideBarProps {
  updateBreadcrumbs: (newBreadcrumb: BreadcrumbItem) => void
}

export function SideBar({ updateBreadcrumbs }: SideBarProps) {
  const items = [
    {
      icon: IoHome,
      link: '/dashboard',
      name: 'Metricas ',
      active: false
    },
    {
      icon: IoPeople,
      link: '/dashboard/funcionarios',
      name: 'Funcionários',
      active: false
    },
    {
      icon: IoBusiness,
      link: '/dashboard/unidades',
      name: 'Unidades',
      active: false
    },
    {
      icon: IoLayers,
      link: '/dashboard/relatorios',
      name: 'Relatorios',
      active: false
    },
    {
      icon: IoReceipt,
      link: '/dashboard/pedidos',
      name: 'Pedidos',
      active: false
    },
    {
      icon: IoRestaurant,
      link: '/dashboard/produtos',
      name: 'Produtos',
      active: false
    }
  ]

  return (
    <aside className="w-full max-w-72 p-10 flex flex-col gap-5">
      <div>
        <img src={logo} alt="Logo" className="w-full px-4" />
      </div>

      <div className="flex flex-col items-start gap-3 mt-5 ">
        {items.map((item) => (
          <SideBarItem
            key={item.link}
            Icon={item.icon}
            link={item.link}
            name={item.name}
            updateBreadcrumbs={updateBreadcrumbs}
          />
        ))}
      </div>
    </aside>
  )
}
