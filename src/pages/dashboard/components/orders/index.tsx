import { DataTable } from '@/components/local/dataTable'
import { Order, columns } from './table/columns'
import { useEffect, useState } from 'react'
import { NewOrder } from './newOrder'
import { getOrders } from '@/api/order'
import { getUsers } from '@/api/user'
import { User } from '@/pages/dashboard/components/users/components/table/columns'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers()
      setUsers(usersData)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  const fetchOrders = async () => {
    try {
      setLoading(true)
      setError(null)
      const ordersData = (await getOrders()) || []

      // Combine os dados do pedido com os dados do usuário
      const ordersWithUserNames = ordersData.map((order) => {
        const user = users.find((user) => user.id === order.userId)
        return {
          ...order,
          userName: user ? user.name : 'Desconhecido',
          creationDate: format(
            new Date(order.creationDate),
            'dd/MM/yyyy HH:mm',
            { locale: ptBR }
          ),
          deliveryEstimate: format(
            new Date(order.deliveryEstimate),
            'dd/MM/yyyy HH:mm',
            { locale: ptBR }
          )
        }
      })

      setOrders(ordersWithUserNames)
    } catch (error) {
      setError('Erro ao carregar pedidos')
      console.error('Erro ao buscar pedidos:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    if (users.length > 0) {
      fetchOrders()
    }
  }, [users])

  const handleOrderAdded = () => {
    fetchOrders() // Recarregar a lista de pedidos
  }

  return (
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col w-full items-center">
      <header className="flex items-center justify-between py-3 w-full">
        <h1 className="text-primary">Lista de pedidos</h1>
        <NewOrder onOrderAdded={handleOrderAdded} />
      </header>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <DataTable columns={columns} data={orders} />
      )}
    </div>
  )
}
