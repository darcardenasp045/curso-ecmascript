//Antes

function newUser(name, age, country){
    var nombre = name || "Daniel";
    var edad = age || 31;
	var pais = country ||  "Colombia"; 
    console.log(nombre, edad, pais);
}
newUser();
newUser("juan", 6, "CM");

//Despues

function newUser2(name = "Manuel", age = 06, country = "MX"){
    console.log(name, age, country)
}
newUser2();
newUser2("Lorena", 31, "BL");

