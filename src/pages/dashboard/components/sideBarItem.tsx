import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { IconType } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";

const sideBarItemVariant = cva(
  "hover:scale-110 flex items-center gap-2 rounded-lg pl-2 py-1 pr-4 text-md transition focus:outline-none ",
  {
    variants: {
      variant: {
        default:
          "",
        active:
          "bg-white text-primary shadow-sm"
      },
      icon: {
        default: 'bg-white p-2 rounded-xl shadow',
        active: 'bg-white p-2 rounded-xl'
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

interface Item {
  Icon: IconType
  link: string
  name: string
}


export function SideBarItem({ Icon,link,name, }: Item) {
  let location = useLocation()
  
  let active = false
  if(location.pathname === link){
    active = true
  }

  let variant:"default" | "active" | null | undefined
  let icon:"default" | "active" | null | undefined
  if(active){
    variant  = "active"
    icon  = "active"
  }else{
    variant = "default"
    icon = "default"
  }
  return (
    <>
        
        <Link
          to={link}
          className={cn(sideBarItemVariant({ variant }))}
        >
          <div className={cn(sideBarItemVariant({ icon }))}>
            <Icon size={20}/>
          </div>
          {name}
        </Link>
    </>
  );
}
