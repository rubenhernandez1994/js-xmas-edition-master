function validarNombre(nombre) {
    if(nombre.length === 0) {
     return 'Este campo debe tener al menos un caracter'  
    }
 
    if(nombre.length >= 50) {
     return 'Este campo debe tener menos de 50 caracteres'   
    }
 
    if(!/^[a-z]+$/i.test(nombre)) {
       return "El campo solo acepta letras"
    }
 
  return '';   
 }
 
 function validarCiudad(ciudad){
    if(ciudad.length === 0){
       return 'Favor de elegir una ciudad'  
    }
   
    return '';   
 }
  
 function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
       return 'Favor de ingresar el regalo que deseas'  
    }else if(descripcionRegalo.length >= 100){
       return  'Santa no le trae regalos a los ninos avariciosos'
    }else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
       return 'Este campo solo acepta letras y numeros';
    }else {
       return '';
    }
 }
 
 function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa"); 
 
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;
 
    const errorNombre = validarNombre(nombre); 
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)
    
    const errores = {
       "descripcion-regalo" : errorDescripcionRegalo,
       ciudad: errorCiudad,
       nombre: errorNombre
    };
 
    const esExito = manejarErrores(errores) === 0;
 
    if(esExito){
       $form.className = 'oculto';
       document.querySelector('#exito').className = '';
    }
    
    event.preventDefault();
 }
 
 function manejarErrores (errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    const cantidadErrores = 0;
 
    keys.forEach(function(key){
       const error = errores[key];
 
       if(error){
          cantidadErrores++;
          $form[key].className = "error"
 
          const $error = document.createElement('li');
          $error.innerText = error;
          $errores.appendChild($error);
       }else{
          $form[key].className = ""
       }
    });
    
    return cantidadErrores;
 }
 
 const $form = document.querySelector("#carta-a-santa"); 
 $form.onsubmit= validarFormulario;