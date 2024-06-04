import { ColumnDef } from '@tanstack/react-table'

export type Product = {
    id: string
    name: string
    description: string
    type: string
  }

export const columns: ColumnDef<Product>[] = [
  { accessorKey: 'name', header: 'Nome' },
  { accessorKey: 'type', header: 'Tipo' },
  { accessorKey: 'description', header: 'Descrição' }
]
