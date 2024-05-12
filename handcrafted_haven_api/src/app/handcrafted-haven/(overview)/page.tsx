import ProductList from "@/app/ui/products/productList";
import CategoryList from "@/app/ui/categories/categoryList";
import '@/app/ui/globals.css';
        
export default function Page() {
  return (
    <main>
            
      {/* Product List section */}
      <h2 className="text-2xl py-5">Especially crafted for you</h2>
      <ProductList />


      {/* Category section */}
      <h2 className="text-2xl py-5"> Shop by Category</h2>
      <CategoryList />
          
    </main>
  )}

