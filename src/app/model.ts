import { ToDoItem } from "./todoItem";

export class Model{
    name:string;
    items:ToDoItem[];

    constructor(){
        this.name="Emre";
        this.items=[
            new ToDoItem("kahvalti","yes"),
            new ToDoItem("spor","yes"),
            new ToDoItem("alisveris","no"),
            new ToDoItem("testDeneme","no"),
        ]

    }

}