
export const getInfo = () => {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push({
      name: `Product ${i}`
    });
  }
  return products;
}
