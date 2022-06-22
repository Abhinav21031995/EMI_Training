import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { FormArrayComponent } from "./form-array/form-array.component";
import { TemplateDeriveComponent } from "./template-derive/template-derive.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    TemplateDeriveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
