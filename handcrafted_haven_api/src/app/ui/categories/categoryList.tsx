import { fetchCategory } from "@/app/lib/data";
import { CategoryCard } from "./categoryCard";
import { CategoryCraftCards } from "./categoryCard";
// import { Category } from "@/app/lib/definitions";
import { categories } from "@/app/lib/templateData";
// import { CategoryCrafts } from "@/app/lib/definitions";
import { fetchCategoryCrafts } from "@/app/lib/templateData";
import { CategoryPageList } from "./categoryCard";
// import { Artisan } from "@/app/lib/definitions";
import { artisans } from "@/app/lib/templateData";
import { ArtisanList } from "./categoryCard";

 
export async function CategoryList() {

    // const categories = await fetchCategories();
        return (
            <div className="w-auto" >
              <ul className="flex flex-row flex-wrap justify-evenly">
                {categories.map((category) => (
                  <li key={category.id}>
                    <CategoryCard category={category} />
                  </li>
                ))}
              </ul>
            </div>
          );
        };
        

export async function CategoryCraftList( { categoryList }: {categoryList: string }) {

    // const categoryCard = await Promise.all([
    //     fetchCategoryCrafts(categoryList),
    // ]);

    return (
      <>
        <div className="flex gap-14 ">
          <div className="border-r border-x-orange-900 pr-10">

            {/* Categories for category page */}
              <h2 className="py-2 text-lg">Categories</h2>
                <ul className="flex flex-col items-start text-xs font-normal">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <CategoryPageList category={category} />
                      </li>
                    ))}
                </ul>


            {/* Shop by Artisan for category page */}
              <h2 className="py-2 text-lg">Shop by Artisan</h2>
                <ul className="flex flex-col items-start text-xs font-normal">
                      {artisans.map((artisan) => (
                        <li key={artisan.id}>
                          <ArtisanList artisan={artisan} />
                        </li>
                      ))}
                </ul>
          </div>

          <div className="w-auto" >
            <h2 className="py-10 text-3xl">{categoryList} Craft</h2>
            <ul className="flex flex-row flex-wrap justify-evenly gap-14">
              { fetchCategoryCrafts.map((categoryCraftCard) => (
                <li key={categoryCraftCard.id}>
                  <CategoryCraftCards categoryCraft={categoryCraftCard} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </>
    );
  };

