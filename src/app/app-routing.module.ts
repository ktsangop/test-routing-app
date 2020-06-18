import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'intro'},
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'intro',
    component: HeaderOneComponent,
    outlet: 'header'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'main',
    component: HeaderTwoComponent,
    outlet: 'header'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
