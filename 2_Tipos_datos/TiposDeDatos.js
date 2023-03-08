//Tipo de dato string
var nombre="Cande";
console.log( typeof nombre);
nombre=15;
console.log(typeof nombre);
nombre='';
console.log(typeof nombre);
//uso de TYPEOF

console.log(typeof nombre);
//Tipo de dato numerico
var numero=1000;
console.log(numero);
//Tipo de dato Object
var objeto={
    nombre:"Vale",
    apellido:"Vega",
    telefono:"123455"
};
console.log(objeto);
//Tipos boolean
let bandera= true;
console.log(typeof bandera);

// Tipo de dato funcion

function miFn() {  
}
console.log(typeof miFn);

//Tipo de dato Symbol

let simbolo= Symbol('mi simbolo');
console.log(typeof simbolo);

//Tipo de dato, las Clases
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined, la tenemos en automatico.
let x;
console.log(typeof x);
// Tipo de Dato null, cambia el typeof.
let y=null;
console.log(typeof y);

//Tipo de dato ARRAY es de tipo object
let autos=["Reanult", "Fiat", "chevrolet"]
console.log(autos);
console.log(typeof autos);





