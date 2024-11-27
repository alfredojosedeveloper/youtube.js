//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function esPrimo(numero = 0){
    if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);
    
    if (numero === 0 || numero === 1) {
        return `El valor ${numero} ingresado NO es un numero primo`;
    }

    for (var i = 2; i < numero; i++) {
        if(numero % i === 0){
            return `El valor ${numero} ingresado NO es un numero primo`;
        }
    }

    return `El valor ${numero} ingresado ES un numero primo`;
}

console.log(esPrimo(7));
console.log(esPrimo(6));

            // Solucion Jon Mircha
const numeroPrimo = (numero = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);
    if(numero === 0) return console.error("El numero no puede ser 0");
    if(numero === 1) return console.error("El numero no puede ser 1");
    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

    let divisible = false;

    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            divisible = true;
            break;
        }
    }

    return(divisible)
    ?console.log(`El numero ${numero} NO es primo`)
    :console.log(`El numero ${numero} SI es primo`);  
}
numeroPrimo();
numeroPrimo("320");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function esParOImpar(numero = 0){
    //if(!numero) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);

        if(numero % 2 === 0){
            return `El valor ${numero} ingresado ES es un numero par`;  
        }   

    return `El valor ${numero} ingresado ES un numero impar`;
}

console.log(esParOImpar(9));

            // Solucion Jon Mircha
const numeroParImpar = (numero = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);

    return (numero % 2 === 0)
    ? console.log(`EL numero ${numero} es Par`)
    :console.log(`EL numero ${numero} es Impar`);
}

numeroParImpar();
numeroParImpar("23");
numeroParImpar(-398);
numeroParImpar(19);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function conversionFACYCAF(numero = 0, tipoGrado = "C"){
    //if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un numero`);
    if(tipoGrado.toUpperCase() !== "C" && tipoGrado.toUpperCase() !== "F"){
        return console.error(`El valor ${tipoGrado} No es admitido, solo se admite C para Centigrados y F para Fahrenheit`);
    }

    let celcius = 0;
    let fahrenheit = 0
    if(tipoGrado.toUpperCase() === "C"){
        fahrenheit = (9/5 * numero)+32;
        return fahrenheit + "°F";
    }else if(tipoGrado.toUpperCase() === "F"){
        celcius = (numero - 32) / (9/5);
        return celcius + "°C";
    } 
    
    return "No se ingreso datos correctamente"
}

console.log(conversionFACYCAF(100,"F"));

            // Solucion Jon Mircha
const convertirGrados = (grados = undefined, unidad = undefined) =>{
    if(grados === undefined) return console.warn("No ingresaste un numero");
    if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado no es un numero`);  
    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");
    if(typeof unidad !== "string") return console.error(`El valor ${unidad} ingresado no es una cadena de texto`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

    if(unidad === "C"){
        return console.info(`${grados}°C =${Math.round((grados * (9/5)) + 32)}°F`);
    }else if(unidad === "F"){
        return console.info(`${grados}°F =${Math.round(((grados - 32) * (5/9)))}°C`);
    }
}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2,true);
convertirGrados(2,"Hola");
convertirGrados(2,"Hola esto C rebasa la longitud");
convertirGrados(2,"E");
convertirGrados(2,"C");
convertirGrados(0,"C");
convertirGrados(100,"C");
convertirGrados(32,"F");
convertirGrados(100,"F");

