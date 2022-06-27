import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: "", component: NavbarComponent,children: [
    {path: 'login', component: LoginComponent},
]},
 { path: "request", component: RequestComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
