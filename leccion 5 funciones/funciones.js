function Suma(a,b){
    return a+b;
}
let resultado = Suma(5,2);
console.log(resultado)

//declaracion de una funcion de tipo expresion
let x = function (a,b) {return a+b};

//uso de la funcion de tipo expresion
resultado = x(1,2);
console.log(resultado);

//funcion de tipo self invoking

(function (a,b) {
    console.log("Ejecutando funcion: "+(a+b))
})(5,2);