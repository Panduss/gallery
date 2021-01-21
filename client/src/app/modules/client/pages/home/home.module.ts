import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home';

const routes: Routes = [{
  path: '',
  component: HomePage
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomePage
  ],
  declarations: [
    HomePage
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomeModule {
}
