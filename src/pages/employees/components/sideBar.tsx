import logo from '../../../assets/logo.svg'
import { IoHome } from "react-icons/io5"


export function SideBar() {
    return (
        <aside className='w-full max-w-72 p-10 flex flex-col gap-5'>
            <div>
                <img src={logo} alt="" className='w-full px-4' />
            </div>

            <div className='flex px-4'>
                <a className='flex justify-center items-center gap-3 text-blue-950'>
                    <div className='bg-white p-2 rounded'>
                        <IoHome />
                    </div>
                    Dashboard
                </a>
            </div>
        </aside>
    )
}