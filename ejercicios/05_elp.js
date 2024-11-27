//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
function contarLetras(cadena = undefined){
    if(cadena === undefined) return console.warn("No ingresaste un texto");
    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es una cadena`);

    let contadorVocales = 0,
        contadorConsonantes = 0;
    for (let i = 0; i < cadena.length ; i++) {
        if(cadena.charAt(i).toLowerCase() ===  "a" || cadena.charAt(i).toLowerCase() ===  
        "e" || cadena.charAt(i).toLowerCase() ===  "i" || cadena.charAt(i).toLowerCase() ===  
        "o" || cadena.charAt(i).toLowerCase() ===  "u"){
            contadorVocales++;
        }else if(cadena.charAt(i) ===  " "){
        
        }else{
            contadorConsonantes++;
        }
    }

    return console.info(`Se han encontrado ${contadorVocales} Vocales y 
    ${contadorConsonantes} Consonantes en la cadena ${cadena}`);
}

contarLetras();
contarLetras("Bienvenidos a todos los presentes");

            // Solucion Jon Mircha
const contarLetras2 = (cadena = "") =>{
    if(!cadena) return console.warn("No ingresaste un cadena de texto");
    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es una cadena de texto`);

    let vocales = 0;
    let consonantes = 0;
    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        //AEIOUÁÉÍÓÚÜaeiouáéíóúü/.test(letra)
        if(/[aeiouáéíóúü]/.test(letra)) vocales++;
        
        //BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz/.test(letra)
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    } 
        return console.info({
            cadena,
            vocales,
            consonantes
        });
}


contarLetras2();
contarLetras2(3);
contarLetras2("Hola Mundo");
contarLetras2("Ñoño")
contarLetras2("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")


//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function validaNombre(cadena = undefined){
   // let re = new RegExp("/b/i");
    //^ No puede haber nada antes de la expresion a evaluar
    //$ No puede haber nada despues de la expresion a evaluar
    if(/^[A-Za-z\s]+$/g.test(cadena)){
        console.log(`El nombre ${cadena} recibido es un nombre correcto`);
    }else{
        console.log(`El nombre ${cadena} recibido es un nombre incorrecto`);
    }
}

validaNombre("Alfredo jOSE Acosta Reyes");

            // Solucion Jon Mircha
const validarNombre = (nombre = "") =>{
    if(!nombre) return console.warn("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado no es una cadena de texto`);
    
    //^ No puede haber nada antes de la expresion a validar
    //$ No puede haber nada despues de la expresion a validar
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg)
    ?console.info(`${nombre} ES un nombre valido`)
    :console.warn(`${nombre} NO es un nombre valido`);
}

validarNombre();
validarNombre(3);
validarNombre("Alfredo Jose Acosta");
validarNombre("Jonathan Mircha, 19");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function validaCorreo(cadena = undefined){
    // let re = new RegExp("/b/i");
 
     if(/^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,3})$/.test(cadena)){
         console.log(`El correo ${cadena} recibido es un correo correcto`);
     }else{
         console.log(`El correo ${cadena} recibido es un correo incorrecto`);
     }
 }

 validaCorreo("john@doe.com");
 validaCorreo("Fuego_12_27@hotmail.com");

             // Solucion Jon Mircha
const validarCorreo = (correo = "") =>{
    if(!correo) return console.warn("No ingresaste un Email");
    if(typeof correo !== "string") return console.error(`El valor ${correo} ingresado no es una cadena de texto`);
                
    //^ No puede haber nada antes de la expresion a validar
    //$ No puede haber nada despues de la expresion a validar
    let expReg = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
            
    return (expReg)
    ?console.info(`${correo} ES un Email valido`)
    :console.warn(`${correo} NO es un Email valido`);
}

validarCorreo();
validarCorreo(34);
validarCorreo("jon,mir,cha@gmail.com");
validarCorreo("jonmircha@gmail.com");
console.log("------------------------------");

//Fusion 19 y 20
const validarPatron = (cadena = "",patron = undefined) =>{
    if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");
    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es una cadena de texto`);
    if(!patron) return console.warn("No ingresaste un patron a evaluar");
    if(!(patron instanceof RegExp)) return console.error(`El valor ${patron} ingresado no es una expresion regular`);
                
    //^ No puede haber nada antes de la expresion a validar
    //$ No puede haber nada despues de la expresion a validar
    let expReg = patron.test(cadena);
            
    return (expReg)
    ?console.info(`${cadena} CUMPLE con el patron ingresado`)
    :console.warn(`${cadena} NO CUMPLE con el patron ingresado`);
}


validarPatron();
validarPatron({});
validarPatron("Hola Mundo");
validarPatron("Hola Mundo","Hola");
validarPatron("Hola Mundo","[1,2,3]");
validarPatron("Jonathan MirCha",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron("Jonathan MirCha 19",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron("jonmircha@gmail.com",/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validarPatron("jonmircha@gmail",new RegExp(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/),"i");
validarPatron("jonmircha@gmail.com",new RegExp(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/),"i");

