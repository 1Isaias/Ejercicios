// // Funciones con parametros 

// // function sumar (numero1, numero2, numero3, numero4, numero5, numero6){ 
// //     console.log(numero1 + numero2 + numero3 + numero4 - numero5 - numero6)
// // }

// // sumar(2, 2, 4, 8, 10, 10)// En los parentesis iria el valor que le queremos agregar al parametro ()  
// // Para tener una mejor comprension de los parametros nos imaginemos que un parametro vendria a ser una variable que luego imprimiriamos su valor en un console log

// Hay dos formas de colocarle valor a los parametros.
// Una es como el ejemplo que vimos anteriormente. Y la otra es declarando el valor dentro del parametro gracias al operador =
// function sumar (numero1 = 2 , numero2 = 2, numero3 = 4, numero4 = 8, numero5 = 10, numero6 = 10){ 
//         console.log(numero1 + numero2 + numero3 + numero4 - numero5 - numero6)
//     }

// // Resumen:
// // Las funciones pueden tener parametros que son "variables" que nosotros pasamos a las funciones, dichos parametros solo pueden ser utilizados dentro de la funcion


// // function saludo(nombre, nombre2, nombre3, nombre4){
// //     console.log("Un gusto conocerte " + nombre +", "+ nombre2 +", "+ nombre3 +", "+ nombre4)    
// // }

// // saludo("Camila")
// // saludo("Luciano")
// // saludo("Hector")
// // saludo("Juan")
// // saludo("Paula")

// // Return
// // function dameUnNombre(){
// //     return "juan"
// // }

// // let nombre = dameUnNombre()
// // console.log("Hola " + nombre)

// // function sumar(numero1, numero2){
// //     return (numero1 + numero2)   
// // }

// // console.log(sumar(1,2))

// // // Ejercicio

// // let primeraSuma = sumar(1,2)
// // let segundaSuma = sumar(primeraSuma, 100)

// // console.log(segundaSuma)

// // Ejercicio 1:
// // Crea una funcion llamada "avsiso lluv ia", que contenga un unico parametro y que este sea booleano(estalloviendo).booleano
// // Si esta lloviendo, se imprimira por pantalla "esta lloviendo", en caso contrario, se imprimira "no esta lloviendo"


// // function avisoLuvia (estalloviendo){
// //     if(estalloviendo){
// //         console.log("esta lloveindo")
// //     }else {
// //         console.log("No esta lloviendo")
// //     }
// // }

// // avisoLuvia(false)


// // Ejercicio 2 :
// // Crea una funcion llamada "calcular", la funcion contendra 3 parametros: x, y, z,
// // estos tres parametros seran numeros. La funcion tiene que retornar el resultado de sumar x con y multiplicado por z

// // function calcular(x, y, z){
// //     let suma = x + y
// //     let resultado = suma * z
// //     return resultado
// // }

// // console.log(calcular(2, 2, 4))

// // Ejercicio 3 :

// // function calculadora(operacion, x, y){
// //     console.log(operacion, + x + y)
// // }

// // calculadora("suma ", 5, 5)
// // calculadora("resta ", 5, 1)



// // function calculadora(operacion, x, y){
// //     if(operacion == "suma"){
// //         return x +
// //     }
// // }


// // Funcion Declarada
// // function estoEsUnaFuncion(){
// //     // cuerpo de la funcion
// //     console.log("Uno")
// //     console.log("Dos")    // En este momento, la funcion ya esta declarada
// //     console.log("Tres")
// // }
// // Para que se se ejecute, simplemente hay que invocarla, y lo hacemos de la sgte manera
// // estoEsUnaFuncion();  //Los parentesis en programacion indican que una funcion se va a ejecutar

// function unaFuncionQueDevuelveValor(){
//     console.log("Uno")
//     return 19
//     console.log("Dos")
//     console.log("Tres")
//     return "La funcion ha retornado una cadena de texto" // (una funcion puede devolver cualquier tipo de dato, ya sea primitivo(boolean) o compuesto (objetos))
// }

// // Para mostrar el contenido de return en la consola puedo hacerlo de dos maneras


// // Ejecutando la funcion dentro de un console.log:
// // console.log(unaFuncionQueDevuelveValor());  

// // O, asignando la funcion a una variable
// let valorDeFuncion = unaFuncionQueDevuelveValor()

// console.log(valorDeFuncion)


// Dentro de una funcion cuando el interprete encuentra la palabra reservada return, en ese momento, ignora todas las lineas de codigo que estan abajo.

// Parametros
function saludar(nombre = "Mario", edad = 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

saludar("KEnAi", 7);
saludar()





