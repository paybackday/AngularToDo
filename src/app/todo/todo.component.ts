import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ToDoItem } from '../todoItem'; // When we define ToDoItem[], this import code autommatically created.

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { 
    this.model.items=this.getFromLocalStorage();
  }

  public name = "Emre"; //Variable declaration

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
    this.message=this.inputText; //We are assigning text that we get from input element to message variable.
    if (this.inputText!="")   // If text which is we get from input element is not null,
    {
      var tdItem = new ToDoItem(this.inputText,false); // We create a new ToDoItem
      this.model.items.push(tdItem); //We are adding item which we created to model

      //let items=this.getFromLocalStorage(); //We create a new list for push to local storage (never used).
      localStorage.setItem("items",JSON.stringify(this.model.items)); // We are pushing model item list that we added to local storage.
      this.inputText=""; //We're assigning of empty for clear to inside of the input element.
    }
    else
    {
      alert("Lutfen gecerli bir deger giriniz.");
    }
  }

  public getFromLocalStorage(){
    let items:ToDoItem[]=[]; //We create a new ToDoItem array.

    let value = localStorage.getItem("items"); // We are taking items from local storage.

    if(value!=null){ //If items that we pulled from local storage is not null,
      items=JSON.parse(value); // We convert to destination type and we are assigning.
    }

    return items; // We're returning in here.

  }

  public geCompletedItemsCount(){
    return this.model.items.filter(x=>x.action).length;
  }

  public getBtnClasses(){
    return {
      'disabled': this.inputText.length==0,
      'btn-secondary':this.inputText.length==0,
      'btn-primary':this.inputText.length>0
    }
  }

  
  //As we do on other language we should define a class model for list etc. For we doing this firstly let we create '.ts' file inside of the app folder.


  public onActionChanged(item:ToDoItem){
    console.log(item); //I wrote to console with which one item i will work.
    let items=this.getFromLocalStorage(); //I pull items from local storage.
    localStorage.clear(); //After that, i'm clearing to local storage for i can assign new one.
    let foundIndex = items.findIndex(x=>x.description==item.description); //I'm finding index number of item that come as a parameter inside of items list.

    items[foundIndex].action=item.action; //I'm changing list item with using index number.

    localStorage.setItem("items",JSON.stringify(items)); //After all of those steps, I'm reassigning to localstorage with use items key value.
  }

  ngOnInit(): void {
  }

}
