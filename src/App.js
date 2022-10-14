import { useEffect, useState, useTransition } from 'react';
import './App.css';
import ProductList from './ProductList';
import { generateProducts } from './utils/generateProducts';

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if(!filterTerm) {
    return dummyProducts
  }
  return dummyProducts.filter(product => product.name.includes(filterTerm));
}


function App() {
  // useTransition = Returns a stateful value for the pending state of the transition, and a function to start it
  // isPending = indicates when a transition is active to show a pending state
  // startTransition = lets you mark updates in the provided callback as transitions
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');
  const initialProductState = filterProducts();
  const [filteredProducts, setFilteredProducts] = useState(initialProductState);

  useEffect(() => {
    startTransition(() => {
      setFilteredProducts(filterProducts(filterTerm));
    });
  }, [filterTerm]);

  const handleChange = ({target}) => {
    setFilterTerm(target.value);
  }

  return (
    <div>
      <header>
        Testing React 18
      </header>
      <br/>
      <input type="text" value={filterTerm} onChange={handleChange}placeholder="Filter by product number (e.g. 999, 123...)" style={{width: '300px'}} />
      {isPending && <p>Please wait...</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
