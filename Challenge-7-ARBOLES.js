class Persona {
    constructor(nombre, fechaNacimiento) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.hijos = [];
    }
  }
  
  // Crear personas
  const abuelo = new Persona("Abuelo", "01/01/1950");
  const abuela = new Persona("Abuela", "05/05/1955");
  
  const padre = new Persona("Padre", "10/10/1980");
  const madre = new Persona("Madre", "15/06/1985");
  
  const hijo = new Persona("Hijo", "20/03/2010");
  
  // Conectar generaciones
  abuelo.hijos.push(padre);
  abuela.hijos.push(padre);
  
  padre.hijos.push(hijo);
  madre.hijos.push(hijo);
  
  // Funciones para imprimir en preorden, posorden e inorden
  function imprimirPreorden(persona) {
    console.log(persona.nombre);
    for (const hijo of persona.hijos) {
      imprimirPreorden(hijo);
    }
  }
  
  function imprimirPosorden(persona) {
    for (const hijo of persona.hijos) {
      imprimirPosorden(hijo);
    }
    console.log(persona.nombre);
  }
  
  function imprimirInorden(persona) {
    if (persona.hijos.length > 0) {
      imprimirInorden(persona.hijos[0]);
    }
    console.log(persona.nombre);
    if (persona.hijos.length > 1) {
      imprimirInorden(persona.hijos[1]);
    }
  }
  
  // Imprimir el árbol en diferentes órdenes
  console.log("Preorden:");
  imprimirPreorden(abuelo);
  
  console.log("\nPosorden:");
  imprimirPosorden(abuelo);
  
  console.log("\nInorden:");
  imprimirInorden(abuelo);
  