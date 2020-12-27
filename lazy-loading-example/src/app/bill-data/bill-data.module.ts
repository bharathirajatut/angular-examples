import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillListComponent } from './bill-list/bill-list.component';
import { NewBillComponent } from './new-bill/new-bill.component';


import {routes} from './bill-data.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BillListComponent, NewBillComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class BillDataModule { }
