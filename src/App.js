import { useState, useTransition } from 'react';
import './App.css';
import ProductList from './ProductList';
import { getInfo } from './utils/apiFetch';

const dummyProducts = getInfo();

function filterProducts(filterTerm) {
  if(!filterTerm) {
    return dummyProducts
  }
  return dummyProducts.filter(product => product.name.includes(filterTerm));
}


function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  const handleChange = ({target}) => {
    startTransition(() => {
      setFilterTerm(target.value);
    })
    // setFilterTerm(target.value);
  }

  return (
    <div>
      <header>
        Testing React 18
      </header>
      <br/>
      <input type="text" value={filterTerm} onChange={handleChange}placeholder="Filter by product number (e.g. 999, 123...)" style={{width: '300px'}} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
