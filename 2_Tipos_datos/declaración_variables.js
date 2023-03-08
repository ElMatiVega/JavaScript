//NO es buena practica

nombre="Matías";
console.log(nombre);

var segundoNombre= "Lucas";

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