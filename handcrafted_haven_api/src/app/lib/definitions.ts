export type Product = {
  id: number;
  name: string;
  price: string;
  category: 'pottery' | 'sculpture' | 'metalwork' | 'textiles' | 'paper' | 'jewelry';
  artisan_id: number
};


export type Category = {
  id: number;
  name: string;
  URL: string;
};