// analizamos el 2=(==) y el 3 = (===)
let a=3, b= 4, c="3";

let z= a==b;
console.log(z);

let y= a==c;
console.log(y);
// el === tiene en cuenti el tipo de dato
y= a===c;
console.log(y);
console.log(typeof a);
console.log(typeof c);

// DISTINTO A =  !n

let x = a != c;
console.log(x);

 x = a !== c;
console.log(x);