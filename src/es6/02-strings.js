let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase);

// Template Literals

let epicPhrase2 = `${hello} ${world}!`;// Estas comillas se llaman `` comillas francesas, y los espacios dentro de ellas son validos en la presentacion.
console.log(epicPhrase2);

//Multi - Line strings

//Antes

let lorem = 'Esto es un string \n ' + 'Esto es otro string';

//Despues

let lorem2 = `Esta es la linea de arriba
esta es la linea de abajo`;//Esto funciona tambien con las comillas francesas.

console.log(lorem);
console.log(lorem2);


