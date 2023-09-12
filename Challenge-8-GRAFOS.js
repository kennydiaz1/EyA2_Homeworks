// Definir una clase para representar a una persona
class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  }
  
  // Definir una clase para representar una ciudad
  class Ciudad {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Crear personas y ciudades
  const persona1 = new Persona("Juan", 30, "Madrid");
  const persona2 = new Persona("Maria", 25, "Barcelona");
  const persona3 = new Persona("Carlos", 28, "Madrid");
  
  const ciudad1 = new Ciudad("Madrid");
  const ciudad2 = new Ciudad("Barcelona");
  
  // Crear un objeto para representar el grafo
  const grafo = {
    personas: [persona1, persona2, persona3],
    ciudades: [ciudad1, ciudad2],
  };
  
  // Función para imprimir personas que viven en una ciudad específica
  function personasEnCiudad(nombreCiudad) {
    const personasEnLaCiudad = grafo.personas.filter(
      (persona) => persona.ciudad === nombreCiudad
    );
    console.log(`Personas en ${nombreCiudad}:`);
    personasEnLaCiudad.forEach((persona) => {
      console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
    });
  }
  
  // Ejemplo de cómo usar la función para imprimir personas en una ciudad específica
  personasEnCiudad("Madrid");
  