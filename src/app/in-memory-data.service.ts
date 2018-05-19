import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categories } from './categories/categories.interface';
import {
    Product,
    ProductSeller,
    ProductComments,
    ProductOpinions
} from './products/products.interface';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const categories: Categories[] = [
            {
                id: 1,
                nameCategory: 'Destacados',
                iconCategory:
                    'https://image.flaticon.com/icons/svg/188/188000.svg',
                order: 1
            },
            {
                id: 2,
                nameCategory: 'Ropa',
                iconCategory:
                    'https://tienda.ulpgc.es/wp-content/uploads/2014/08/icon-ropa-basico.png',
                order: 2
            },
            {
                id: 3,
                nameCategory: 'Hogar',
                iconCategory:
                    'https://image.flaticon.com/icons/svg/188/188000.svg',
                order: 3
            },
            {
                id: 4,
                nameCategory: 'Electronica',
                iconCategory:
                    'https://tienda.ulpgc.es/wp-content/uploads/2014/08/icon-ropa-basico.png',
                order: 4
            },
            {
                id: 5,
                nameCategory: 'Salud y Belleza',
                iconCategory:
                    'https://image.flaticon.com/icons/svg/188/188000.svg',
                order: 5
            },
            {
                id: 6,
                nameCategory: 'Juegos',
                iconCategory:
                    'https://tienda.ulpgc.es/wp-content/uploads/2014/08/icon-ropa-basico.png',
                order: 6
            }
        ];

        const product: Product[] = [
            {
                id: 593,
                productID: 593,
                title: 'Samsung Galaxy S8',
                description:
                    'Color negro. Procesador de 8 núcleos. 64GB ampliable a 256 con tarjeta. Cámara de 12mp y frontal de 8.',
                favorit: false,
                recommended: false,
                recommendations: 4,
                photos: [
                    'https://www.yinper.com/pics/593/1.jpg',
                    'https://www.yinper.com/pics/593/2.jpg'
                ],
                price: 469.1,
                shippingCost: 50.9,
                paymentMethods: [1, 2],
                delivery:
                    'Tiempo de entrega máximo 48hrs. desde la recogida del producto',
                categories: [4],
                stock: 1,
                state: 2,
                situation: 3,
                salesCheck: false,
                originalPacking: false,
                seller: {
                    id: 684,
                    sellerName: 'Estrella Castro',
                    follow: false,
                    sellerRating: 1,
                    sellerUrl: 'https://www.yinper.com/perfil/estrella/684'
                }
            }
        ];

        const productComments: ProductComments[] = [
            {
                id: 53,
                productID: 593,
                userID: 252,
                userName: 'Rubén',
                follow: false,
                userRating: 2,
                userUrl: 'https://www.yinper.com/perfil/ruben/252',
                commentDate: '16/05/2018',
                commentText: '¿Que accesorios incluye?'
            }
        ];

        const productOpinions: ProductOpinions[] = [
            {
                id: 93,
                productID: 593,
                userID: 703,
                userName: 'Isma',
                follow: false, //indica si el usuario que visualiza el producto sigue al opinador
                userRating: 3,
                userUrl: 'https://www.yinper.com/perfil/isma/703',
                opinionDate: '2018-01-01T08:00:00',
                opinionText: `Vendedor excepcional,amable y sincero,el producto era justo lo que el prometia,
                             muy buen precio y siempre dispuesto a facilitar la operacion de compra....`,
                responses: [
                    {
                        userID: 684,
                        userName: 'Estrella',
                        responseDate: '2018-01-01T08:00:00',
                        userUrl: 'https://www.yinper.com/perfil/estrella/684',
                        responseText: 'Gracias Isma!! Lo que necesites.'
                    }
                ]
            }
        ];

        return { categories, product, productComments, productOpinions };
    }
}
