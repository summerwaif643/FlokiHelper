import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent
},

  {
    path: 'mainpage',
    component: MainpageComponent
  },

  {
    path: 'intro',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
