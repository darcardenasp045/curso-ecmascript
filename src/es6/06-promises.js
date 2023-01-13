const promesa = () => {
    return new Promise((resolve, reject) => {
    if (true) {
        //true o false
        resolve("Se ha resuelto la promesa")
    } else {
        reject("Se ha rechazado la promesa")
    }
    })
}

promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject


////////////////////////////Segundo Ejercicio

export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
    
}
