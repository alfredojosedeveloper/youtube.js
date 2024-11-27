// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteresCadena(input = ""){
     if (!input){
        console.warn("No ingresate ninguna cadena");
     }else if(typeof input === "number") {
        console.log("Esto es un Numero de tamaño: ");
        return input.toString().length;
      }else if(typeof input === "string") {
        console.log("Esto es un String de tamaño: ");
        return input.length;
      } else if(Array.isArray(input)){
        console.log("Esto es un Array de tamaño: ");
        return input.length;
      }else if(typeof input === 'object') {
        console.log("Esto es un Objeto de tamaño: ");
        return Object.keys(input).length;
      }else if(typeof input === 'undefined') {
        console.log("Esto es un Undefined");
      } 

      return "Undefined";
}

const obj ={
    nombre:"Alfred",
    apellido: "Acosta",
    edad: "29",
    obj2 : {
        nombre2 : "Carlos",
        apellido2 : "Reyes",
        edad2 : 48
    }
};

let arreglo1 = [5,10,15,20,100,1000,10000]; 

console.log(contarCaracteresCadena("Hola a todos"));
console.log(contarCaracteresCadena());

            // Solucion Jon Mircha
 const contarCaracteres = (cadena = "") =>
  (!cadena) 
  ? console.warn(`No ingresaste ninguna cadena`)
  :console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres("Hello World");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortarCaracteresTexto(input, input2){
    let subCadena = "";
    for (let i = 0; i < input2; i++) {
        subCadena = subCadena + input.charAt(i);
        
    }
    //console.log(`TAMAÑO DE LA CADENA ES: ${subCadena.length}`);
    return subCadena;
}

console.log(recortarCaracteresTexto("Buenos dias a todos", 11));

            // Solucion Jon Mircha
  const recortarTexto = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto") 
    : (longitud === undefined)
      ? console.warn("No ingresaste la longitud para recortar el texto")
      :console.info(cadena.slice(0,longitud));

    recortarTexto("Hello World",5);
    recortarTexto();
    recortarTexto("Hola Hola");
    recortarTexto("",5);

// 3) Programa una función dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function dividirCadena(input, separador){
    return input.split(separador);
}

console.log(dividirCadena("Hola Mundo"," "));
console.log(dividirCadena("12, 13, 14",","));

          // Solucion Jon Mircha
const cadenaAArreglo = (cadena = "", separador = undefined) =>
(!cadena)
    ? console.warn("No ingresaste una cadena de texto") 
    : (separador === undefined)
      ? console.warn("No ingresaste el caracter separador")
      :console.info(cadena.split(separador));

cadenaAArreglo("Hola Que Tal"," ");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ","); 
cadenaAArreglo();
cadenaAArreglo("Hola mundo");
cadenaAArreglo("","-");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(input, numero){
    let cadena = input;
    for (let i = 0; i < (numero-1); i++) {
        cadena = cadena + " " + input;
    }

    return cadena;
}

console.log(repetirTexto("Hola Mundo Cruel", 10));

          // Solucion Jon Mircha
const repetirTexto2 = (texto = "", veces = undefined) =>{
  if(!texto) return console.warn("No ingresaste un texto");

  if(veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto");
  
  if(veces === 0) return console.error("El numero de veces no puede ser 0");

  if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto} ${i}`);
}

repetirTexto2("Hello World", 3);
repetirTexto2("Hello World", 0);
repetirTexto2("Hello World", -20);
repetirTexto2("", 20);
repetirTexto2("Hello World");
      
