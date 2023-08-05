//La diferencias entre una funcion flecha y una funcion normal de manera clara y visible es que la funcion flecha se define con el operador => mientras que la funcion normal se define con la palabra clave de la funcion.
//La funcion flecha no tiene su propio this, arguments, super o new.target. Estas palabras clave se refieren al objeto que rodea la funcion flecha, por lo que debe tenerlos disponibles.
//Las funciones flecha son más eficientes que las funciones normales ya que no crean su propio marco de pila.
//las funciones flecha son mas concisas que las funciones normales ya que no requieren parentesis para llamarlas.

//Ejemlo de funcion flecha
const myArrowFunction = (x) => {
    return x + 1;
};

//Ejemplo de funcion normal
function myNormalFunction(x) {
    return x + 1;
};

//la funcion flecha es mas concisa que la funcion normal. Al no tener su propio contexto this hace referencia al this en el entorno que la rodea.
