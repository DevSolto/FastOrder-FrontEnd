import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { AddUserForm } from './form'

export function NewUser() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo usuário</DialogTitle>
          <DialogDescription>
            Preencha todos os capos para adicionar um usuário
          </DialogDescription>
        </DialogHeader>
        <AddUserForm />
      </DialogContent>
    </Dialog>
  )
}
