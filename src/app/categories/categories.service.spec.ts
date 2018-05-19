import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import {
    HttpClientModule,
    HttpRequest,
    HttpParams,
    HttpClient
} from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { CategoriesService } from './categories.service';
import { Categories } from './categories.interface';

describe('categoriesService', () => {
    const endpoint = 'api/categories';
    const response: Categories[] = [
        {
            id: 1,
            nameCategory: 'Destacados',
            iconCategory: 'https://image.flaticon.com/icons/svg/188/188000.svg',
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
            iconCategory: 'https://image.flaticon.com/icons/svg/188/188000.svg',
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
            iconCategory: 'https://image.flaticon.com/icons/svg/188/188000.svg',
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

    let injector: TestBed;
    let service: CategoriesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [CategoriesService]
        });
        injector = getTestBed();
        service = TestBed.get(CategoriesService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(
        inject([HttpTestingController], (backend: HttpTestingController) => {
            backend.verify();
        })
    );

    it('should be created', async(
        inject([CategoriesService], (service: CategoriesService) => {
            expect(service).toBeTruthy();
        })
    ));

    it('#getCategories', () => {
        service.getCategories$().subscribe(categories => {
            expect(categories.length).toBeGreaterThan(
                0,
                'should have categories'
            );
            expect(categories.length).toBe(6);
            expect(categories).toEqual(response);
        });

        httpMock.expectOne(endpoint).flush(response);

        httpMock.verify();
    });
});
