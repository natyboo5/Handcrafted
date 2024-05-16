import { sql } from '@vercel/postgres';
import {
  Product
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
  noStore();
  try {
    const products = await sql`SELECT * FROM products p
    JOIN artisans a ON p.artisans_id = a.id `;
    console.log(products);
    return products;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}


export async function fetchCategory() {
  noStore();
  
  // SQL 
  
}



export async function fetchCategoryCrafts(category: string) {
  noStore();
  
  // SQL 
  
}