import { Category } from '@/app/lib/definitions';
import { CategoryCrafts } from '@/app/lib/definitions';
import { Artisan } from '@/app/lib/definitions';
import Link from "next/link";
import Image from "next/image";


export async function CategoryCard( {category}: {category: Category} ) {
    return (
        <>
            <Link href={`/handcrafted-haven/category/${category.name}/loadCategory`}>
                <Image
                    src={category.URL}
                    alt={`Image for ${category.name} category`}
                    width={300}
                    height={300}
                />
            </Link>
            <p className='text-center p-3'>
                {category.name}
            </p>
        </>
    )    
}


export async function CategoryCraftCards( {categoryCraft}: {categoryCraft: CategoryCrafts} ) {
    return (
        <>
            <Link href={'#'}>
                <Image
                    src={categoryCraft.URL}
                    alt={`Image for ${categoryCraft.craftName} category`}
                    width={300}
                    height={300}
                />
            </Link>
            <div className='text-center p-1 text-sm'>
                <p> {categoryCraft.craftName} </p>
                <p> {categoryCraft.description} </p>
                <p> {`$${categoryCraft.price}`} </p>
            </div>
        </>
    )    
}


export async function CategoryPageList( {category}: {category: Category} ) {
    return (
        <>  
            <Link href={`/handcrafted-haven/category/${category.name}/loadCategory`}>
                <p className='text-center p-3'>
                    {category.name}
                </p>
            </Link>
        </>
    )    
}


export async function ArtisanList( {artisan}: {artisan: Artisan} ) {
    return (
        <>  
            <Link href={`#`}>
                <p className='text-center p-3 block'>
                    {`${artisan.artisanFName} ${artisan.artisanLName}`}
                </p>
            </Link>
        </>
    )    
}