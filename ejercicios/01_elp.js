//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function inviertePalabra(cadena = ""){
    if(!cadena) console.warn("No ingresaste ninguna cadena");

    let subCadena = "";
    for(i = (cadena.length - 1); i >= 0 ; i--){
        subCadena = subCadena + cadena.charAt(i);
    }
    return subCadena;
}

console.log(inviertePalabra("Hello World"));

            // Solucion Jon Mircha
const invertirCadena = (cadena ="") =>
(!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Hola Mundo");
invertirCadena("JavaScript es un lenguaje de programacion increible");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function repeticionPalabra(cadena = "", palabra = undefined){
    if(!cadena) console.warn("No ingresaste ninguna cadena");

    if(cadena === undefined) console.warn("No ingresaste la palabra a buscar");
    
    const patron = new RegExp(palabra,"g");
    const resultado = cadena.match(patron);
    return console.log(`Veces que se repite "${palabra}" en la cadena "${cadena}": ${resultado.length} veces`);
}

repeticionPalabra("Bienvenidos al mundo, al mundo de alicia donde el mundo es inverso de los mundos inversos", "mundo");

            // Solucion Jon Mircha
const textoEnCadena = (cadena = "", texto = "") =>{
    if(!cadena){
        console.warn("No ingresaste el texto largo");
    }
    if(!texto){
        console.warn("No ingresaste la palabra a evaluar");
        return "";
    }
    
    let i=0;
    let contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

//textoEnCadena();
//textoEnCadena("","mundo");
textoEnCadena("hola mundo adios mundo lloro mundo holi mundo chao mundo", "mundo");

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function esPalindromo(cadena = ""){
    if(!cadena) console.warn("No ingresaste ninguna cadena");

    let subCadena = "";
    for(i = (cadena.length - 1); i >= 0 ; i--){
        if(cadena.charAt(i) !== " "){
            subCadena = subCadena + cadena.charAt(i);
        }
    }

    //Falta quitar acentos
    if(subCadena.replace(/,/g, "").toLowerCase() === cadena.replace(/ /g, "").replace(/,/g, "").toLowerCase()){
        return "Es palindromo";
    }else {
        return "No es palindromo";
    }
}

console.log(esPalindromo("oi lo de mama me dolio"));

            // Solucion Jon Mircha
const palindromo = (palabra = "") =>{
    if(!palabra) return console.warn("No ingresaste una palabra o frase");
    
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
     ?console.info(`Si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
     :console.info(`No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`);
}

palindromo();
palindromo("oi lo de mama me dolio");// si es un palindromo
palindromo("Salas");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function eliminarPatron(cadena = "", patron = ""){
    let nuevaPalabra = "";
    var re = new RegExp(patron,'ig');

    nuevaPalabra = cadena.replace(re,"");
    
    return nuevaPalabra;
}

console.log("Resultado = " + eliminarPatron("xyZ1, xyz2, xyz3, xyz4 y xyz5","xyz"));

           // Solucion Jon Mircha
const eliminarCarecteres = (texto = "", patron = "") =>
(!texto)
 ?console.warn("No ingresaste un texto")
 :(!patron)
  ?console.log("No ingresaste un patron de caracteres")
  :console.info(texto.replace(new RegExp(patron,"ig"),""));//La i en ig significa que busca en mayusculas y minusculas, Mientras que la g significa que buscara en todas las coincidencias en la cadena

  eliminarCarecteres();
  eliminarCarecteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
  eliminarCarecteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
  eliminarCarecteres("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","o");
