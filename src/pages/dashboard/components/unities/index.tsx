import { useEffect, useState } from 'react'
import { columns, Unity } from './table/coluns'
import { getUnities } from '@/api/Unity'
import { NewUnity } from './newUnit'
import { DataTable } from '@/components/local/dataTable'

export function Unities() {
  const [unities, setUnities] = useState<Unity[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUnities = async () => {
    try {
      setLoading(true)
      setError(null)
      const unitiesData = (await getUnities()) || []
      setUnities(unitiesData)
    } catch (error) {
      setError('Erro ao carregar unidades')
      console.error('Erro ao buscar unidades:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUnities()
  }, [])

  const handleUnityAdded = () => {
    fetchUnities() // Recarregar a lista de unidades
  }

  return (
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col w-full items-center">
      <header className="flex items-center justify-between py-3 w-full">
        <h1 className="text-primary">Lista de Unidades</h1>
        <NewUnity onUnityAdded={handleUnityAdded} />
      </header>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <DataTable columns={columns} data={unities} />
      )}
    </div>
  )
}
