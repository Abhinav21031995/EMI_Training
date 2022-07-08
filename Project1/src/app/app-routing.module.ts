import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: '', component: NavbarComponent},
    {path: 'login', component: LoginComponent},

 { path: 'request', component: RequestComponent,children: [
  {path: 'myrequest', component: MyrequestComponent}],
 
 }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
