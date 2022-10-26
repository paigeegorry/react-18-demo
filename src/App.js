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
  const initialProductState = filterProducts();

  // useTransition = Returns a stateful value for the pending state of the transition, and a function to start it
  // isPending = indicates when a transition is active to show a pending state
  // startTransition = lets you mark updates in the provided callback as transitions
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(initialProductState);

  const [filterTermNoHook, setFilterTermNoHook] = useState('');
  const [noHookFilteredProducts, setNoHookFilteredProducts] = useState(initialProductState);

  useEffect(() => {
    startTransition(() => {
      setFilteredProducts(filterProducts(filterTerm));
    });
  }, [filterTerm]);

  useEffect(() => {
    setNoHookFilteredProducts(filterProducts(filterTermNoHook))
  }, [filterTermNoHook]);

  const handleChange = ({ target }) => {
    setFilterTerm(target.value);
  };
  
  const handleChangeNoHook = ({target}) => {
    setFilterTermNoHook(target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <header>
        <h1>Testing React 18</h1>
      </header>
      <br/>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ borderRight: '1px solid black' }}>
          <h2>Using React 18 Hooks</h2>
          <input type="text" value={filterTerm} onChange={handleChange} placeholder="Filter by product number (e.g. 999, 123...)" style={{width: '300px'}} />
          {isPending ? <p>Please wait...</p> : <ProductList products={filteredProducts} useHook />}
        </div>
        <div style={{ marginLeft: '20px' }}>
          <h2>No Hooks</h2>
          <input type="text" value={filterTermNoHook} onChange={handleChangeNoHook} placeholder="Filter by product number (e.g. 999, 123...)" style={{width: '300px'}} />
          <ProductList products={noHookFilteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
