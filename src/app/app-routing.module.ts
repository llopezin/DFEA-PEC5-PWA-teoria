import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './views/components/image/image.component';
import { ImagesComponent } from './views/components/images/images.component';

const routes: Routes = [
  {
    path: '',
    component: ImagesComponent,
  },
  {
    path: 'image/:id',
    component: ImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
