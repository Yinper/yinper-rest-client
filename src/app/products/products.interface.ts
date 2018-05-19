export interface Product {
    id: number;
    productID: number;
    title: string;
    description: string;
    favorit: boolean;
    recommended: false;
    recommendations: number;
    photos: string[];
    price: number;
    shippingCost: number;
    paymentMethods: number[];
    delivery: string;
    categories: number[];
    stock: number;
    state: number;
    situation: number;
    salesCheck: boolean;
    originalPacking: false;
    seller: ProductSeller;
}

export interface ProductSeller {
    id: number;
    sellerName: string;
    follow: boolean;
    sellerRating: number;
    sellerUrl: string;
}

export interface ProductComments {
    id: number;
    productID: number;
    userID: number;
    userName: string;
    follow: boolean;
    userRating: number;
    userUrl: string;
    commentDate: string;
    commentText: string;
}

export interface ProductOpinions {
    id: number;
    productID: number;
    userID: number;
    userName: string;
    follow: boolean;
    userRating: number;
    userUrl: string;
    opinionDate: string;
    opinionText: string;
    responses: ProductResponse[];
}

export interface ProductResponse {
    userID: number;
    userName: string;
    responseDate: string;
    userUrl: string;
    responseText: string;
}
