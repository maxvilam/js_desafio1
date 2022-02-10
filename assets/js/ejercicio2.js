let n1=0;
let n2=0;

do{
    let p1=prompt("Ingrese Numero 1, debe ser distintos y mayores a cero:")
    let p2=prompt("Ingrese Numero 2, debe ser distintos y mayores a cero:")
    n1= parseInt(p1);
    n2= parseInt(p2);
    console.log(n1)
    console.log(n2)
    console.log(n1*n2)
    if ((n1!=n2) && (n1!=0) && (n2!=0)){
        break;
    }
    else{
        console.log("No se cumple con que los numeros sean distintos y qeu no sean igual 0")
    }
} while (true);

console.log("la suma de: " + n1 + "+" +n2 + "=" + (n1+n2))
console.log("la resta de: " + n1 + "-" +n2 + "=" + (n1-n2))
console.log("la división de: " + n1 + "/" +n2 + "=" + (n1/n2))
console.log("la multiplicación de: " + n1 + "x" +n2 + "=" + (n1*n2))
console.log("El módulo de: " + n1 + " y " +n2 + "=" + (n1%n2))
