//YA NO SE RECOMIENDO ESTA SINTAXIS PARA DECLARAR ARREGLOS
//let autos = new Array("bmw", "mercedes benz", "volvo");

let autos = ["bmw", "mercedes benz", "volvo", "lamborghini", "Toyota", "Nissan", "Mazda", "Honda"];
console.log(autos);
//recorrer un arreglo
for(i=0;i<autos.length; i++){
    console.log(i + ": " + autos[i])
}
//MODIFICAR los elementos de un ARREGLO
autos[0] = "Jeep";
for(i=0;i<autos.length; i++){
    console.log(i + ": " + autos[i])
}
//agregar un elemento al final de un arreglo
autos.push("Audi");
for(i=0;i<autos.length; i++){
    console.log(i + ": " + autos[i])
}

//SABER SI ES UN ARREGLO O NO
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
