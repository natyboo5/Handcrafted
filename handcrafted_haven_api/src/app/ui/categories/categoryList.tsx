import { fetchCategory } from "@/app/lib/data";
import CategoryCard from "./categoryCard";
import { Category } from "@/app/lib/definitions";



export default async function CategoryList() {
    // Temporal Data
    const categories: Category[] = [
        { id: 1, name: 'Pottery',   URL: 'categories/PlaceholderCategory.svg' },
        { id: 2, name: 'Sculpture', URL: 'categories/PlaceholderCategory.svg' },
        { id: 3, name: 'Metalwork', URL: 'categories/PlaceholderCategory.svg' },
        { id: 4, name: 'Textiles',  URL: 'categories/PlaceholderCategory.svg' },
        { id: 5, name: 'Paper',     URL: 'categories/PlaceholderCategory.svg' },
        { id: 6, name: 'Jewelry',   URL: 'categories/PlaceholderCategory.svg' }
    ];

    // const categories = await fetchCategories();
        return (
            <div>
              <ul className="flex flex-row flex-wrap justify-evenly">
                {categories.map((category) => (
                  <li className="w-1/3" key={category.id}>
                    <CategoryCard category={category} />
                  </li>
                ))}
              </ul>
            </div>
          );
        };
        