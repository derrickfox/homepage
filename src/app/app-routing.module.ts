import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '#', pathMatch: 'full' },
  { path: 'art', component: ArtComponent },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
