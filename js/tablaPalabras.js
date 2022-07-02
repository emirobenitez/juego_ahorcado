
/* --------------------------------------------- */
/*      MOSTRAR ARRAY PALABRAS                   */
/* --------------------------------------------- */

var info_palabra = document.querySelector("#info_palabra");
// console.log(info_palabra);


function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las tds
  for (var i = 0; i < palabras_array.length; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var td = document.createElement("td");
      var textoCelda = document.createTextNode(palabras_array[i]);
	  //info_palabra.innerHTML = textoCelda;
	  
      td.appendChild(textoCelda);
      hilera.appendChild(td);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "1");
  tblBody.setAttribute("border", "1");
  tblBody.setAttribute("color", "red");
  
}
genera_tabla();


/* --------------------------------------------- */
/*      MOSTRAR ARRAY PALABRAS                   */
/* --------------------------------------------- */

var btnOcultar_palabras = document.querySelector("#ocultar_palabras");
 //console.log(ocultar_palabras);

btnOcultar_palabras.addEventListener("click",function(event){
  event.preventDefault();

  tblBody.setAttribute("style.display", "none");

  function ocultar() {
    document.getElementById('info_palabra').style.display = 'none';
    return true;
  }

ocultar();
});