import { ToDoItem } from "./todoItem";

export class Model{
    name:string;
    items:ToDoItem[];

    constructor(){
        this.name="Emre";
        this.items=[
            new ToDoItem("kahvalti",true),
            new ToDoItem("spor",true),
            new ToDoItem("alisveris",false),
            new ToDoItem("testDeneme",false),
        ]

    }

}