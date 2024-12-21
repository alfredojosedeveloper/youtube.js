/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/*console.log(window);
console.log(document);

let texto = "Hola Soy Alfred y estoy aprendiendo JavaScript con Jon Mircha";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);*/

/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** 

console.log("************ Elementos del Documento ***********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);

document.write("<h2>Hola Mundo desde el DOM</h2>");*/

/* **********     Curso JavaScript: 62. DOM: Nodos, Elemmentos y Selectores - #jonmircha     **********
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
//Los tres anteriores han sido reemplazado por dos metodos que son: querySelector() y querySelectorAll()

console.log(document.getElementById("menu"));// En la practica se usan mas estos nuevos metodos
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));//busca todos los enlaces de la pagina
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));*/

/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes  - #jonmircha     ********** 

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
$linkDOM.dataset.description = "Suscribete a mi canal y compartelo";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));*/

/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS  - #jonmircha     ***********

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variebles CSS - Custom Properties CSS
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yelow-color");

console.log(varDarkColor,varYellowColor);
 
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
 varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

 $body.style.setProperty("background-color",varDarkColor);*/

/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** 
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");// con toggle si no existe la clase se agrega y si existe se elimina
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");//agregar mas de dos clases
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");*/

/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** 
const $whatIsDom = document.getElementById("que-es");

let text = `
<p>
  El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;  

$whatIsDom.innerText = text;
$whatIsDom.textContent = text;
$whatIsDom.innerHTML = text;//insertar texto en forma HTML
$whatIsDom.outerHTML = text;*/

/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     **********
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.childNodes);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));*/

/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** 
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");
  const $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://loremflickr.com/g/320/240/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");  
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Forma no tan correcta pero valida para agregar elementos
$figure2.innerHTML = `
<img src="https://loremflickr.com/g/320/240/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

//
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  
  $ul3 = document.createElement("ul");
  $fragment = document.createDocumentFragment();

  meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
  });

  
document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); 
*/

/* **********     Curso JavaScript: 68. DOM: Templates HTML - #jonmircha     ********** 
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  fragment =document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://loremflickr.com/g/320/240/tech",
    },
    {
      title: "Animales",
      img: "https://loremflickr.com/g/320/240/animals",
    },
    {
      title: "Arquitectura",
      img: "https://loremflickr.com/g/320/240/arch",
    },
    {
      title: "Gente",
      img: "https://loremflickr.com/g/320/240/people",
    },
    {
      title: "Naturaleza",
      img: "https://loremflickr.com/g/320/240/nature",
    },
  ];

  cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
  
    let $clone = document.importNode($template, true);  
    fragment.appendChild($clone);
  });
  
  $cards.appendChild(fragment);
*/

/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** 
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

  $newCard.innerHTML = `
  <img src="https://loremflickr.com/g/320/240/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);

//$cards.insertBefore($newCard, $cards.firstElementChild);
//document.body.appendChild($cloneCards);
*/

/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** 

//.insertAdjacent...
  //.insertAdjacentElement(position, el)
  //.insertAdjacentHTML(position, html)
  //.insertAdjacentText(position, text)

//Posiciones:
  //beforebegin(hermano anterior)
  //afterbegin(primer hijo)
  //beforeend(ultimo hijo)
  //afterend(hermano siguiente)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

  //$newCard.innerHTML = `
  //<img src="https://loremflickr.com/g/320/240/any" alt="Any">
  //<figcaption>Any</figcaption>
//`;

  let $contentCard = `
  <img src="https://loremflickr.com/g/320/240/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("afterbegin", $newCard);

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
$cards.after($newCard);
*/

/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha     **********
function holaMundo(){
  alert("Hola Mundo");
  console.log();
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple");


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e) {
  alert("Hola mundo Manejador de Eventos Semantico");
  console.log(e);
  console.log(event);
} 

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
alert("Hola Mundo Manejador de Eventos Multiple");
console.log(e);
console.log(e.type);
console.log(e.target);
console.log(event);
});*/

/* **********     Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     **********
function saludar(nombre = "Desconocid@"){
  alert(`Hola ${nombre}`);
  console.log(event);
}

$eventoMultiple = document.getElementById("evento-multiple");
$eventoRemover = document.getElementById("evento-remover");

$eventoMultiple.addEventListener("click", () => {
  saludar("Alfred");
});

const removerDobleClick = (e) =>{
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick",removerDobleClick);
  $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);*/

/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** 

// Si no se especifica el parámetro boolean, el valor por defecto es false.
// Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
// Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,//se usa once para que el evento se ejecute una sola vez
  });
});*/ 

/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     **********

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
console.log(
  `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
);
e.stopPropagation();
}

//console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
  e.preventDefault();
  e.stopPropagation();
});*/

/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** 

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
console.log(
  `Hola te saluda ${this}, el click lo originó ${e.target.className}`
);
//e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("Clic en ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    //e.preventDefault();
    //e.stopPropagation();
  }
});*/

/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** 

//El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.
//El evento load se dispara cuando se ha detectado la carga completa de la página.
// Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

// Peticiones asíncronas pausan el parseo del DOM.
window.addEventListener("resize", (e) => {
console.clear();
console.log(window.innerWidth);//Referencia al ancho del Viewport de nunestra ventana
console.log(window.innerHeight);
console.log(window.outerWidth);//Tamaño de la ventana de nuestro navegador
console.log(window.outerHeight);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(e);
})

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});*/

/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** 
window.alert("Alerta");
window.confirm("Confirmación");
window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

  let ventana;

  $btnAbrir.addEventListener(
    "click",
    (e) => (ventana = window.open("https://jonmircha.com"))
  );
  
  $btnCerrar.addEventListener("click", (e) => {
    //window.close();
    ventana.close();
  });
  
  $btnImprimir.addEventListener("click", (e) => window.print());*/

/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
/*console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();//Tener cuidado por que puede desbordar la memoria del navegador

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);//Hace lo mismo que el back y el forward solo que maneja numeros positivos para ir hacia adelante y numeros negativos para ir hacia atras
//history.back(2);

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);*/   










