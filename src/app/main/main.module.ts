import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LibraryComponent } from './library/library.component';


@NgModule({
  declarations: [HomeComponent, MainComponent, LibraryComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
