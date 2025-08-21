import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ExamplesComponent } from './examples/examples.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bindings', component: BindingsComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '**', redirectTo: '' }
];
