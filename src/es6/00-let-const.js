var lastname = "david";
lastname = "daniel";

console.log(lastname);

let fruit = "manzana";
fruit = "kiwi";
console.log(fruit);

const animal = "gato";
animal = "perro";
console.log(animal); // las variables const no se pueden reasignar.

const fruits = () => {
    if (true){
        var fruit1= "apple";//funcion scope
        let fruit2 = "kiwi";//block scope
        const fruit3= "orange";//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);

}
fruits();
