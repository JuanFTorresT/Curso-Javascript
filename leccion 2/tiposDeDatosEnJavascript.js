/*
*Ejemplos de Tipos de datos en JS
*/
//Tipo de dato String
var nombre = "Felipe";
console.log(nombre);

//Tipo de dato numerico
var numero = 23;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre:"juan",
    apellido:"Perez",
    telefono: "3178369087"
}

console.log(objeto);

console.log(typeof numero);

//Tipo de dato boolean

var booleano = true;

console.log(booleano, typeof booleano);

//tipo de dato Function

function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//tipo de dato symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo)
console.log(typeof simbolo)

//tipo clase es una funcion

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);
console.log(typeof persona);

//tipo de dato undefined
var x;
console.log(x)
console.log(typeof x)

//null
var c = null;
console.log(c);
console.log(typeof c);

//Arreglos
var autos = ["bmw", "audi", "volvo", "Ferrari"];
console.log(autos);
console.log(typeof autos);

//String vacío

var vacio = '';
console.log(vacio)
console.log(typeof vacio)