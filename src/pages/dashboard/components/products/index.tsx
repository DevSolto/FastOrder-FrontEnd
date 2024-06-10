import { DataTable } from '@/components/local/dataTable'
import { Product, columns } from './components/table/coluns'
import { useEffect, useState } from 'react'
import { NewProduct } from './components/newProduct'
import { getProducts } from '@/api/product'

export function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchproducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const productsData = (await getProducts()) || []
      setProducts(productsData)
    } catch (error) {
      setError('Erro ao carregar produtos')
      console.error('Erro ao buscar produtos:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchproducts()
  }, [])

  const handleProductAdded = () => {
    fetchproducts() // Recarregar a lista de produtos
  }

  return (
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col w-full items-center">
      <header className="flex items-center justify-between py-3 w-full">
        <h1 className="text-primary">Lista de produtos</h1>
        <NewProduct onProductAdded={handleProductAdded} />
      </header>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <DataTable columns={columns} data={products} />
      )}
    </div>
  )
}
