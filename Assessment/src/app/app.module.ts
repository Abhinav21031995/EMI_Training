import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';
import { AdminoperationComponent } from './adminoperation/adminoperation.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdminoperationComponent,
    DialogComponent,

  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    ReactiveFormsModule,
  
    MatCardModule,
    
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
