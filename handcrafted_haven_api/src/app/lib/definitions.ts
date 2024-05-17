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

export type CategoryCrafts = {
  id: number;
  craftName: string;
  description: string;
  price: string;
  URL: string;
  category: string;
}

export type Artisan = {
  id: number;
  artisanFName: string;
  artisanLName: string;
  artisanEmail: string;
  artisanPhone: string;
  artisanInfo: string;
}