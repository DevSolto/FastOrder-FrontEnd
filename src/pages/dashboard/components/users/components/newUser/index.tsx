import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { AddUserForm } from './form'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function NewUser({ onUserAdded }: { onUserAdded: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={'add'} size={'sm'} onClick={() => setIsOpen(true)}>
          Novo +
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo funcionário</DialogTitle>
          <DialogDescription>
            Preencha todos os campos para adicionar um funcionário
          </DialogDescription>
        </DialogHeader>
        <AddUserForm onClose={handleClose} onUserAdded={onUserAdded} />
      </DialogContent>
    </Dialog>
  )
}
