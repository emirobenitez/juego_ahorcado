var btnInicio = document.querySelector('#iniciar-juego');
//console.log('boton btnInicio:'+ btnInicio);

var btnLetras = document.querySelector('#letras');
//console.log('boton letras:'+ btnLetras);

const div = document.createElement("div");

var palabra = document.getElementById('#btnInicio');

//var puntos = document.getElementByClassName(puntos)

letra = '';
palabra = 'AGUACATE';
palabraOculta = '';
palabraOculta = '_ '.repeat(palabra.length);
//console.log(palabraOculta);

letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

btnInicio.addEventListener("click",function(event){
    event.preventDefault();

    document.getElementById("palabraOculta").innerHTML = palabraOculta;
    //console.log(palabraOculta);


   // Comprobar letra
   function comprobar(letra){
      const palabraOcultaARR = palabraOculta.split(' ');
      //let palabraOcultaARR = palabraOculta.split(',');
   }
    //console.log(comprobar(palabraOculta));

/*
btnLetras.addEventListener("click",function(event){
    event.preventDefault();
*/
  function mostrarLetras(letras) {
    for (var i = 0; i < letras.length; i++) {
      console.log(i.value);
      //document.querySelector("#letras").innerHTML = div.textContent. = letras;
      //btnLetras.innerHTML = letras.sort().join(" ");
      const node = document.createElement("div");
      const textnode = document.createTextNode(letras[i]);
      node.appendChild(textnode);
      document.getElementById("letras").appendChild(node);

      for (var x = 0; x < palabra.length; x++) {
      if (palabra[x] == letra) {
         cadena += letra + " "
         flag = true
      } else
         cadena += letrasCadena[x] + " "
   }

      //document.getElementsByClassName("letras")[i] = letras;
      //letra = document.getElementById(letras[i]).repeat(letras[i]);

    }


}
    //console.log(mostrarLetras(letras));
    mostrarLetras(letras);
    console.log(letras);


/*
const fragment = document.createDocumentFragment();

function mostrarLetras(letras) {

      for (let i = 0; i < letras.length; i++) {
        const div = document.createElement("div");
        div.textContent = `${letras[i]}`;
        fragment.appendChild(div);

      }

      document.body.appendChild(fragment);
}
mostrarLetras(letras);

*/



/*
function myFunction(letras) {
  for (let i = 0; i < letras.length; i++) {
    const node = document.createElement("div");
    const textnode = document.createTextNode(`${letras[i]}`);
    node.appendChild(textnode);

    document.getElementById("letras").appendChild(node);
  }
}
myFunction(letras);
*/

/*
function myButtom(letras) {
    const node = document.createElement("div");
    const textnode = document.createTextNode(letras);
    node.appendChild(textnode);
    document.getElementById("letras").appendChild(node);
}
console.log(myButtom);
*/


/*
//function mostrarLetras(letras) {

letras.forEach(function(elemento, indice, array) {
  //btnLetras.innerHTML = elemento;
  // btnLetras.letras.value = elemento;
  // btnLetras = document.createElement(elemento);
  // btnLetras.classList.add(letras);

  //console.log(elemento);
//})//


    /*
       document.querySelector("#letras").innerHTML =
          letras.sort().join(" ");
          for (var i = 0; i < letras.length; i++) btnInicio += letras[i];
              document.getElementById(letras).innerHTML = letras;

    }


     //console.log(mostrarLetras(letras));
     mostrarLetras(letras);
*/
//document.body.innerHTML = "";
//document.getElementById(id).innerHTML = nuevo HTML
//paciente.classList.add("paciente-incorrecto");

});


    intentos = 0;

    gano = false;
    perdio = false;




  // busco colocar la cantida de _ igual que palabra oculta
 /*  function rplPalabraOculta(palabra){
      return palabraOculta='_'.repeat(palabra.length);
  }
  // console.log(rplPalabraOculta(palabra));
*/


    /*
        constructor() {
          this.palabraOculta = '_ '.repeat( this.palabra.length );

        }

        comprobar( letra ) {

          this.existeLetra(letra);

          const palabraOcultaArr = this.palabraOculta.split(' ');

          for ( let i = 0; i < this.palabra.length; i ++ ) {

            if ( this.palabra[i] === letra ) {
              palabraOcultaArr[i] = letra;
            }

          }

          this.palabraOculta = palabraOcultaArr.join(' ');
          this.verificaGane();

        }

        verificaGane() {

          const palabraArr = this.palabraOculta.split(' ');
          const palabraEvaluar = palabraArr.join('');

          if ( palabraEvaluar === this.palabra ) {
            this.gano = true;
            console.log('Usuario GANO');
          }

          if ( this.intentos >= 9 ) {
            this.perdio = true;
            console.log('Usuario perdio');
          }

        }


        existeLetra( letra ) {

          if ( this.palabra.indexOf( letra ) >= 0  ) {
            // console.log('Letra existe ' + letra );
          } else {
            // console.log('Letra NO existe ' + letra );
            this.intentos ++;
          }

        }

      }

*/

    //