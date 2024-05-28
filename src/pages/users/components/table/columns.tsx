import { ColumnDef } from '@tanstack/react-table'

export type User = {
  id: string
  name: string
  cpf: string
  email: string
  password: string
  phone: string
  role: string
}

export const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Nome' },
  { accessorKey: 'email', header: 'E-mail' },
  { accessorKey: 'role', header: 'Função' },
  { accessorKey: 'cpf', header: 'Cpf' }
]
