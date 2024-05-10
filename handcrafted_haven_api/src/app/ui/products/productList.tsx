import { fetchProducts } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';
import ProductCard from './productCard';

export default async function ProductList() {
  // CLEAR: temporal data
  const products: Product[] = [
    {
      id: 1,
      name: 'Handmade Pottery Mug',
      price: '25.99',
      category: 'pottery',
      artisan_id: 101,
    },
    {
      id: 2,
      name: 'Wooden Sculpture',
      price: '89.99',
      category: 'sculpture',
      artisan_id: 102,
    },
    {
      id: 3,
      name: 'Silver Bracelet',
      price: '49.99',
      category: 'jewelry',
      artisan_id: 103,
    },
    {
      id: 4,
      name: 'Handwoven Rug',
      price: '199.99',
      category: 'textiles',
      artisan_id: 104,
    },
    {
      id: 5,
      name: 'Recycled Paper Notebook',
      price: '12.99',
      category: 'paper',
      artisan_id: 105,
    },
  ];

  // const products = await fetchProducts();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
