  // Definir una clase para representar a una persona en el cajero automático
class Persona {
    constructor(nombre, horaLlegada) {
      this.nombre = nombre;
      this.horaLlegada = horaLlegada;
    }
  }
  
  // Crear una cola vacía para las personas en el cajero automático
  const colaATM = [];
  
  // Llenar la cola con ejemplos de personas
  colaATM.push(new Persona("Juan", "09:00"));
  colaATM.push(new Persona("Maria", "09:10"));
  colaATM.push(new Persona("Pedro", "09:15"));
  colaATM.push(new Persona("Ana", "09:30"));
  
  // Función para manejar la cola del cajero automático
  function manejarColaATM() {
    if (colaATM.length > 0) {
      const personaActual = colaATM.shift();
      console.log(`Atendiendo a ${personaActual.nombre} que llegó a las ${personaActual.horaLlegada}`);
    } else {
      console.log("La cola del cajero automático está vacía.");
    }
  }
  
  // Simular el proceso de atender a personas en el cajero automático
  setInterval(manejarColaATM, 2000); // Se ejecutará cada 2 segundos
  