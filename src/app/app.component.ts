import { Component, OnInit } from '@angular/core';
import { Categories } from './categories/categories.interface';
import { CategoriesService } from './categories/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private categories: Categories[] = [];

    constructor(private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.categoriesService.getCategories()
            .subscribe(categories => {
                console.log(categories);
                this.categories = categories;
            });
    }
}
