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

/* **********     Curso JavaScript: 63. Atributos y Data-Attributes  - #jonmircha     ********** 

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

/* **********     Curso JavaScript: 64. Atributos y Data-Attributes  - #jonmircha     ********** 

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

/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */















