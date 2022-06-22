import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import {DatabindingComponent} from './Components/databinding/databinding.component';
import {FormsModule} from '@angular/forms';
import { SwitchComponent } from './Components/switch/switch.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MenuComponent } from './Components/menu/menu.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeInfoComponent } from './Components/employee-info/employee-info.component';

import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
import { AssignInitialPipe } from './SharedModule/assign-initial.pipe';
// @HostBinding
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DatabindingComponent,
    SwitchComponent,
    PageNotFoundComponent,
    MenuComponent,
    EmployeeDetailsComponent,
    EmployeeInfoComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    RouteParameterComponent,
    AssignInitialPipe
           ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
