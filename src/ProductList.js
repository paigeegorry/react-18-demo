import { useDeferredValue } from "react"
import Product from "./Product";

export default function ProductList({products = [], useHook}) {
  // useDeferredValue - accepts a value and returns a new copy of the value that will defer to more urgent updates
  const deferredProducts = useDeferredValue(products);
  const productsToDisplay = useHook ? deferredProducts : products;
  return (
    <ul style={{'border-left': '1px solid black'}}>
        {productsToDisplay.map((product, idx) => (
          <Product product={product} />
        ))}
      </ul>
  )
}
