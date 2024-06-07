import { DataTable } from '@/components/local/dataTable'
import { useEffect, useState } from 'react'
import { NewUnity } from './newUnit'
import { columns, Unity } from './table/coluns'
import { getUnities } from '@/api'

export function Unities() {
  const [unities, setUnities] = useState<Unity[]>([])

  const fetchUnity = async () => {
    const UnityData = await getUnities()
    setUnities(UnityData)
  }

  useEffect(() => {
    fetchUnity()
  }, [])

  const handleUnityAdded = () => {
    fetchUnity() // Recarregar a lista de usuários
  }

  return (
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col">
      <header className="flex items-center justify-between py-3">
        <h1 className="text-primary">Lista de produtos</h1>
        <NewUnity onUnityAdded={handleUnityAdded} />
      </header>
      <DataTable columns={columns} data={unities} />
    </div>
  )
}
