//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function numeroAleatorio(){
    let valorBoleano = true;
    let random = 0;

    while(valorBoleano){
        random = Math.floor(Math.random() * 601)
        if(random >= 501 && random <= 600){
            valorBoleano = false;
        }
    }
    return random;
}
console.log(numeroAleatorio());

            // Solucion Jon Mircha
const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));

aleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function esCapicua(numero = 0){
    if(!numero) console.warn("No ingresaste un numero");

    let valorBolean = false;
    let subCadena = "";
    for(i = (numero.length -1); i >= 0 ; i--){ 
        subCadena = subCadena + numero.charAt(i);
    }

    for (let i = 0; i < (numero.length - 1); i++) {
        if(numero.charAt(i) === subCadena.charAt(i)){
            valorBolean = true;
        }else{
            valorBolean = false;
            break;
        }
    }

    return (valorBolean)?`El numero ${numero} es capicua` :`El numero ${numero} no es capicua`;
}

console.log(esCapicua("559311202113955"));
console.log(esCapicua("212.212"));

            // Solucion Jon Mircha
const capicua = (numero = 0) =>{
    if(!numero) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves) 
    ? console.info(`Si es capicua. Numero Original ${numero} Numero Alreves ${alReves}`)
    : console.info(`No es capicua. Numero Original ${numero} Numero Alreves ${alReves}`);
}

capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(2002);
capicua(18.99);
capicua(212.212);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(numero = 0){
    if(!numero || numero === 0) console.warn("No ingresaste ningun numero o ingresaste 0");
    
    if(numero === 0 || numero === 1){
        return 1;
    }

    let factorial= numero;
    for (let i = 1; i < numero; i++) {
        factorial = factorial * (numero-i);
    }

    return `Factorial de ${numero} = ${factorial}`;
}

console.log(factorial(8)); 

            // Solucion Jon Mircha
const factorial2 = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);

    if(numero === 0) return console.error("El numero no puede ser 0");

    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }
    
    return console.info(`EL factorial de ${numero} es ${factorial}`);
}

factorial2();
factorial2("5");
factorial2([1,2,3]);
factorial2(0);
factorial2(5);
factorial2(8);
