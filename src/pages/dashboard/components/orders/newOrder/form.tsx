import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { createUnity } from '@/api/user'
import { Loader } from 'lucide-react'

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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome da unidade" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder="Selecione o tipo da unidade"
                      className="placeholder:text-muted-foreground"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SUPPLIER">Fornecimento</SelectItem>
                    <SelectItem value="SELLER">Venda</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite a descrição da unidade"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={'add'} type="submit">
          {isSubmitting ? <Loader className="animate-spin" /> : 'Cadastrar'}
        </Button>
      </form>
    </Form>
  )
}
