import { NewUser } from './components/newUser'
import React, { useState, useEffect } from 'react'
import { columns, User } from './components/table/columns'
import { getUsers } from '@/api'
import { DataTable } from '@/components/local/dataTable'

export function Users() {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const usersData = await getUsers()
    setUsers(usersData)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserAdded = () => {
    fetchUsers() // Recarregar a lista de usuários
  }

  return (
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col">
      <header className="flex items-center justify-between py-3">
        <h1>Lista de Funcionários</h1>
        <NewUser onUserAdded={handleUserAdded} />
      </header>
      <DataTable columns={columns} data={users} />
    </div>
  )
}
