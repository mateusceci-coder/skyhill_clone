import { Route } from 'react-router-dom'
import ProductItem from '../pages/ProductItem'
import { Dispatch, SetStateAction } from 'react'
import { ProductsParams } from '../interfaces/productParams'

interface ProductItemRouteProps {
  products: 
  setShoppingCart: Dispatch<SetStateAction<ProductsParams[]>>
}

export default function ProductItemRoute({products, setShoppingCart}) {
  return (
    products.map((product) => (
      <Route
        path={`/${products}/${product.id}`}
        element={<ProductItem setShoppingCart={setShoppingCart} product={product} />}
      />
    ))
  )
}
