import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';
//If we want to add any component to app module, we just enough writing to CLI "ng generate component <c_name>"
@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
