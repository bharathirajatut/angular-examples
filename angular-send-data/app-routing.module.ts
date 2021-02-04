import { UserComponent } from './user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'login',component:LoginComponent},

  {path:"user/:userId",component:UserComponent},
  { path: '**', component:ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
