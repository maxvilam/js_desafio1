const gc=prompt("Favor ingresar temperatura en grados Celcius:")
    
const ngc= parseInt(gc);
const gk = ngc + 273.15;
const gf = (ngc * 9 / 5) + 32;
console.log("El equivalente de " + ngc + " grados Celcius en grados Kelvin es: " + gk + " , y en grados Fahrenheit es: " + gf)