// const b = {}
// console.log(b);

// const c = new Object()

// Un objeto es una coleccion de llaves valores

/*dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos */
const jon = {
    nombre: "jon",
    apellido: "Mircha",
    edad: 35,
    pasatiempos: ["Correr", "Hacer ejercicio", "dar clases"],
    soltero: false,
    contacto:{
        email:"jonmircha@gmail.com",
        twitter:"@jonmircha",
        movil:"381556252"
    },
    saludar: function(){
        console.log("Hola")
    },
    decirMiNombre: function(){
        console.log("Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter")
    }
}

console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.soltero);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto.twitter);
jon.saludar();
jon.decirMiNombre();

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"))
console.log(jon.hasOwnProperty("nacimiento"))