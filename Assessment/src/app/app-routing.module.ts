import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminoperationComponent } from './adminoperation/adminoperation.component';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './shared/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';



const routes: Routes = [
  // {path:'',redirectTo:'/navbar',pathMatch:'full'},
 
  {path:'',component:NavbarComponent,
 },
  {path:'login',component:LoginComponent },
{path:'adminoperation',component:AdminoperationComponent },
{path:'dialog',component:DialogComponent },
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
