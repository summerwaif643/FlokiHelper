import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent
},

  {
  path:'mainpage',
  loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
