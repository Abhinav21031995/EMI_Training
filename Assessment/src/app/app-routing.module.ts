import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './admin/addbook/addbook.component';
import { AdminComponent } from './admin/admin/admin.component';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './shared/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  // {path:'',redirectTo:'/navbar',pathMatch:'full'},
 
  {path:'',component:NavbarComponent,
 },
  {path:'login',component:LoginComponent },
  {path:'addbook',component:AddbookComponent },

{path:'dialog',component:DialogComponent },
{path:'user',component:UserComponent },
{path:'admin',component:AdminComponent },
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
