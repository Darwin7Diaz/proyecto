var precio_base = 2000

//valores de los recargos
var edad_18 = 0.1 //10%
var edad_25 = 0.2 //20%
var edad_50 = 0.3 //30%

var casado_18 = 0.1 //10%
var casado_25 = 0.2 //20%
var casado_50 = 0.3 //30%

var hijos = 0.2 //20%

// recargo
var recargo = 0
var recargo_total = 0

//precio final
var precio_final = 0

//memsajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos anos tiene? ingrese solo numeros")

var casado = prompt("?Esta casado actualmente?")
// comprobamos la edad del comyuge, solamente si se esta casando/a
var edad_conyuge
if("si" == casado.toUpperCase()){
    edad_conyuge = prompt("Que edad tiene su esposo/a", "si/no")
}
//convirtiendo las edades ingresadas a numeros
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0