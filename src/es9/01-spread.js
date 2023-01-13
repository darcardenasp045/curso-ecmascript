const user = {
    username: "Daniel",
    age: 31,
    country: "CO"
}
const {username, ...values} = user;//Aqui sacamos el user name del objeto original, y el resto lo dejamos en values con el indicador de propagacion ...

console.log(username);//Aqui nos muestra solo el user name por que lo sacamos anteriormente
console.log(values);



