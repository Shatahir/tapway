import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesGridComponent } from './components/images-grid/images-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FullImagesComponent } from './components/full-images/full-images.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskComponent } from './components/task/task.component'

@NgModule({
  declarations: [
    AppComponent,
    ImagesGridComponent,
    FullImagesComponent,
    NavBarComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
