import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelloComponent } from './hello/hello.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [

  {path:'hello',component:HelloComponent},
  {path:'subject',component:SubjectComponent},
  {path:'about',component:AboutusComponent},
  {path:'replay',component:ReplaySubjectComponent},
  {path:'',redirectTo:'hello',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
