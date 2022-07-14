//Program
// Define the types in typescript for the given following JavaScript code.
// Todo:
// - Define type/interface for a single Todo object.
// - Define type for each function.
// - Do not use `any` (TS Data Type) type of typescript.
// Code: 
type TODO ={
    name:string;
    description:string;
    done:boolean;
};

var todos :TODO[] = [];
function add(name:string , description:string){
 return todos.push({
 name: name,
 description: description,
 done: false
 });

}
function remove(index:number) {
 return todos.splice(index, 1);
}
function list() : void {
 todos.forEach(function(todo, index) {
 console.log(index + " - " + todo.name);
 });
}
function update(index:number, name:string, description:string) {
 todos[index].name = name;
 todos[index].description = description;
 return todos[index];
}


// add('start machine','start your laptop and get ready to work');
// add('type code','type the code on your laptop and get ready to run the code');
// add('run code','run and test the code');
// remove(0);
// update(0,'write code', 'write the code applying logic')
// list();