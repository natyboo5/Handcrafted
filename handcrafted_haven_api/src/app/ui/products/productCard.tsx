import { Product } from "@/app/lib/definitions";

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Artisan ID: {product.artisan_id}</p>
    </>
  );
};
