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
import { AddUnityForm } from '@/components/local/forms/AddUnityForm'

export function NewUnity({ onUnityAdded }: { onUnityAdded: () => void }) {
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo unidade</DialogTitle>
          <DialogDescription>
            Preencha todos os campos para adicionar uma unidade
          </DialogDescription>
        </DialogHeader>
        <AddUnityForm onClose={handleClose} onUnityAdded={onUnityAdded} />
      </DialogContent>
    </Dialog>
  )
}
