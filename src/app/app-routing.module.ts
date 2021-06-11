import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { DateFormPipesComponent } from './date-form-pipes/date-form-pipes.component';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

const routes: Routes = [
  { path: 'binding', component: BindingComponent},
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'pipe', component: PipeExampleComponent},
  { path: 'pipe-custom', component: CustomPipesComponent},
  { path: 'date-pipe-form', component: DateFormPipesComponent},
  { path: 'http-module', component: HttpPracticeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
