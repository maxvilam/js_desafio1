let n1=0;
let n2=0;
let n3=0;
let n4=0;
let n5=0;

do {
  n1 = prompt("Favor ingresar numero 1:");
} while (isNaN(n1));
n1 = parseInt(n1);

do {
  n2 = prompt("Favor ingresar numero 2:");
} while (isNaN(n2));
n2 = parseInt(n1);

do {
  n3 = prompt("Favor ingresar numero 3:");
} while (isNaN(n3));
n3 = parseInt(n1);

do {
  n4 = prompt("Favor ingresar numero 4:");
} while (isNaN(n4));
n4 = parseInt(n1);

do {
  n5 = prompt("Favor ingresar numero 5:");
} while (isNaN(n5));
n5 = parseInt(n1);

console.log(
  "La suma de los numeros es: " +
    n1 +
    "+" +
    n2 +
    "+" +
    n3 +
    "+" +
    n4 +
    "+" +
    n5 +
    "= " +
    (n1 + n2 + n3 + n4 + n5)
);

console.log(
  "El promedio es: " +
    n1 +
    " " +
    n2 +
    " " +
    n3 +
    " " +
    n4 +
    " " +
    n5 +
    "= " +
    (n1 + n2 + n3 + n4 + n5) / 5
);
