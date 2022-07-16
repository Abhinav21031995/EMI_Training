import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ApprovalComponent } from './modules/admin/approval/approval.component';
import { HistoryComponent } from './modules/user/history/history.component';
import { MyrequestComponent } from './modules/user/myrequest/myrequest.component';
import { RequestComponent } from './modules/user/navreq/request.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:NavbarComponent},
  {path:'history',component:HistoryComponent},
  {path:'myrequest',component:MyrequestComponent},
  {path:'request',component:RequestComponent},
  {path:'approval',component:ApprovalComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
