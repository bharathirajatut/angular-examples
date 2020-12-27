import { BillListComponent } from './bill-list/bill-list.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'new-bill',component: NewBillComponent },
    { path: 'bill-list',component: BillListComponent },

]