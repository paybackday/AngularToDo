import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ToDoItem } from '../todoItem'; // When we define ToDoItem[], this import code autommatically created.

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  private name = "Emre"; //Variable declaration

  public inputText="";

  public displayAll:boolean = false;

  public message="";

  public model=new Model();

  public getName(){
    return this.model.name;
  }

  public getItems()
  {
    if (this.displayAll) 
    {
      return this.model.items;  
    }
    else
    {
      return this.model.items.filter(x=>x.action==false)
    }
    
  }

  public addItem(){
    this.message=this.inputText;
    if (this.inputText!="") 
    {
      this.model.items.push(new ToDoItem(this.inputText,false));
      this.inputText="";
    }
    else
    {
      alert("Lutfen gecerli bir deger giriniz.");
    }
  }

  public geCompletedItemsCount(){
    return this.model.items.filter(x=>x.action).length;

  }

  //As we do on other language we should define a class model for list etc. For we doing this firstly let we create '.ts' file inside of the app folder.



  ngOnInit(): void {
  }

}
