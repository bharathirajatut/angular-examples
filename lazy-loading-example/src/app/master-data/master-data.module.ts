import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

import {routes} from './master-data.routing'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsListComponent, CategoryListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MasterDataModule { }
