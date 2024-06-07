import { ColumnDef } from '@tanstack/react-table'

export type Unity = {
  id: string
  name: string
  description: string
  type: string
}

export const columns: ColumnDef<Unity>[] = [
  { accessorKey: 'name', header: 'Nome' },
  { accessorKey: 'type', header: 'Tipo' },
  { accessorKey: 'description', header: 'Descrição' }
]
