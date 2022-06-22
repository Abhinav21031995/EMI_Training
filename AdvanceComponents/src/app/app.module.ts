import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './employee/employee.component';
import { RatingComponent } from './rating/rating.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { StoredRecordsComponent } from './stored-records/stored-records.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    EmployeeComponent,
    RatingComponent,
    CreateEmployeeComponent,
    StoredRecordsComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
