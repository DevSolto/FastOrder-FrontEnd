import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Product } from '../table/coluns'
import { Button } from '@/components/ui/button'

export function CardProduct(product: Product) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
    </Card>
  )
}
