interface IDimensions {
    width: number;
    height: number;
    depth: number;
  }
  
  interface IReview {
    rating: number;
    comment: string;
    date: string; // ISO date format
    reviewerName: string;
    reviewerEmail: string;
  }
  
  interface IMeta {
    createdAt: string; // ISO date format
    updatedAt: string; // ISO date format
    barcode: string;
    qrCode: string;
  }
  
  export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    thumbnail: string;
    images: string[];
  }
  