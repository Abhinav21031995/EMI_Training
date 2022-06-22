import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { FormArrayComponent } from "./form-array/form-array.component";
import { TemplateDeriveComponent } from "./template-derive/template-derive.component";

const routes: Routes = [
  { path: "", component: ReactiveFormComponent },
  { path: "array", component: FormArrayComponent },
  { path: "template", component: TemplateDeriveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
