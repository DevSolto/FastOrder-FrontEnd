import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { AddOrderForm } from '@/components/local/forms/AddOrderForm'

export function NewOrder({ onOrderAdded }: { onOrderAdded: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="border-0"
          variant={'add'}
          size={'sm'}
          onClick={() => setIsOpen(true)}
        >
          Novo +
        </Button>
      </DialogTrigger>
      <DialogContent className="w-1/2">
        <DialogHeader>
          <DialogTitle>Novo pedido</DialogTitle>
          <DialogDescription>
            Preencha todos os campos para adicionar um pedido
          </DialogDescription>
        </DialogHeader>
        <AddOrderForm onClose={handleClose} onOrderAdded={onOrderAdded} />
      </DialogContent>
    </Dialog>
  )
}
