var nombre = "Juan";
var apellido = "Perez";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Perez";
console.log(nombreCompleto2);

var num = 5;
console.log(nombre + (num + 2));

//Definir si un numero es par o es impar
let numeroNuevo = 8;
if (numeroNuevo%2==0) {
    console.log("el valor de la variable es par")
}else{
    console.log("El valor de la variable es impar")
}

//definir el ciclo de vida segun la edad
let edad = 60;
if (edad >= 0 && edad<=5){
    console.log("esta persona  se encuentra en la etapa de primera infancia");
}else if (edad >= 6 && edad<=11) {
    console.log("Esta persona se encuentra en la etapa de infancia");
}else if (edad >= 12 && edad<=18) {
    console.log("Esta persona se encuentra en la etapa de adolescencia");
}else if (edad >= 14 && edad<=26) {
    console.log("Esta persona se encuentra en la etapa de juventud");
}else if (edad >= 27 && edad<=59) {
    console.log("Esta persona se encuentra en la etapa de adultez");
}else if (edad >=60) {
    console.log("Esta persona se encuentra en la etapa de Vejez");
}


let miNumero = "23";
miNumero= Number(miNumero);

console.log((miNumero >= 18) ? "Esta persona puede votar" : "es muy joven y no puede votar");

let mes = 2;
console.log(typeof mes)
if (mes <=2) {
    console.log("Estamos en invierno")
}else if (mes >= 4 && mes <=5) {
    console.log("Estamos en Primavera")
}else if (mes >= 6 && mes <=8) {
    console.log("Estamos en Verano")
}else if (mes >= 9 && mes <=11) {
    console.log("Estamos en Verano")
}else if (mes == 12) {
    console.log("Estamos en invierno")
}else{
    console.log("Ingresaste un valor que no es valido")
}

let hora = 12;
if (hora >=0 && hora <=11) {
    console.log("Buenos días");
}else if (hora >=12 && hora <=18) {
    console.log("Buenas Tardes");
}else if (hora >=19 && hora <=23){
    console.log("Buenas Noches");
}else{
    console.log("Hora incorrecta")
}

let numeronew = 1;
let numeroTexto = "Valor desconocido"

switch (numeronew) {
    case 1:
        numeroTexto = "numero Uno"
        break;

    case 2:
        numeroTexto = "Nuermo Dos"
        break;

    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto= "numero Cuatro";
        break;
    default:
        numeroTexto = "Caso no encontrado"
        break;
}

console.log(numeroTexto)

/*
let newmes=2;
let estacion = "Estacion desconocida";

switch(newmes){
    case 12: case 1: case 2:
        estacion="INVIERNO";
        break;
    case 3: case 4: case 5:
        estacion = "PRIMAVERA";
        break;
    case 6: case 7: case 8:
        estacion = "VERANO";
        break;
    case 9: case 10: case 11:
        estacion = "OTOÑO";
        break;
    default:
        estacion = "MES INCORRECTO";
        break;
}
console.log(estacion)

let contador = 0;
while (contador<=10){
    console.log(contador);
    contador++;
}
console.log("Fin del while " + contador);

do {
    console.log(contador)
    contador++;
} while (contador <=20);

*/

/*
for (let contador = 0; contador <3; contador++) {
    console.log(contador);
}
console.log("fin ciclio for ");
*/
for (let contador = 0; contador<=10; contador++) {
    if (contador % 2 != 0) {
        continue;
    }
    console.log(contador);
    
}