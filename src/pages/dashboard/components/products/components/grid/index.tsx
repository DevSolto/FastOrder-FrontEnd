import { Product } from '../table/coluns'

interface GridProps {
  products: Product[]
}

export function Grid(gridProps: GridProps) {
  return <div className="grid"></div>
}
