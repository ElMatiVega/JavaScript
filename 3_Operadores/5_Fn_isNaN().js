let miEdad= "40"; //Para evitar inconsistencias en el codigo lo ponemos como cadena.
let edad= Number(miEdad);// con la fn Number lo pasamos a número.
console.log(edad);// en este caso en Not a Number.
console.log(typeof edad);

//Uso de la fn isNaN()
if(isNaN(edad)){
    console.log("No es un número");
}else{
    let resultado=(edad>=18)?"Puede votar":"Muy joven para votar";
    console.log(resultado);
    return resultado

}