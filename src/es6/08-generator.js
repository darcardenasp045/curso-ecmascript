function* iterate(array){//esta funcion con el * retorna una iteracion dntro del for sin declarar
    for (let value of array){
        yield value;
    }
}

const it = iterate(["Daniel", "Armando", "Jeimy", "Lorena"]);
console.log(it.next().value);//cada console log itera dentro del for sin declarar
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//Ejercicio

function* getId() {
    let id = 1;
    while (true) {
        yield Math.floor(id * Math.random().toFixed(2));
        id ++
    }
}

const id = getId();
console.log(id.next().value);//cada console log itera dentro del for sin declarar
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

