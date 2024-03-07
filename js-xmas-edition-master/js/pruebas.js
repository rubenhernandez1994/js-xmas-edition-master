function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  
    console.assert(
      validarNombre('123123') === 'El campo solo acepta letras',
      'Validar nombre no validó que el nombre solo tuviera letras'
    )
  
    console.assert(
      validarNombre('fabricio') === '',
      'Validar nombre no funcionó con un nombre válido'
    )
  }
  
  function probarValidarCiudad(){
      console.assert(
          validarCiudad('') === 'Favor de elegir una ciudad',
          'Validar ciudad no validó que se haya seleccionado una ciudad'
      );
  
      console.assert(
          validarCiudad('salta') === '',
          'Validar ciudad no funcionó con una ciudad valida'
      );
  }
  
  function probarValidarDescripcionRegalo(){
      console.assert(
          validarDescripcionRegalo('') === 'Favor de ingresar el regalo que deseas',
          'Validar descripción regalo no validó que la descipción no este vacía');
  
      console.assert(
          validarDescripcionRegalo(
              '1111111111111111erwrewerwer1111111111111111111111fdsfdssdfgwe111111111111111111111111111111rtertergtyfgdhbfdhb1111111111111111111111111111111111111') ===
          'Santa no le trae regalos a los ninos avariciosos',
          'Validar descripción regalo no validó que la descripción sea menor a 100 caracteres',
      );
  
      console.assert(
          validarDescripcionRegalo('++++-_+*') === 'Este campo solo acepta letras y numeros',
          'Validar descripcion regalo no validó que la descripción contenga letras y numeros'
      );
  
      console.assert(
          validarDescripcionRegalo('patineta') === '',
          'Validar descripcion regalo no funcionó con una descripción valida'
      )
  }
  
  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionRegalo();