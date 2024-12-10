export interface ICartItem {
  id: number;
  title: string;
  minimumOrderQuantity: number;
  price: number;
  quantity: number;
  thumbnail: string;
  
}
export interface ICartState {
  cart: ICartItem[];
}
