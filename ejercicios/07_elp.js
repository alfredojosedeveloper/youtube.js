//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
function arreglosAscendentesDescendentes(array = undefined) {
  if (array === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(array instanceof Array))
    return console.error(
      `El valor ${array} ingresado no es un Array de numeros`
    );
  if (array.length === 0) return console.error(`El arreglo esta vacio`);

  let arrayAscendente = [];
  let arrayDescendente = [];
  let aux = 0;
  for (let i = 0; i < array.length - 1; i++) {
    //Ordenamiento Burbuja Ascendente
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        aux = array[j - 1];
        array[j - 1] = array[j];
        array[j] = aux;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    arrayAscendente.push(array[i]);
  }

  for (let i = 0; i < array.length - 1; i++) {
    //Ordenamiento Burbuja Descendente
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] < array[j]) {
        aux = array[j - 1];
        array[j - 1] = array[j];
        array[j] = aux;
      }
    }
  }

  arrayDescendente = array;

  return console.info({
    ascendente: arrayAscendente,
    descendente: arrayDescendente,
  });
}

arreglosAscendentesDescendentes([
  2, -170, 6, 8, 6, -8, 8, 10, 45, 23, -56, 67, 16, 100, 54,
]);

// Solucion Jon Mircha
const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error(
      `El valor ${arr} que ingresaste no es un arreglo valido`
    );
  if (arr.length === 0) return console.error(`El arreglo esta vacio`);

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado no es un numero`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenarArreglo();
ordenarArreglo("Hola");
ordenarArreglo([]);
ordenarArreglo([3, {}]);
ordenarArreglo([7, 5, 7, 8, 6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
function eliminarDuplicados(arrTwo = undefined) {
  if (arrTwo === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arrTwo instanceof Array))
    return console.error(
      `El valor ${array} ingresado no es un Array de numeros`
    );
  if (arrTwo.length === 0) return console.error(`El arreglo esta vacio`);

  const filteredArray = arrTwo.filter(function (valor, pos) {
    /*console.log("------------");
        console.log("indexOf: " + arrTwo.indexOf(valor));
        console.log("POS: " + pos);
        console.log("ELEMENTO: " + valor);
        console.log(arrTwo.indexOf(valor) === pos);
        console.log("------------");*/
    return arrTwo.indexOf(valor) === pos;
  });

  console.log("El array filtrado: ", filteredArray);
}

eliminarDuplicados([
  "x",
  10,
  "x",
  2,
  "10",
  10,
  true,
  true,
  "like",
  "Like",
  "x",
  "LiKe",
]);

// Solucion Jon Mircha
const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error(
      `El valor ${arr} que ingresaste no es un arreglo valido`
    );
  if (arr.length === 0) return console.error(`El arreglo esta vacio`);
  if (arr.length === 0)
    return console.error(`El elemento debe tener al menos 2 elementos`);

  return console.info({
    original: arr,
    sinDuplicado: arr.filter(
      value,
      index,
      (self) => self.indexOf(value) === index
    ),
  });
};

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
function arregloPromedio(arr = undefined) {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error(
      `El valor ${array} ingresado no es un Array de numeros`
    );
  if (arr.length === 0) return console.error(`El arreglo esta vacio`);

  let suma = 0;
  let cont = 0;
  arr.forEach((element) => {
    suma += arr[cont];
    cont++;
  });

  return console.info("Arreglo: [" + arr + "] Promedio = " + suma / arr.length);
}

arregloPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// Solucion Jon Mircha
const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");
  if (!(arr instanceof Array))
    return console.error(
      `El valor ${arr} que ingresaste no es un arreglo valido`
    );
  if (arr.length === 0) return console.error(`El arreglo esta vacio`);
  if (arr.length === 0)
    return console.error(`El elemento debe tener al menos 2 elementos`);
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado no es un numero`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
