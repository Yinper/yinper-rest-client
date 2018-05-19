import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product, ProductSeller } from './products.interface';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    public getProduct$(id: number): Observable<Product> {
        const ENTRY_POINT =
            environment.API_ENDPOINT + environment.URL_PRODUCT + '/' + id;
        return this.http.get<Product>(ENTRY_POINT);
    }

    public getProductComments$(productID: number): Observable<Product> {
        const ENTRY_POINT =
            environment.API_ENDPOINT +
            environment.URL_PRODUCT_COMMENTS +
            '/' +
            productID;
        return this.http.get<Product>(ENTRY_POINT);
    }

    public getProductOpinions$(productID: number): Observable<Product> {
        const ENTRY_POINT =
            environment.API_ENDPOINT +
            environment.URL_PRODUCT_OPINIONS +
            '/' +
            productID;
        return this.http.get<Product>(ENTRY_POINT);
    }
}
