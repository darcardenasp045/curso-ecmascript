//enahced object literas

function newUser(user, age, country, iUs){
    return {
        user,
        age,
        country,//asi es en ECMA script 6
        id:iUs//asi era en ECMA script 5
    };
}
console.log(newUser("Daniel", 31, "CL", 1026275));