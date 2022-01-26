import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
  // A simple route to a component
  // Be aware that the order is important in angular
  // The first route that fits the format will be used
  // { path: 'login', component: LoginComponent },
  /**
   *   { path: 'qualifier',
    loadChildren: () => import ('./qualifier/qualifier.module').then(m => m.QualifierModule)
  },
   */
  { path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }