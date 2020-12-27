import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'master-data', loadChildren: () => import('./master-data/master-data.module').then(m => m.MasterDataModule) },
  { path: 'bill-data', loadChildren: () => import('./bill-data/bill-data.module').then(m => m.BillDataModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
