import { ColumnDef } from '@tanstack/react-table'

export interface Order {
  id?: string
  status: string
  creationDate: string
  deliveryEstimate: string
  userName: string // Mudança aqui para incluir o nome do usuário
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'creationDate',
    header: 'Data de Criação'
  },
  {
    accessorKey: 'deliveryEstimate',
    header: 'Estimativa de Entrega'
  },
  {
    accessorKey: 'userName',
    header: 'Nome do Usuário' // Atualização aqui para exibir o nome do usuário
  }
]
