import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesGridComponent } from './components/images-grid/images-grid.component';
import { FullImagesComponent } from './components/full-images/full-images.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: '', component: ImagesGridComponent },
  { path: 'image-grid', component: ImagesGridComponent },
  { path: 'full-image/:imageUrl', component: FullImagesComponent },
  { path: 'task', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
