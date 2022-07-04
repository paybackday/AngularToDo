export class ToDoItem{
    description:string;
    action:string;

    // When we define class, TypeScript is going to give error to us about defined properties because TypeScript always request first time initialize parameter. For the solve this problem firstly we should go to tsconfig.json where have been typescript configurations. We need to define strictNullChecks : false under the compiler options settings.

// OR

//As seen below we can create constructor with parameters for assign to properties.

    constructor(description:string, action:string){
        this.description=description;
        this.action=action;
    }

} 

// We can define a class for each todoItem where have been inside of the todo.component.ts list

//When I want to create object from this class, just I need to write "  const td = new ToDoItem("spor","yes")   " whereever i want.