import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SqrtPipe } from './sqrt.pipe';
import { DateFormPipesComponent } from './date-form-pipes/date-form-pipes.component';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FavouriteComponent,
    ContactFormComponent,
    PipeExampleComponent,
    CustomPipesComponent,
    SqrtPipe,
    DateFormPipesComponent,
    HttpPracticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
