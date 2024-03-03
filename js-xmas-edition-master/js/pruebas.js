
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Favor de elegir una ciudad',
        'Validar ciudad no validó que la ciudad fuera escogida'
    )
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Favor de ingresar el regalo que deseas',
        'Validar ciudad no validó que el regalo fuera ingresado'
    )

    console.assert(
        validarDescripcionRegalo(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
        'Santa no le trae regalos a los ninos avariciosos',
        'Validar ciudad no validó que ingresaran menos de 100 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('@#@#$%$%#$~$^&*^') === 'Este campo solo acepta letras y numeros',
        'Validar ciudad no validó que ingresaran solo letras y numeros'
    )
}


probarValidarDescripcionRegalo()