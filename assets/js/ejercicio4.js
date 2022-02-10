let dias = 0;
let ndias = 0;

do {
  dias = prompt("Ingrese la cantidad de días para calcular Año-Semanas-Días");
} while (isNaN(ndias));
ndias = parseInt(dias);

let years = 0;
let semanas = 0;
let rdias = 0;

if (ndias<0){
  ndias=ndias * -1;
}

if (ndias < 7) {
  years = 0;
  semanas = 0;
  rdias = ndias;
} else {
  if (ndias < 365) {
    years = 0;
    semanas = Math.trunc(ndias / 7);
    rdias = ndias - 7 * semanas;
  } else {
    years = Math.trunc(ndias / 365);
    drestantes = ndias - years * 365;
    semanas = Math.trunc(drestantes / 7);
    rdias = drestantes - 7 * semanas;
  }
}

console.log("Cantidad de días ingresados", ndias);
console.log("Años", years);
console.log("Semanas", semanas);
console.log("Días", rdias);
