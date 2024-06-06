import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { AddProductForm } from './form'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function NewProduct({ onProductAdded }: { onProductAdded: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className='border-0' variant={'add'} size={'sm'} onClick={() => setIsOpen(true)}>
          Novo +
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo produto</DialogTitle>
          <DialogDescription>
            Preencha todos os campos para adicionar um produto
          </DialogDescription>
        </DialogHeader>
        <AddProductForm onClose={handleClose} onProductAdded={onProductAdded} />
      </DialogContent>
    </Dialog>
  )
}
