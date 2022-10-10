import { useDeferredValue } from "react"

export default function ProductList({products = []}) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
        {deferredProducts.map((product, idx) => (
          <li key={`${idx}-${product.name}`}>{product.name}</li>
        ))
        }
      </ul>
  )
}
