import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'products-list',component: ProductsListComponent },
    { path: 'category-list',component: CategoryListComponent },

]