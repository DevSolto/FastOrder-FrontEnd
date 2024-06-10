import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import FormSelect from './FormSelect'
import { createOrder } from '@/api/order'
import { getUsers } from '@/api/user'
import { getUnities } from '@/api/Unity'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ScrollArea } from '@/components/ui/scroll-area'
import { createOrderItem } from '@/api/orderItem'
import { createOrderUnity } from '@/api/orderUnity'
import { ProductsTable } from './productTable'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { User } from '@/pages/dashboard/components/users/components/table/columns'

const formSchema = z.object({
  userId: z.string().min(1, { message: 'O ID do usuário é obrigatório.' }),
  supplierId: z
    .string()
    .min(1, { message: 'A unidade de fornecimento é obrigatória.' }),
  sellerId: z.string().min(1, { message: 'A unidade de venda é obrigatória.' })
})

interface UserSelect {
  value: string
  label: string
}

interface UnitySelect {
  value: string
  label: string
}

export function AddOrderForm({
  onClose,
  onOrderAdded
}: {
  onClose: () => void
  onOrderAdded: () => void
}) {
  const [users, setUsers] = useState<UserSelect[]>([])
  const [suppliers, setSuppliers] = useState<UnitySelect[]>([])
  const [sellers, setSellers] = useState<UnitySelect[]>([])
  const [selectedProducts, setSelectedProducts] = useState<
    { productId: string; amount: number }[]
  >([])

  useEffect(() => {
    fetchUsers()
    fetchUnities()
  }, [])

  const fetchUsers = async () => {
    try {
      const usersData = (await getUsers()) || []
      const usersSelect = usersData.map((user: User) => ({
        value: user.id,
        label: user.name
      }))
      setUsers(usersSelect)
    } catch (error) {
      console.log('Erro ao buscar usuários:', error)
    }
  }

  const fetchUnities = async () => {
    try {
      const unitiesData = (await getUnities()) || []
      const suppliersSelect = unitiesData
        .filter((unity) => unity.type === 'SUPPLIER')
        .map((unity) => ({
          value: unity.id,
          label: unity.name
        }))
      const sellersSelect = unitiesData
        .filter((unity) => unity.type === 'SELLER')
        .map((unity) => ({
          value: unity.id,
          label: unity.name
        }))
      setSuppliers(suppliersSelect)
      setSellers(sellersSelect)
    } catch (error) {
      console.log('Erro ao buscar unidades:', error)
    }
  }

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: '',
      supplierId: '',
      sellerId: ''
    }
  })

  const handleProductsSelected = (
    products: { productId: string; amount: number }[]
  ) => {
    setSelectedProducts(products)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedProducts.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Você deve selecionar pelo menos um produto'
      })
      return
    }
    setIsSubmitting(true)
    const creationDate = new Date()
    const deliveryEstimate = new Date(
      creationDate.getTime() + 12 * 60 * 60 * 1000
    )

    const response = await createOrder({
      creationDate: creationDate.toISOString(),
      receivedDate: creationDate.toISOString(),
      deliveryEstimate: deliveryEstimate.toISOString(),
      status: 'OPENED',
      ...values
    })
    setIsSubmitting(false)

    if (response && response.status) {
      if (response.status == '400' && response.errors?.order) {
        for (const error of response.errors.order) {
          toast({
            variant: 'destructive',
            title: 'Erro',
            description: error
          })
        }
      } else {
        toast({
          title: 'Sucesso',
          description: 'Pedido criado com sucesso'
        })
      }
    } else {
      const orderId = response.data.id
      await createOrderUnity({
        orderId,
        unitId: values.supplierId,
        type: 'SUPPLIER'
      })
      await createOrderUnity({
        orderId,
        unitId: values.sellerId,
        type: 'SELLER'
      })
      for (const item of selectedProducts) {
        await createOrderItem({
          orderId,
          productId: item.productId,
          amount: item.amount
        })
      }
      toast({
        title: 'Cadastro',
        description: `Pedido criado com sucesso!`
      })
      onOrderAdded()
      onClose()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormSelect
          control={form.control}
          name="userId"
          label="Usuário"
          placeholder="Selecione o usuário"
          options={users}
        />
        <div className="flex justify-between gap-5 ">
          <FormSelect
            control={form.control}
            name="supplierId"
            label="Unidade de Fornecimento"
            placeholder="Selecione a unidade de fornecimento"
            options={suppliers}
          />
          <FormSelect
            control={form.control}
            name="sellerId"
            label="Unidade de Venda"
            placeholder="Selecione a unidade de venda"
            options={sellers}
          />
        </div>
        <ScrollArea className="h-72 w-full">
          <ProductsTable onProductsSelected={handleProductsSelected} />
        </ScrollArea>
        <Button variant={'add'} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </form>
    </Form>
  )
}
