let usuario1

// Función de bienvenida al usuario a la página
function welcome() {
  
  // Se adquiere el nombre del usuario
  const NOMBRE = prompt(
    "Bienvenido a TuPrevia, por favor ingresa tu nombre:"
  );

  // Se adquiere la edad del usuario y se verifica que el dato sea válido
  let EDAD = prompt(
    "Por favor ingresa tu edad:"
  );

  let esNumero = false;

  while (!esNumero) {
    if (!isNaN(EDAD) && EDAD > 17 && EDAD < 120) {
      esNumero = true;
      console.log("¡Salgamos de joda!");
    } else {
      EDAD = prompt("Su edad no es suficiente para poder ingresar, ingrese la edad de algun mayor");
    }
  }

  // Se adquiere el talle de calzado del usuario y se verifica que el dato sea válido
  let TALLE = prompt(
    "Por favor ingresa la cantidad de gente para la previa:"
  );

  esNumero = false;

  while (!esNumero) {
    if (!isNaN(TALLE) && TALLE > 0 && TALLE < 1000) {
      esNumero = true;
      console.log("¡Contamos con el stock para cumplir con tu previa!");
    } else {
      TALLE = prompt("No contamos con el stock necesario para podes ayudarlo:");
    }
  }

  // Se adquiere el correo electrónico del usuario y se verifica que el dato sea válido
  let CORREO = prompt(
    "Por favor ingresa tu correo electrónico:"
  );
  let esCorreoValido = false;

  while (!esCorreoValido) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexCorreo.test(CORREO)) {
    esCorreoValido = true;
    console.log("¡Se ingresó un correo electrónico válido!");
  } else {
    CORREO = prompt("No se ingresó un correo electrónico válido. Inténtelo nuevamente:");
  }
}


  // Clase constructora para almacenar datos del usuario

  class userCreator {
    constructor(nombre, edad, talle, correo) {

      this.nombre = nombre;
      this.edad = edad;
      this.talle = talle;
      this.correo = correo;

      }
  }
  
  usuario1 = new userCreator(NOMBRE,EDAD,TALLE,CORREO);
  console.log(usuario1);

  // Muestra los datos ingresados
  ingresedData(usuario1);

  // Llama a la función con el mensaje de bienvenida
  welcomeMessage(usuario1.nombre);

}

// Muestra los datos cargados por el usuario
function ingresedData(usuario1) {
  alert(
    '- Nombre: ' + usuario1.nombre +
    '\n- Edad: ' + usuario1.edad +
    '\n- Invitados: ' + usuario1.talle +
    '\n- Correo: ' + usuario1.correo 
  );
}

// Brinda un mensaje de bienvenida el sitio
function welcomeMessage(usuario1) {
  alert(
      '!Bienvenido a TuPrevia, te mostraremos un catalogo de bebidas con la que vas a poder hacer tuprevia,esperamos que lo pases super bien y lisfrutes de TuPrevia  (Presiona "OK")'
  );
}

// Función para mostrar las opciones del menú en la consola
function displayMenu() {

  // Array con los elementos del menú
  const elementos = [
    "Elija el factor a tener en cuenta (ingrese el número deseado):",
    "1. Fernet",
    "2. Wodka",
    "3. Fernet y wodka",
    "4. presupuesto",
    "5. Salir"
  ]; 
  // Recorrer el array utilizando un bucle for
  for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
  }
}

// Función para manejar el input del usuario y ejecutar la opción seleccionada
function handleInput(option, usuario1) {

  switch (option) {
    case "1":
      console.log("Opción 1 seleccionada");
      alert(
        "Excelente eleccion, te pondremos unos cuartetasos y a disfrutar de TuPrevia"
      );
      break;
    case "2":
      console.log("Opción 2 seleccionada");
      alert(
        "Excelente eleccion, vodka bien russo, y aspero para entonar la noche"
      );
      break;
    case "3":
      console.log("Opción 3 seleccionada");
      alert(
        "Excelente convinacion, todo para todos los gustos"
      );
      break;
    case "4":
      console.log("Opción 4 seleccionada");
      let presupuesto = prompt(
        "Ingrese el presupuesto que pretende gastar (En dólares):"
      );
      if( presupuesto <= 89){
        alert(
          "recomendamos que eliga un solo producto ya que cada botella esta 45u$s  \n\n" +
          "Presupuesto restante U$D " + (presupuesto - 45)
        );
      }else if(presupuesto > 89 && presupuesto <= 134){
        alert(
          "Recomendamos comprar La Sportiva Finale por U$D 137 \n\n" +
          "Presupuesto restante U$D " + (presupuesto - 90)
        );
        
      }else if(presupuesto > 134 ){
        alert(
          "Recomendamos comprar de 3 botellas de su eleccion por 135 \n\n" +
          " Presupuesto restante U$D " + (presupuesto - 135) +
          "Si cuenta con mas dinero podra comprarse las botellas que usted quiera con un 10% de descuento"
        );
        
      }else {
        alert(
          "Introduzca un valor numérico válido"
        );
      }
      break;
    case "5":
      console.log(usuario1);
      alert(
        "Enviaremos información de los gastos a tu correo: '" + usuario1.correo + "'"
      );
      console.log("Saliendo...");
      return;
    default:
      console.log("Opción invalida, por favor intentelo nuevamente.");
  }

  // Preguntar por la siguiente opción
  askOption();
}

// Función para solicitar la entrada del usuario mediante un prompt
function askOption() {
  const option = prompt(
    "Elija la opcion que mas desee (ingrese el número deseado):\n\n" +
      "1. Fernet\n"+
      "2. Wodka\n"+
      "3. Fernet y wodka\n"+
      "4. Presupuesto\n"+
      "5. Salir\n"
  );

  handleInput(option, usuario1);
}

// Llame a la función de bienvenida
welcome();
// Llame a la función displayMenu para mostrar el menú inicial
displayMenu();
// Pregunta por la primera opción
askOption();