const numbers = document.getElementById('numbers');
const results = document.getElementById('result');

let a = prompt('Introduce el primer valor');
let b = prompt('Introduce el suegundo valor');
let c = prompt('Introduce el tercer valor');

numbers.textContent = `Los valores introducidos son ${a} ${b} ${c}`;

if(a >= b && a >=c){
    document.write("El mayor es el primer numero");
} else if(b >= a && b >= c){
    document.write("El mayor numero es el segundo");
} else if(c >= a && c >=b){
    document.write("El mayor es el tercero");
}

if(a>=b && a>=c){
    if(b>c){
        results.textContent = `El orden es: ${a}, ${b}, ${c}`
    }else{
        results.textContent = `El orden es: ${a}, ${c}, ${b}`
    }
}