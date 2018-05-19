import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Categories } from './categories.interface';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    constructor(private http: HttpClient) {}

    public getCategories$(): Observable<Categories[]> {
        const ENTRY_POINT =
            environment.API_ENDPOINT + environment.URL_CATEGORIES;
        return this.http.get<Categories[]>(ENTRY_POINT);
    }
}
