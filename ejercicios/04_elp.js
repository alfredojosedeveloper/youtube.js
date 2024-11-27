//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function convertirBinDecViceversa(numero = undefined, base = undefined) {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado no es un numero`);
  if (base === undefined) return console.warn("No ingresaste base a convertir");
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresado no es un numero`);
  if (!/(2|10)/.test(base)) return console.warn("La base debe ser 2 o 10");

  numero = numero.toString();
  if (base === 2) {//validacion si la base es 2 y que numero sea 0 o 1
    for (let i = 0; i < numero.length; i++) {
      if (
        parseInt(numero.charAt(i), 10) > 0 &&
        parseInt(numero.charAt(i), 10) > 1
      ) {
        return console.log(`El numero ${numero} solo admite valores base 2`);
      }
    }
  }

  sumaDecimal = 0;
  let numOrig = numero;
  if (base === 2) {
    //Convertir binario a decimal
    for (let i = 0; i < numero.length; i++) {
      sumaDecimal += numero.charAt(i) * Math.pow(2, numero.length - (i + 1));
    }
  } else if (base === 10) {
    //Convertir decimal a binario
    let cadena = "";
    while (numero > 0) {
      if (numero % 2 === 0) {
        cadena = "0" + cadena;
      } else {
        cadena = "1" + cadena;
      }
      numero = Math.floor(numero / 2);
    }
    return console.log(`El valor ${numOrig} base 10 = ${cadena} base 2: `);
  }

  return console.log(`El valor ${numOrig} base 2 = ${sumaDecimal} base 10`);
}

convertirBinDecViceversa(100, 2);
convertirBinDecViceversa(100010100000110, 2);
convertirBinDecViceversa(70600, 10);
convertirBinDecViceversa(1000901, 2);
convertirBinDecViceversa(1000, 2);

// Solucion Jon Mircha
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste el numero a convertir");
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} ingresado no es un numero`);
  if (base === undefined) return console.warn("No ingresaste base a convertir");
  if (typeof base !== "number")
    return console.error(`El valor ${base} ingresado no es un numero`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, 2)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
  } else {
    return console.error("El tipo de base a convertir no es valido");
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(101, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function aplicaDescuento(cantidad = undefined, descuento = undefined) {
  if (cantidad === undefined) return console.warn("No ingresaste un numero");
  if (typeof cantidad !== "number")
    return console.error(`El valor ${numero} ingresado no es un numero`);
  if (descuento === undefined)
    return console.warn("No ingresaste descuento a aplicar");
  if (typeof descuento !== "number")
    return console.error(`El valor ${base} ingresado no es un numero`);

  return console.log(`${cantidad} - ${descuento}% = $${cantidad - (descuento * cantidad) / 100}`);
}

aplicaDescuento(28000, 20);
aplicaDescuento(1000, 0);

// Solucion Jon Mircha
const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el monto");
  if (typeof monto !== "number")
    return console.error(`El valor ${monto} ingresado no es un numero`);
  if (monto === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(monto) === -1)
    return console.warn("El monto no puede ser negativo");
  if (typeof descuento !== "number")
    return console.error(`El valor ${descuento} ingresado no es un numero`);
  if (Math.sign(descuento) === -1)
    return console.warn("El descuento no puede ser negativo");

  return console.info(
    `$${monto} - ${descuento}% = $${monto - (monto * descuento) / 100}`
  );
};

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
function calculateAge(birthday) {
  var nacimiento_arr = birthday.split("/");
  var fecha_nac = new Date(
    nacimiento_arr[2],
    nacimiento_arr[1] - 1,
    nacimiento_arr[0]
  );
  var edadDifMs = Date.now() - fecha_nac.getTime();
  var edadFecha = new Date(edadDifMs);
  return console.log( "Han pasado " + (Math.abs(edadFecha.getUTCFullYear() - 1970)) + " años desde " + birthday);
}

var age = calculateAge("27/10/1992");

// Solucion Jon Mircha
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.error(
      `El valor ${fecha} que ingresaste no es una fecha valida`
    );

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1992, 10, 27));
calcularAnios(new Date(2084, 10, 27));
