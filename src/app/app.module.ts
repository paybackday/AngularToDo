import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //When we add FormsModule into the imports side this codeline is going to add automatically to here. If we want to use ngModel command into the html page we have to define FormsModule.
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';
//If we want to add any component to app module, we just enough writing to CLI "ng generate component <c_name>"
@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
