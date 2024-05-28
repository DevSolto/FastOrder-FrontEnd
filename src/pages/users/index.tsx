import { NewUser } from './components/newUser'
import UsersTable from './components/table'

export function Users() {
  return (
    <div className="bg-white p-5 m-5 rounded-2xl h-full flex-1">
      <header className="flex items-center justify-between">
        <h1>Lista de Usuários</h1>
        <NewUser />
      </header>
      <UsersTable />
    </div>
  )
}
