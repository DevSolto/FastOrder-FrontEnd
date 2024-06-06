import { IoSquare } from 'react-icons/io5'

export function Legend() {
  return (
    <ul className="">
      <li className="flex gap-2 items-center">
        <IoSquare className="text-slate-500" />
        Solicitado
      </li>
      <li className="flex gap-2 items-center">
        <IoSquare className="text-red-500" />
        Cancelado
      </li>
      <li className="flex gap-2 items-center">
        <IoSquare className="text-amber-500" />
        Em processamento
      </li>
      <li className="flex gap-2 items-center">
        <IoSquare className="text-sky-500" />
        Saiu para entrega
      </li>
      <li className="flex gap-2 items-center">
        <IoSquare className="text-green-500" />
        Entregue
      </li>
    </ul>
  )
}
