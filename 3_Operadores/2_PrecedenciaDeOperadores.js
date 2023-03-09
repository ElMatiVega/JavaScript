let a=3, b=2, c=1, d=4;

// las expresiones (a*b)se evaluan de izq a der.
let z = a * b;
console.log(z);

//comparamos 
z = a * b + c;
console.log(z);

// ANALISIS previo
//     2°      1° 
//    |         |
//    v         v 
z =   c   +   a * b;
console.log(z);


// ANALISIS previo
//1° -> a * b
//2° -> 1°/b
//3° -> 3° + c
z =   c   +   a * b / d;
console.log(z);

// ANALISIS previo
//1° -> a*b
//2° -> c/d
//3° -> 1° + 2°
z =  a * b + c/d;
console.log(z);

//Usando () podemos alterar el orden de presedencia

z= (c + a ) * b / c;
console.log(z);

z =   (c   +   a) * b / d;
console.log(z);