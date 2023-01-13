let numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.includes(13215165));//el atributo includes nos busca si ese elemento esta dentro del array y nos devuelve un valor bolean True o False dependiendo el caso.

if(numbers.includes(4)){
    console.log("es verdad");
}else{
    console.log("no esta");
}

const list = ["Daniel", "Lorena", "Juan", "Nicolas"];

console.log(list.includes("Daniel"));// hay que tener cuidado con mayus y minus y con los numeros en el un string, hay que convertirlos a numero antes de buscar
