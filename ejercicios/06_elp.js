//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
function arrayCuadrados(array = [], exponente = 0){
    if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(array instanceof Array)) return console.error(`El valor ${array} ingresado no es un Array de numeros`);
    if(array.length === 0) return console.error(`El arreglo esta vacio`);
    //if(exponente === 0) return console.warn("El exponente no puede ser 0");
    if(typeof exponente !== "number") return console.error(`El valor ${exponente} ingresado no es un numero`);

    const array2 = new Array(array.length);
    let cont = 0;
    array.forEach(element => {
        array2[cont] = Math.pow(element,exponente);
        cont++;
    });

    array2.forEach(element => {
        console.log(element);
    });
}

arrayCuadrados();
arrayCuadrados(new Array(1,4,5),2);

            // Solucion Jon Mircha
const devolverCuadrados = (arr = undefined) =>{
if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
if(!(arr instanceof Array)) return console.error(`El valor ${arr} que ingresaste no es un arreglo valido`);
if(arr.length === 0) return console.error(`El arreglo esta vacio`);

for (let num of arr) {
    if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
}

const newArr = arr.map(el => el * el);

return console.info(`Arreglo original: ${arr}, \nArreglo elevado al cuadrado: ${newArr}`);
}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1,3,{}]);
devolverCuadrados([1,4,8]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
function numeroAltoBajo(array = []){
    let aux = 0;
    console.log("Length : " + array.length);
    for (let i = 0; i < (array.length - 1); i++) {//Ordenamiento burbuja
        //console.log("Length -1: " + (array.length - i));
        for (let j = 1; j < (array.length - i); j++) {
            //console.log(" Array : [" + array[j - 1] + "][" + array[j] + "]");
            //console.log("Array ANTES= [" + array[0] +"]"+"[" + array[1] +"]"+"[" + array[2] +"]"+"[" + array[3] +"]"+"[" + array[4] +"]"+"[" + array[5] +"]"+"[" + array[6] +"]");
            if (array[j - 1] > (array[j])) {
                aux = array[j - 1];
                array[j - 1] = array[j];
                array[j] = aux;
            }
            //console.log("Array AHORA = [" + array[0] +"]"+"[" + array[1] +"]"+"[" + array[2] +"]"+"[" + array[3] +"]"+"[" + array[4] +"]"+"[" + array[5] +"]"+"[" + array[6] +"]");
            //console.log(array[i]);
        }   
    }

   return console.log(`Array = [${array[0]}, ${array[(array.length - 1)]}]`);        
}

numeroAltoBajo(new Array(-2,56,1,3,89,-63,102,10,-254,300));

            // Solucion Jon Mircha
const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error(`El valor ${arr} que ingresaste no es un arreglo valido`);
    if(arr.length === 0) return console.error(`El arreglo esta vacio`);
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
    }

    return console.info(`Areglo Original: ${arr}\nValor Mayor: ${Math.max(...arr)}\nValor Menor: ${Math.min(...arr)}`);
}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,3,true]);
arrayMinMax([1,4,5,99,-60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function objetoParImpar(array = []){
    if(!(array instanceof Array)) return console.error(`El valor ${array} ingresado no es un Array de numeros`);
    const arrayPares = [],
        arrayImpares = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            arrayPares.push(array[i]);  
        } else {
            arrayImpares.push(array[i]);
        }
    }

    const objetoArray = {
        arrayPares,
        arrayImpares        
    }

    return console.log(objetoArray);
}

objetoParImpar([1,2,3,4,5,6,7,8,9,0]);

            // Solucion Jon Mircha
const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if(!(arr instanceof Array)) return console.error(`El valor ${arr} que ingresaste no es un arreglo valido`);
    if(arr.length === 0) return console.error(`El arreglo esta vacio`);
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un numero`);
    }

    return console.info({
    pares: arr.filter(num => num % 2 === 0),    
    impares: arr.filter(num => num % 2 === 1)        
    });
}

separarParesImpares();
separarParesImpares("hola");
separarParesImpares({});
separarParesImpares([]);
separarParesImpares([2,4,"j"]);
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);


