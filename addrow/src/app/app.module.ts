import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailsComponentsComponent } from './details-components/details-components.component';
import { PermanentlinkComponent } from './permanentlink/permanentlink.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DetailsComponentsComponent,
    PermanentlinkComponent,
    CustomValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
