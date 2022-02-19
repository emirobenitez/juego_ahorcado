/* --------------------------------------------- */
// AREA DE VARIABLES
/* --------------------------------------------- */
var ctrtecla;
var letra = '';
var palabra = 'AGUACATE';
var letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var colorTecla = "#585858";
var colorMargen = "red";

var palabraOculta = '';
var inicioX = 200;
var inicioY = 300;
var lon = 35;
var margen = 20;
var pistaText = "";

var emoticon = ['', '&#128528;', '&#128533;', '&#128534;', '&#128563;', '&#128543;', '&#128531;', '&#128561;', '&#128549;', '&#128560;', '&#128557;'  ]
var emoticons ;
// var textEmoticons = 'Hola como estas?';

var textEmois = [ '',
                  '! Oh te equivocastes !', 
                  '! Has fallado nueva mente !', 
                  'No puede ser, !has fallado otravez!', 
                  '! Concentrate.. ¡', 
                  '! Concentrate.. ¡, No te rindas',
                  '! Concentrate.. ¡, calmate y piensa',
                  '! Empieza a preocuparte ...¡',
                  'Ya casi pierdes !!',
                  'No puede ser, !perdisteees!'
                  ];

//console.log(textEmoticons[0]);
var intentos = 0;
var gano = false;
var perdio = false;



/* --------------------------------------------- */
/* Arreglos */
/* --------------------------------------------- */
var teclas_array = new Array();
var letras_array = new Array();
var palabras_array = new Array();

/* Variables de control */
var aciertos = 0;
var errores = 0;

/* --------------------------------------------- */
/* Inicializando Objetos HTML
/* --------------------------------------------- */

var btnIniciaJugar = document.querySelector('#iniciar-juego');
var emoticons = document.querySelector("#emoticons");
var textEmoticons = document.querySelector("#textEmoticons");

btnIniciaJugar.addEventListener("click",function(event){
   event.preventDefault();

});
/* --------------------------------------------- */
/* Objetos */
/* --------------------------------------------- */
function Tecla(x, y, ancho, alto, letra){
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.letra = letra;
  this.dibuja = dibujaTecla;
}

function Letra(x, y, ancho, alto, letra){
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.letra = letra;
  this.dibuja = dibujaCajaLetra;
  this.dibujaLetra = dibujaLetraLetra;
}


/* --------------------------------------------- */
/* Funciones */
/* --------------------------------------------- */

/* Dibujar Teclas*/
function dibujaTecla(){
  ctrtecla.fillStyle = colorTecla;
  ctrtecla.strokeStyle = colorMargen;
  ctrtecla.fillRect(this.x, this.y, this.ancho, this.alto);
  ctrtecla.strokeRect(this.x, this.y, this.ancho, this.alto);

  ctrtecla.fillStyle = "white";
  ctrtecla.font = "bold 20px courier";
  ctrtecla.fillText(this.letra, this.x+this.ancho/2-5, this.y+this.alto/2+5);
}

/* Dibua la letra y su caja */
function dibujaLetraLetra(){
  var w = this.ancho;
  var h = this.alto;
  ctrtecla.fillStyle = "black";
  ctrtecla.font = "bold 40px Courier";
  ctrtecla.fillText(this.letra, this.x+w/2-12, this.y+h/2+14);
}
function dibujaCajaLetra(){
  ctrtecla.fillStyle = "white";
  ctrtecla.strokeStyle = "black";
  ctrtecla.fillRect(this.x, this.y, this.ancho, this.alto);
  ctrtecla.strokeRect(this.x, this.y, this.ancho, this.alto);
}


/* Distribuir nuestro teclado con sus letras respectivas al acomodo de nuestro array */
function teclado(){
  var ren = 0;
  var col = 0;
  var letra = "";
  var miLetra;
  var x = inicioX;
  var y = inicioY;
  for(var i = 0; i < letras.length; i++){
    letra = letras.substr(i,1);
    miLetra = new Tecla(x, y, lon, lon, letra);
    miLetra.dibuja();
    teclas_array.push(miLetra);
    x += lon + margen;
    col++;
    if(col==10){
      col = 0;
      ren++;
      if(ren==2){
        x = 280;
      } else {
        x = inicioX;
      }
    }
    y = inicioY + ren * 50;
  }
}



/* aqui obtenemos nuestra palabra aleatoriamente y la dividimos en letras */
function pintaPalabra(){
  //var p = Math.floor(Math.random()*palabras_array.length);
  //palabra = palabras_array[p];

  //pistaFunction(palabra);
    var w = canvas.width;
    var len = palabra.length;
    var ren = 0;
    var col = 0;
    var y = 230;
    var lon = 50;
    var x = (w - (lon+margen) *len)/2;
    for(var i=0; i<palabra.length; i++){
      letra = palabra.substr(i,1);
      miLetra = new Letra(x, y, lon, lon, letra);
      miLetra.dibuja();
      letras_array.push(miLetra);
      x += lon + margen;
    }
}

/* dibujar cadalzo y partes del pj segun sea el caso */
function horca(errores){
  var imagen = new Image();
  imagen.src = "images/ahorcado"+errores+".png";
  
  imagen.onload = function(){
    // ctrtecla.drawImage(imagen, 390, 0, 230, 230);
    ctrtecla.drawImage(imagen, 350, 0, 200, 220);
  }
//console.log(horca(errores));


  var intentos = document.querySelector("#intentos");
  intentos.innerHTML = errores + ' de 9';
  //console.log(errores);
  


function estilosEmoticons (){
  var styleEmoticons = document.getElementById("emoticons");
  styleEmoticons.style.color = "#FF0000";
  // styleEmoticons.style.font.size = "120px";
  emoticons.innerHTML = emoticon[errores] ;
}
estilosEmoticons();




function textIcon(){
  var styleEmoticons = document.getElementById("textEmoticons");
  styleEmoticons.style.color = "#FF0000";
  // styleEmoticons.style.font.size = "120px";
  textEmoticons.innerHTML = textEmois[errores] ;
}

console.log(textIcon() );


  /*************************************************
  // Imagen 2 mas pequeña a un lado de la horca //
  var imagen = new Image();
  imagen.src = "imagenes/ahorcado"+errores+".png";
  imagen.onload = function(){
    ctrtecla.drawImage(imagen, 620, 0, 100, 100);
  }
  *************************************************/
}
/* ajustar coordenadas */
function ajusta(xx, yy){
  var posCanvas = canvas.getBoundingClientRect();
  var x = xx-posCanvas.left;
  var y = yy-posCanvas.top;
  return{x:x, y:y}
}


/* Detecta tecla clickeada y la compara con las de la palabra ya elegida al azar */
function selecciona(e){
  var pos = ajusta(e.clientX, e.clientY);
  var x = pos.x;
  var y = pos.y;
  var tecla;
  var bandera = false;
  for (var i = 0; i < teclas_array.length; i++){
    tecla = teclas_array[i];
    if (tecla.x > 0){
      if ((x > tecla.x) && (x < tecla.x + tecla.ancho) && (y > tecla.y) && (y < tecla.y + tecla.alto)){
        break;
      }
    }
  }
  if (i < teclas_array.length){
    for (var i = 0 ; i < palabra.length ; i++){
      letra = palabra.substr(i, 1);
      if (letra == tecla.letra){ /* comparamos y vemos si acerto la letra */
        caja = letras_array[i];
        caja.dibujaLetra();
        aciertos++;
        bandera = true;
      }
    }
    if (bandera == false){ /* Si falla aumenta los errores y checa si perdio para mandar a la funcion gameover */
      errores++;
      horca(errores);
      if (errores === 9) gameOver(errores);
    }
    /* Borra la tecla que se a presionado */
    ctrtecla.clearRect(tecla.x - 1, tecla.y - 1, tecla.ancho + 2, tecla.alto + 2);
    tecla.x - 1;
    /* checa si se gano y manda a la funcion gameover */
    if (aciertos == palabra.length) gameOver(errores);
  }
}

/* Borramos las teclas y la palabra con sus cajas y mandamos msj segun el caso si se gano o se perdio */
function gameOver(errores){
  ctrtecla.clearRect(0, 0, canvas.width, canvas.height);
  ctrtecla.fillStyle = "black";

  ctrtecla.font = "bold 40px Roboto-Light";
  if (errores < 5){
    ctrtecla.fillText("Muy bien, la palabra es: ", 110, 280);
  } else {
    ctrtecla.fillText("Lo sentimos, Perdístes!!, la palabra era: ", 110, 280);
  }

  ctrtecla.font = "bold 80px Courier";
  lon = (canvas.width - (palabra.length*48))/2;
  ctrtecla.fillText(palabra, lon, 380);
  horca(errores);
}



/* Detectar si se a cargado nuestro contexco en el canvas, iniciamos las funciones necesarias para jugar o se le manda msj de error segun sea el caso */
window.onload = function(){
  canvas = document.getElementById("pantalla");
  if (canvas && canvas.getContext){
    ctrtecla = canvas.getContext("2d");
    if(ctrtecla){
      teclado();
      pintaPalabra();
      horca(errores);
      canvas.addEventListener("click", selecciona, false);
    } else {
      alert ("Error al cargar el contexto!");
    }
  }
}



