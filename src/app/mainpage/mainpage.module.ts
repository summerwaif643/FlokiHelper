import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MainpageComponent } from './mainpage.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [MainpageComponent]
})
export class MainpageModule { }
