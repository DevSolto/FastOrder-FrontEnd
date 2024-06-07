import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { createUnity } from '@/api'

import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormTextarea from './FormTextarea'

const formSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório.' }),
  type: z.string().min(1, { message: 'O tipo é obrigatório.' }),
  description: z.string().min(1, { message: 'A descrição é obrigatória.' })
})

export function AddUnityForm({
  onClose,
  onUnityAdded
}: {
  onClose: () => void
  onUnityAdded: () => void
}) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      type: '',
      description: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    const response = await createUnity(values)
    setIsSubmitting(false)

    if (response && response.status) {
      if (response.status === 400 && response.errors?.name) {
        for (const error of response.errors.name) {
          toast({
            variant: 'destructive',
            title: 'Erro',
            description: error
          })
        }
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: response.message
        })
      }
    } else {
      toast({
        title: 'Cadastro',
        description: `Unidade ${values.name} cadastrada com sucesso!`
      })
      onUnityAdded()
      onClose()
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-md"
      >
        <FormInput
          control={form.control}
          name="name"
          label="Nome"
          placeholder="Digite o nome da unidade"
        />
        <FormSelect
          control={form.control}
          name="type"
          label="Tipo"
          placeholder="Selecione o tipo da unidade"
          options={[
            { value: 'SUPPLIER', label: 'Fornecimento' },
            { value: 'SELLER', label: 'Venda' }
          ]}
        />
        <FormTextarea
          control={form.control}
          name="description"
          label="Descrição"
          placeholder="Digite a descrição da unidade"
        />
        <Button variant={'add'} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </form>
    </Form>
  )
}
