//Arrays Destructuring

let fruits =["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[0]);

//Object destructuring

let user = {
    username: "daniel",
    age: 31
};
let { username, age} = user;
console.log(username,age);
console.log(user.username, user.age);

//Spread operator

let person = {
    name:"daniel",
    age:31
}
let country = "CL";

let data = {
    ...person, country
};
console.log(data);

//Rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[1]);//[ ] Determina la posicion en el array de values
    return num + values[1];
}
sum(1, 2, 3, 4);

//Ejercicio

export function solution(
    json1 = {
        name: "Bigotes",
        food: "pescado"
    },
    json2 = {
        age: 12,
        color: "Blanco"
    }
) {
    return { 
    ...json1, ...json2,
    };
}



