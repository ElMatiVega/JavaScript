// Vamos a ver como crear un enlace
const enlace=document.createElement('a'); 
//el createElement crea el elemento que quiero pasar al DOM y entre () especifico lo que quiero, puede ser un DIV, Parrafo y en este caso un Enlace.

enlace.textContent='Sobre Nosotros';//el textContent me permite generar texto.

//Le podemos ir agregando atributos segun sea necesario.
enlace.href/='/nuevo-enlace';
enlace.target='_blank';
enlace.setAttribute('data-atribute','nuevo-enlace');
// enlace.className('className');
enlace.classList.add('nave');
console.log(enlace)

enlace.onclick=unaFuncion;

//Tenemos que definir donde queremos mostrar el elemento.
//Seleccionar la navegación.
const navegacion= document.querySelector('.navegacion');
//agragamos un hijo al NAV
navegacion.appendChild(enlace);//lo agrega al final


//TAMBIEN LO PODEMOS INSETAR DE FORMA CONTROLADA.
console.log(navegacion.children);//nos da las distintas opsiones para ver donde queremos insertarlo.
navegacion.insertBefore(enlace,navegacion.children[2]);//lleva dos paramentros 1 lo que queremos insertar, 2 donde.

function unaFuncion(){
    alert('Diste click');
}


//CREAR UN CARD DE FORMA DINAMICA.
//paso 1
const parrafo1=document.createElement('p');
parrafo1.textContent='Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2=document.createElement('p');
parrafo2.textContent='Musica Infantil';
parrafo2.classList.add('titulo');
const parrafo3=document.createElement('p');
parrafo3.textContent='$1.500';
parrafo3.classList.add('precio');
console.log(parrafo1);

//Creo el div que contiene estos parrafos ver clase INFO del index.HTML
//paso 2
const info=document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
// es importante el orden de aparicion de los parrafos.

//Crear img
//paso 3
const imagen= document.createElement('img');
imagen.src='./img/Sql.png';
imagen.alt='text alter';

//Crear el CARD perse
//paso 4
const cards= document.createElement('div');
cards.classList.add('card');

//Asignar la imagen
cards.appendChild(imagen);
//paso 5

//Asigno info
//paso6
cards.appendChild(info);


//INSERTAR EN EL HTML
//paso 7
const contenedor= document.querySelector('.hacer .contenedor-cards ');
console.log(contenedor.children);
contenedor.insertBefore(cards, contenedor.children[0]);