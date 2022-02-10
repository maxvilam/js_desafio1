//const fc= (ne,no) => {
//    for (let i = ne; i < no; i++){
//        console.log(i);
//    }
//}

/* const fcc= (ne,no) => {
    var i=ne;
    while (i>=no) {
        console.log(i);
        i--;       
    }
}
fcc(1000,0); */
const rc=(n1, n2)=> {
        if (n1<n2) return;
        console.log(n1);
        rc(n1-1,n2);
}

/* console.time("recursivedecrese")
rc(10000,1)
console.timeEnd("recursivedecrese") */
/* 
const nc2 =(n1 , n2)=> n1+n2;
const nc3 = (a,b,c)=> (a+b+c)/3;
const nc4 =(a,b)=> a*b;
/* console.log(nc4(4,5))
const nc5 = a => a.length;

console.log(nc5([1 , 2 , 2 , 3, 2])) */

let n=prompt("Ingrese un numero")
const n6= a => console.log(a);
n6(n)

const nc2 =(n1 , n2)=> console.log(n1+n2);
const nc2 =(a , b, c)=> alert("Su promedio es:", (a+b+c)/3);
