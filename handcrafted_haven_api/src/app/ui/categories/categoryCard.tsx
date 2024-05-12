import { Category } from '@/app/lib/definitions';
import Link from "next/link";
import Image from "next/image";


export default async function CategoryCard( {category}: {category: Category} ) {
    return (
        <>
            <Link href='#'>
                <Image
                    src={category.URL}
                    alt={`Image for ${category.name} category`}
                    width={200}
                    height={200}
                />
            </Link>
            <p className='text-center p-0'>
                {category.name}
            </p>
        </>
    )    
}