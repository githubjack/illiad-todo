import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosModule } from './todos/todos.module';
import { TodosComponent } from './todos/components/todos/todos.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, TodosModule ],
  declarations: [ AppComponent, TodosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
