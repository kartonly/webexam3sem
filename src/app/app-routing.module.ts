import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: TextComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
