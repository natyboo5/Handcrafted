import { fetchCategory } from "@/app/lib/data";
import { CategoryCard } from "./categoryCard";
import { CategoryCraftCards } from "./categoryCard";
import { Category } from "@/app/lib/definitions";
import { CategoryCrafts } from "@/app/lib/definitions";
import { CategoryPageList } from "./categoryCard";
import { Artisan } from "@/app/lib/definitions";
import { ArtisanList } from "./categoryCard";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";



 
export async function CategoryList() {
    // Temporal Data 
    const categories: Category[] = [
        { id: 1, name: 'Pottery',   URL: '/categories/PlaceholderCategory.jpg' },
        { id: 2, name: 'Sculpture', URL: '/categories/PlaceholderCategory.jpg' },
        { id: 3, name: 'Metalwork', URL: '/categories/PlaceholderCategory.jpg' },
        { id: 4, name: 'Textiles',  URL: '/categories/PlaceholderCategory.jpg' },
        { id: 5, name: 'Paper',     URL: '/categories/PlaceholderCategory.jpg' },
        { id: 6, name: 'Jewelry',   URL: '/categories/PlaceholderCategory.jpg' }
    ];

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
   // Temporal Data
  //  console.log(categoryList)
   
   const fetchCategoryCrafts: CategoryCrafts[] = [
      {
          id: 1,
          craftName: 'CraftName 1',
          description: 'Craft Description',
          price: '1.00', 
          URL: '/categories/PlaceholderCategory.jpg',
          category: 'Pottery'
      },
      {
          id: 2,
          craftName: 'CraftName 2',
          description: 'Craft Description',
          price: '1.00', 
          URL: '/categories/PlaceholderCategory.jpg',
          category: 'Pottery'
      },
      {
          id: 3,
          craftName: 'CraftName 3',
          description: 'Craft Description',
          price: '1.00', 
          URL: '/categories/PlaceholderCategory.jpg',
          category: 'Pottery'
      },
      {
          id: 4,
          craftName: 'CraftName 4',
          description: 'Craft Description',
          price: '1.00', 
          URL: '/categories/PlaceholderCategory.jpg',
          category: 'Pottery'
      },
      {
          id: 5,
          craftName: 'CraftName 5',
          description: 'Craft Description',
          price: '1.00', 
          URL: '/categories/PlaceholderCategory.jpg',
          category: 'Pottery'
      }
  ]

   // Temporal Data 
   const categories: Category[] = [
    { id: 1, name: 'Pottery',   URL: '/categories/PlaceholderCategory.jpg' },
    { id: 2, name: 'Sculpture', URL: '/categories/PlaceholderCategory.jpg' },
    { id: 3, name: 'Metalwork', URL: '/categories/PlaceholderCategory.jpg' },
    { id: 4, name: 'Textiles',  URL: '/categories/PlaceholderCategory.jpg' },
    { id: 5, name: 'Paper',     URL: '/categories/PlaceholderCategory.jpg' },
    { id: 6, name: 'Jewelry',   URL: '/categories/PlaceholderCategory.jpg' }
];

 // Temporal Data 
 const artisans: Artisan[] = [
  { id: 1, artisanName: 'Artisan 1', },
  { id: 2, artisanName: 'Artisan 2', },
  { id: 3, artisanName: 'Artisan 3', },
  { id: 4, artisanName: 'Artisan 4', },
  { id: 5, artisanName: 'Artisan 5', },
  { id: 6, artisanName: 'Artisan 6' }
 ]

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

