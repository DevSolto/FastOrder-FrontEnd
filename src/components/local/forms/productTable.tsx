import React, { useState, useEffect } from 'react'
import { getProducts } from '@/api/product'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@/components/ui/table'
import { Product } from '@/pages/dashboard/components/products/components/table/coluns'
import { toast } from '@/components/ui/use-toast'

export function ProductsTable({
  onProductsSelected
}: {
  onProductsSelected: (
    selectedProducts: { productId: string; amount: number }[]
  ) => void
}) {
  const [products, setProducts] = useState<Product[]>([])
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const productsData = (await getProducts()) || []
      setProducts(productsData)
    } catch (error) {
      console.log('Erro ao buscar produtos:', error)
    }
  }

  const handleQuantityChange = (productId: string, amount: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: amount
    }))
  }

  const handleAddClick = (productId: string) => {
    console.log(quantities[productId])

    handleQuantityChange(productId, (quantities[productId] || 0) + 1)
  }

  const handleRemoveClick = (productId: string) => {
    console.log(quantities[productId])
    handleQuantityChange(
      productId,
      Math.max((quantities[productId] || 0) - 1, 0)
    )
  }

  const handleSubmit = () => {
    const selectedProducts = Object.entries(quantities)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([productId, amount]) => amount > 0)
      .map(([productId, amount]) => ({ productId, amount }))
    if (selectedProducts.length > 0) {
      toast({
        title: 'Sucesso',
        description: 'Produtos adicionados'
      })
      onProductsSelected(selectedProducts)
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Nenhum produto selecionado'
      })
    }
  }

  return (
    <div className="relative pb-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome do Produto</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Quantidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <a onClick={() => handleRemoveClick(product.id)}>-</a>
                  <input
                    type="number"
                    value={quantities[product.id] || 0}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.id,
                        parseInt(e.target.value) || 0
                      )
                    }
                    className="mx-2 w-12 text-center bg-transparent"
                  />
                  <a onClick={() => handleAddClick(product.id)}>+</a>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <a
        onClick={handleSubmit}
        className="bg-white text-primary text-sm fixed bottom-28 left-5 shadow px-4 py-3 rounded-md"
      >
        Confirmar Produtos
      </a>
    </div>
  )
}
