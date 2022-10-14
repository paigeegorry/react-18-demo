import { useDeferredValue } from "react"
import Product from "./Product";

export default function ProductList({products = []}) {
  // useDeferredValue - accepts a value and returns a new copy of the value that will defer to more urgent updates
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
        {deferredProducts.map((product, idx) => (
          <Product product={product} />
        ))}
      </ul>
  )
}
