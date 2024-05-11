
import ProductList from "@/app/ui/products/productList";
import Categories from "@/app/ui/categories/page";
        
export default function Page() {
  return (
    <main>
      <h1> Home Page - landing page</h1>
      {/* Product List section */}

      <h2>Especially crafted for you</h2>
      <ProductList />



      {/* Category section */}
      <h2> Shop by Category</h2>
      <Categories />
          
    </main>
  )}

