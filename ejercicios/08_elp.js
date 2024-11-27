//27) Programa una clase llamada Pelicula.

/*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  *- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  *- Valida que el título no rebase los 100 caracteres.
  *- Valida que el director no rebase los 50 caracteres.
  *- Valida que el año de estreno sea un número entero de 4 dígitos.
  *- Valida que el país o paises sea introducidos en forma de arreglo.
  *- Valida que los géneros sean introducidos en forma de arreglo.
  *- Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  *- Crea un método estático que devuelva los géneros aceptados*.
  *- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  *- Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {
  constructor({
    idPeliculaIMDB,
    titulo,
    director,
    anioEstreno,
    paisesOrigen,
    generos,
    calificacionIMDB,
  }) {
    //Atributos
    this.idPeliculaIMDB = idPeliculaIMDB;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.paisesOrigen = paisesOrigen;
    this.generos = generos;
    this.calificacionIMDB = calificacionIMDB;

    this.validarIdIMDB(idPeliculaIMDB);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarAnioEstreno(anioEstreno);
    this.validarPaisesOrigen(paisesOrigen);
    this.validarGeneros(generos);
    this.validarCalificacionIMDB(calificacionIMDB);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado no es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos ${longitud}`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(`${propiedad} "${valor}" ingresado no es un numero`);

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado no es un arreglo`
      );
    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor ${cadena} ingresado no es una cadena de texto`
        );
    }

    return true;
  }

  validarIdIMDB(idPeliculaIMDB) {
    if (this.validarCadena("IMDB id", idPeliculaIMDB)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(idPeliculaIMDB)) {
        return console.error(
          `IMDB id "${idPeliculaIMDB}" no es valido, debe tener 9 caracteres, los primeros 2 letras minusculas, los 7 restantes numeros`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarAnioEstreno(anioEstreno) {
    if (this.validarNumero("Año de estreno", anioEstreno)) {
      if (!/^([0-9]){4}$/.test(anioEstreno)) {
        return console.error(
          `El año de estreno "${anioEstreno}" no es valido, debe ser un numero de 4 digitos`
        );
      }
    }
  }

  validarPaisesOrigen(paisesOrigen) {
    this.validarArreglo("Pais(es) de origen", paisesOrigen);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos ${generos.join(", ")}`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacionIMDB(calificacionIMDB) {
    if (this.validarNumero("Calificacion IMDB", calificacionIMDB)) {
      return calificacionIMDB < 0 || calificacionIMDB > 10
        ? console.error("La calificacion tiene que estar en un rango de 0 a 10")
        : (this.calificacionIMDB = calificacionIMDB.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.anioEstreno}"\nPais(es): "${this.paisesOrigen}"\nGenero(s): "${this.generos}"\nCalificacion IMDB: "${this.calificacionIMDB}"\nIMDB id: "${this.idPeliculaIMDB}"`
    );
  }
} // fin de la clase Pelicula

/*const pelicula = new Pelicula({
idPeliculaIMDB: "tt1234567",
titulo: "El señor de los anillos: La comunidad del anillo",
director: "Peter Jackson",
anioEstreno : 2001,
paisesOrigen : ["Estados Unidos","Reino Unido","Nueva Zelanda"],
generos: ["Fantasy", "Adventure"],
calificacionIMDB : 9.86
});*/

//pelicula.fichaTecnica();

const argPeliculas = [
  {
    idPeliculaIMDB: "tt1234567",
    titulo: "El señor de los anillos: La comunidad del anillo",
    director: "Peter Jackson",
    anioEstreno: 2001,
    paisesOrigen: ["Estados Unidos", "Reino Unido", "Nueva Zelanda"],
    generos: ["Fantasy", "Adventure"],
    calificacionIMDB: 9.77,
  },
  {
    idPeliculaIMDB: "tt1234568",
    titulo: "El señor de los anillos: Las dos torres",
    director: "Peter Jackson",
    anioEstreno: 2002,
    paisesOrigen: ["Estados Unidos", "Reino Unido", "Nueva Zelanda"],
    generos: ["Fantasy", "Adventure"],
    calificacionIMDB: 9.88,
  },
  {
    idPeliculaIMDB: "tt1234569",
    titulo: "El señor de los anillos: El retorno del rey",
    director: "Peter Jackson",
    anioEstreno: 2003,
    paisesOrigen: ["Estados Unidos", "Reino Unido", "Nueva Zelanda"],
    generos: ["Fantasy", "Adventure"],
    calificacionIMDB: 9.99,
  },
];

argPeliculas.forEach((el) => new Pelicula(el).fichaTecnica());
