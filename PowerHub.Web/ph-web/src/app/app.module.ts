import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { TasksModule } from 'src/app/tasks/tasks.module';
import { HomeComponent } from 'src/app/home/home.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }