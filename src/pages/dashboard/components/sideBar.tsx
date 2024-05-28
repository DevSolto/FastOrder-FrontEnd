import logo from '../../../assets/logo.svg'
import { IoBusiness, IoHome, IoLayers , IoPeopleCircleOutline, IoReceipt, IoRestaurant } from 'react-icons/io5'
import { SideBarItem } from './sideBarItem'

export function SideBar() {

  
  const items = [
    {
      icon: IoHome,
      link: '/dashboard',
      name: 'Dashboard',
      active:false
    },
    {
      icon: IoPeopleCircleOutline ,
      link: '/dashboard/usuarios',
      name: 'Usuários',
      active:false
    },
    {
      icon: IoBusiness,
      link: '/dashboard/unidades',
      name: 'Unidades',
      active:false
    },
    {
      icon: IoLayers  ,
      link: '/dashboard/relatorios',
      name: 'Relatorios',
      active:false
    },
    {
      icon: IoReceipt,
      link: '/dashboard/pedidos',
      name: 'Pedisos',
      active:false
    },
    {
      icon: IoRestaurant,
      link: '/dashboard/products',
      name: 'Produtos',
      active:false
    }
  ]
  
  return (
    <aside className="w-full max-w-72 p-10 flex flex-col gap-5">
      <div>
        <img src={logo} alt="" className="w-full px-4" />
      </div>

      <div className="flex flex-col ite  items-start gap-3 mt-5">
        {
          items.map((item)=>{
            return <SideBarItem Icon={item.icon} link={item.link} name={item.name}/>
          })
        }
      </div>
    </aside>
  )
}
