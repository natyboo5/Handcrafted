import { Category } from "./definitions";
import { CategoryCrafts } from "./definitions";
import { Artisan } from "./definitions";

// Temporal Data use in CategoryList() and CategoryCraftList()
export  const categories: Category[] = [
    { id: 1, name: 'Pottery',   URL: '/categories/PlaceholderCategory.jpg' },
    { id: 2, name: 'Sculpture', URL: '/categories/PlaceholderCategory.jpg' },
    { id: 3, name: 'Metalwork', URL: '/categories/PlaceholderCategory.jpg' },
    { id: 4, name: 'Textiles',  URL: '/categories/PlaceholderCategory.jpg' },
    { id: 5, name: 'Paper',     URL: '/categories/PlaceholderCategory.jpg' },
    { id: 6, name: 'Jewelry',   URL: '/categories/PlaceholderCategory.jpg' }
];


// Temporal Data for CategoryCraftList()
   
  export const fetchCategoryCrafts: CategoryCrafts[] = [
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



 // Temporal Data for CategoryCraftList
export const artisans: Artisan[] = [
    {   id: 1, 
        artisanFName: 'Fname1', 
        artisanLName: 'Lname1',
        artisanEmail: 'artisan1@email',
        artisanPhone: '789-789-7894',
        artisanInfo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
    },
    {   id: 2, 
        artisanFName: 'Fname2', 
        artisanLName: 'Lname2',
        artisanEmail: 'artisan2@email',
        artisanPhone: '789-789-7894',
        artisanInfo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
    },
    {   id: 3, 
        artisanFName: 'Fname3', 
        artisanLName: 'Lname3',
        artisanEmail: 'artisan3@email',
        artisanPhone: '789-789-7894',
        artisanInfo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
    },
    {   id: 4, 
        artisanFName: 'Fname4', 
        artisanLName: 'Lname4',
        artisanEmail: 'artisan4@email',
        artisanPhone: '789-789-7894',
        artisanInfo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
    },
   ]