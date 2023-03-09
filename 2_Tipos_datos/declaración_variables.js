
let a, b;
a = 1, b  =2;
let c= a + b;
console.log(c);

// -------------JAVASCRIPT  es sencible a minusculas y mayausculas.

let nombredeperro= "Dina Mita";
let nombreDePerro= "Alfi";
console.log(nombredeperro);
console.log(nombreDePerro);

// Una variable no puede empezar con NUMEROS, o ser PLABRA RESERVADA, a continuacion casos válidos.

let marcas1= ["marca1","marca2","marca3"];
let _marcas=["marca_A","marca_B"];
let $monedas=["pesos", "dolares","reales"];

//NO es buena practica
nombre="Matías";
console.log(nombre);

// usa CamelCase es una buena practica
var segundoNombre= "Lucas";
// CONSOLE.LOG() console es un objeto y log es un METODO O FUNCION
console.log(segundoNombre);


let apellido="Vega";
// const NO permite cambiar el valor

const nombreCompleto= nombre +' '+ segundoNombre+' '+ apellido;
console.log(nombreCompleto);

const algo="una cosa";
console.log(algo);
algo= "otra cosa";
console.log(algo);


let x= nombre + 4 + 0;
console.log(x);

let y= nombre + (4 + 0);
console.log(y);

let z= 25 + 15 + nombre;
console.log(z);