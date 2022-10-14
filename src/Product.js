export default function Product({ product }) {
  // trying to slow down rendering even more...
  // let sum = 0;
  // for(let i=0; i<100000; i++) {
  //   sum += Math.sqrt(i);
  // }
  // console.log(sum);

  return (
    <li key={product.name}>{product.name}</li>
  )
}
