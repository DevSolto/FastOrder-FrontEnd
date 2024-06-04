import { DataTable } from "@/components/local/dataTable";
import { Product, columns } from "./components/table/coluns";
import { useEffect, useState } from "react";
import { getProducts } from "@/api";

export function Products() {
    const [products, setProducts] = useState<Product[]>([])

  const fetchproducts = async () => {
    const productsData = await getProducts()
    setProducts(productsData)
  }

  useEffect(() => {
    fetchproducts()
  }, [])

//   const handleProductAdded = () => {
//     fetchproducts() // Recarregar a lista de usuários
//   }

    return (<div className="bg-white p-5 m-2 rounded-2xl h-full flex-1 shadow-md">
        <header className="flex items-center justify-between py-3">
            <h1>Lista de Funcionários</h1>
        </header>
        <DataTable columns={columns} data={products} />
    </div>)
}