export type Platform = 'ALL' | 'PS5' | 'SWITCH' | 'XBOX';

export interface ProductSpecs {
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  fileSize?: string;
}

export interface Product {
  id: string;
  internalId: string;
  sn: string;
  title: string;
  genre: string;
  price: number;
  platform: Platform[];
  coverUrl: string;
  description?: string;
  specs?: ProductSpecs;
}

export interface CartItem extends Product {
  cartId: string;
}
