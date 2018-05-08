import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categories } from './categories/categories.interface';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const categories: Categories[] = [
            {
                id: 1,
                nameCategory: 'Destacados',
                iconCategory: 'https://image.flaticon.com/icons/svg/188/188000.svg',
                order: 1
            }, {
                id: 2,
                nameCategory: 'Ropa',
                iconCategory: 'https://tienda.ulpgc.es/wp-content/uploads/2014/08/icon-ropa-basico.png',
                order: 2
            }, {
                id: 3,
                nameCategory: 'Hogar',
                iconCategory: 'https://image.flaticon.com/icons/svg/188/188000.svg',
                order: 3
            }, {
                id: 4,
                nameCategory: 'Electronica',
                iconCategory: 'https://tienda.ulpgc.es/wp-content/uploads/2014/08/icon-ropa-basico.png',
                order: 4
            }, {
                id: 5,
                nameCategory: 'Salud y Belleza',
                iconCategory: 'https://image.flaticon.com/icons/svg/188/188000.svg',
                order: 5
            }, {
                id: 6,
                nameCategory: 'Juegos',
                iconCategory: 'https://tienda.ulpgc.es/wp-content/uploads/2014/08/icon-ropa-basico.png',
                order: 6
            }
        ];
        return { categories };
    }
}
