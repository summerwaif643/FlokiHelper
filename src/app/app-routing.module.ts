import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
{
  path: '',
  component: IntroComponent
},

  {
    path: 'intro',
    component: IntroComponent
  },

  {
    path: 'mainpage', 
    component: MainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
