import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todoItem'; // When we define ToDoItem[], this import code autommatically created.

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  private name = "Emre"; //Variable declaration

  public items: ToDoItem[] = [
    new ToDoItem("kahvalti","yes"),
    new ToDoItem("spor","yes"),
    new ToDoItem("alisveris","no"),
  ]; // Define list with complex type

  //As we do on other language we should define a class model for list etc. For we doing this firstly let we create '.ts' file inside of the app folder.



  ngOnInit(): void {
  }

}
