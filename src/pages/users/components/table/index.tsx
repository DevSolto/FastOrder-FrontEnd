import { getUsers } from '@/api'
import { User, columns } from './columns'
import { DataTable } from './dataTable'
import { useEffect, useState } from 'react'

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUsers()
        setUsers(result)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchData()
  }, [])

  return <DataTable columns={columns} data={users} />
}
