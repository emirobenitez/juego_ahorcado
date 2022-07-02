var botonAdicionar = document.querySelector("#adcionar-nueva-palabra");

var info_palabra = document.querySelector("#info_palabra");
// console.log(info_palabra);

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var palabra = capturarDatosPalabra(form);
    //var palabraTr = construirTr(palabra);

    var errores = validarPalabra(palabra);
    

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }else{
        /* Agrega palabra al Array palabras palabras_array */
        palabras_array.push(input_nueva_palabra.value);
        console.log(palabras_array);
        genera_tabla();
        //table.reset();
    }

    //var tabla = document.querySelector("#tabla-palabras");

    //tabla.appendChild(palabraTr);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";


});

function capturarDatosPalabra(form){
    //capturando los datos del formulario
    var palabra = {
        input_nueva_palabra: form.input_nueva_palabra.value,
    }

    return palabra;
}
    
/*
function construirTr(palabra){

    var palabraTr = document.createElement("tr");
    palabraTr.classList.add("palabra");

    palabraTr.appendChild(construirTd(palabra.input_nueva_palabra, "info-nombre"));

    return palabraTr
}
*/
/*
function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}
*/
function validarPalabra(palabra){
    var errores = []

    if(palabra.input_nueva_palabra.length == 0){
        errores.push("La palabra no puede ser vacío");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

