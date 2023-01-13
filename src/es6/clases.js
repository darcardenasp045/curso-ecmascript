//Declaracion de clases

class User{};//Declarar una nueva clase
const newUser = new User();//instancia de una nueva clase

class user {
    //Metodos
    greeting(){
        return "Hello";
    }
};

const Daniel = new user();
console.log(Daniel.greeting());
const lorena = new user();
console.log(lorena.greeting());

//Constructor

class user{
    //Constructor
    constructor(){
        console.log("Nuevo Usuario");
    }
    greeting(){
        return "Hello";
    }
};

const juan = new user();

//this

class user{
    constructor(nombre){
        this.name = nombre;
    }
    //metodos
    speak(){
        return "hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
const manuel = new user("Manuel");
console.log(manuel.greeting());

//setters a getters

class user{
    //constructor
    constructor(nombre, edad){
        this.name = nombre;
        this.age = edad;
    }
    //metodos
    speak() {
        return "Hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge (n){
        this.age = n;
    }
}
const desarrollador = new user("Jeimy", 31);
console.log(desarrollador.uAge);
console.log(desarrollador.uAge = 20);





