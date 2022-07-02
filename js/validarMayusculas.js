// Dar foco a un campo de texto  inmediatamente se carga
/*
window.onload = function() {
    document.getElementById("input_nueva_palabra").focus();
  };
*/
  // funcion para validar solo minusculas, ni especiales, ni numeros
  function  soloMayusculas(e)
  {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Z";
  
  //especiales = [8,13,164];
  especiales = [164];
  tecla_especial = false
  for(var i in especiales) {
  if(key == especiales[i]){
   tecla_especial = true;
   break;
  }
  }
  
  if(letras.indexOf(tecla) == -1 && !tecla_especial)
  {
   alert("Ingresar solo letras mayúsculas, sin tildes");
   return false;
  }
  }