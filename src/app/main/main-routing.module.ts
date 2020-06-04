import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'main',
    component : MainComponent
  },
  {
    path : 'library',
    component : LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
