import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { RequestComponent } from './modules/user/navreq/request.component';
import { ApprovalComponent } from './modules/admin/approval/approval.component';
import { MatSelectModule } from '@angular/material/select';
import { MyrequestComponent } from './modules/user/myrequest/myrequest.component';
import { HistoryComponent } from './modules/user/history/history.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReqpageComponent } from './modules/user/reqpage/reqpage.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    RequestComponent,
    ApprovalComponent,
    MyrequestComponent,
    HistoryComponent,
    ReqpageComponent,
  ],
  imports: [
    BrowserModule,MatDatepickerModule,
    AppRoutingModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
