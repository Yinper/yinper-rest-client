import { ProductOpinions } from './products/products.interface';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Categories } from './categories/categories.interface';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';
import { Product, ProductComments } from 'src/app/products/products.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private categories: Categories[] = [];
    private product: Product;
    private opinions: ProductOpinions;
    private comments: ProductComments;
    private message: string;
    private fullError: string;

    constructor(
        private categoriesService: CategoriesService,
        private productsService: ProductsService
    ) {}

    ngOnInit() {
        this.categoriesService
            .getCategories$()
            .subscribe(
                this.showCategories.bind(this),
                this.catchError.bind(this)
            );

        this.productsService
            .getProduct$(593)
            .subscribe(this.showProduct.bind(this), this.catchError.bind(this));

        this.productsService
            .getProductComments$(53)
            .subscribe(
                this.showComments.bind(this),
                this.catchError.bind(this)
            );

        this.productsService
            .getProductOpinions$(93)
            .subscribe(
                this.showOpinions.bind(this),
                this.catchError.bind(this)
            );
    }

    private showCategories(categories: Categories[]) {
        console.log(categories);
        this.categories = categories;
    }

    private showProduct(product: Product) {
        console.log(product);
        this.product = product;
    }

    private showComments(comments: ProductComments) {
        console.log(comments);
        this.comments = comments;
    }

    private showOpinions(opinions: ProductOpinions) {
        console.log(opinions);
        this.opinions = opinions;
    }

    private catchError(err) {
        if (err instanceof HttpErrorResponse) {
            this.message = `Http Error: ${err.status}, text: ${err.statusText}`;
        } else {
            this.message = `Unknown error, text: ${err.message}`;
        }
        this.fullError = err;
    }
}
