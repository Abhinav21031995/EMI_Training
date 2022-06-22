import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DialogComponent } from './dialog/dialog.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path:'list',component:EmployeeListComponent
  },

  { path:'details/:id',component:EmployeeDetailsComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'details/:id/edit/:id',component:DialogComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
