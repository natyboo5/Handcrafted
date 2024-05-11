import Link from "next/link";
import Image from "next/image";
// import styles from "@/styles/category.module.css"

// .....................................................
// Code using the database

// import { fetchCategories } from '@/app/lib/data';

// export default async function Categories() {
//     const categoriesHomePage = await fetchCategories();
// ......................................................

export default function Categories() {

    // Temporal variable for the categories
    const categoriesHomePage = [
        { id: 1, name: 'Pottery' },
        { id: 2, name: 'Sculpture' },
        { id: 3, name: 'Metalwork' },
        { id: 4, name: 'Textiles' },
        { id: 5, name: 'Paper' },
        { id: 6, name: 'Jewelry' }
    ];

    return (
        // <div className={styles.categoriesImages}>
        <div>

            {
                categoriesHomePage.map((category) => {
                    return (
                        <div key={category.id}>
                            <Link href='#'>
                                <Image
                                    src={"categories/PlaceholderCategory.svg"}

                                    alt={`${category}`}
                                    width={100}
                                    height={100}
                                />
                            </Link>
                            <p>
                                {category.name}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}