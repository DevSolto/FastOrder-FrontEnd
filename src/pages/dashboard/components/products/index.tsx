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
    <div className="bg-white p-5 m-2 h-2 rounded-3xl flex-1 shadow-md flex flex-col">
      <header className="flex items-center justify-between py-3">
        <h1 className='text-primary'>Lista de produtos</h1>
        <NewProduct onProductAdded={handleProductAdded}/>
      </header>
      <DataTable columns={columns} data={products} />
    </div>
  )
}
