import { DataTable } from '@/components/local/dataTable'
import { User, columns } from './components/table/columns'
import { useEffect, useState } from 'react'
import { NewUser } from './components/newUser'
import { getUsers } from '@/api/user'

export function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const usersData = (await getUsers()) || []
      setUsers(usersData)
    } catch (error) {
      setError('Erro ao carregar usuários')
      console.error('Erro ao buscar usuários:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserAdded = () => {
    fetchUsers() // Recarregar a lista de usuários
  }

  return (
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col w-full items-center">
      <header className="flex items-center justify-between py-3 w-full">
        <h1 className="text-primary">Lista de Funcionários</h1>
        <NewUser onUserAdded={handleUserAdded} />
      </header>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <DataTable columns={columns} data={users} />
      )}
    </div>
  )
}
