import { DataTable } from '@/components/local/dataTable'
import { Product, columns } from './components/table/coluns'
import { useEffect, useState } from 'react'
import { getProducts } from '@/api'
import { NewProduct } from './components/newProduct'

export function Products() {
  const [products, setProducts] = useState<Product[]>([])

  const fetchproducts = async () => {
    const productsData = await getProducts()
    setProducts(productsData)
  }

  useEffect(() => {
    fetchproducts()
  }, [])

    const handleProductAdded = () => {
      fetchproducts() // Recarregar a lista de usuários
    }

  return (
    <div className="shadow-md bg-white/20 backdrop-blur-md p-5 m-2  flex-1 flex flex-col gap-5 rounded-3xl h-full">
      <header className="flex items-center justify-between py-3">
        <h1 className='text-white'>Lista de produtos</h1>
        <NewProduct onProductAdded={handleProductAdded}/>
      </header>
      <DataTable columns={columns} data={products} />
    </div>
  )
}
