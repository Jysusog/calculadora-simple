function calculadora() {
    // Pide al usuario el primer número
    var num1 = prompt("Introduce el primer número");
  
    // Si el usuario cancela el diálogo, detén la función
    if (num1 === null) {
      return;
    }
  
    // Convierte el valor del primer número en un número decimal
    num1 = parseFloat(num1);
  
    // Pide al usuario la operación a realizar
    var operacion = prompt("Introduce la operación (+, -, * o /)");
  
    // Si el usuario cancela el diálogo, detén la función
    if (operacion === null) {
      return;
    }
  
    // Pide al usuario el segundo número
    var num2 = prompt("Introduce el segundo número");
  
    // Si el usuario cancela el diálogo, detén la función
    if (num2 === null) {
      return;
    }
  
    // Convierte el valor del segundo número en un número decimal
    num2 = parseFloat(num2);
  
    // Realiza la operación correspondiente
    var resultado;
    if (operacion === "+") {
      resultado = num1 + num2;
    } else if (operacion === "-") {
      resultado = num1 - num2;
    } else if (operacion === "*") {
      resultado = num1 * num2;
    } else if (operacion === "/") {
      resultado = num1 / num2;
    } else {
      // Si la operación es inválida, muestra un mensaje de error
      alert("Operación inválida");
      return;
    }
  
    // Muestra el resultado al usuario
    alert("El resultado es: " + resultado);
  
    // Pregunta al usuario si desea realizar otra operación
    var reiniciar = confirm("¿Deseas usar de nuevo la calculadora?");
  
    // Si el usuario desea reiniciar la calculadora, llama a la función nuevamente
    if (reiniciar) {
      calculadora();
    }
  }