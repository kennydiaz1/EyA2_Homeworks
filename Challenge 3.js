class stackbooks{
    constructor(){
        this.stackbooks = [];
}
function Book(nombre, ISBN, Autor, editorial) {
    this.nombre = nombre;
    this.ISBN = ISBN;
    this.Autor = Autor;
    this.editorial = editorial;
}

    pushBook(book) {
        this.stackbooks.push(book);
    }
    popBook() {
        return this.stackbooks.pop();
    }
    peekBook() {
        return this.stackbooks[this.stackbooks.length - 1];
    }
    isEmpty() {
        return this.stackbooks.length === 0;
    }
    print() {
        console.log(this.stackbooks);
    }
}

const stack = new stackbooks();
stack.pushBook('El Principito', '978-3-16-148410-0', 'Antoine de Saint-Exupéry', 'UAO');
stack.pushBook('El Alquimista', '978-3-16-148410-0', 'Paulo Coelho', 'UAO');
stack.pushBook('El Poder', '978-3-16-148410-0', 'Rhonda Byrne', 'UAO');
stack.pushBook('El Poder del Ahora', '978-3-16-148410-0', 'Eckhart Tolle', 'UAO');
stack.pushBook('Star Wars: La amenaza fantasma', '978-3-16-148410-0', 'George Lucas', 'UAO');
stack.pushBook('El corazon delator', '978-3-16-148410-0', 'Edgar Allan Poe', 'UAO');
stack.pushBook('El cuervo', '978-3-16-148410-0', 'Edgar Allan Poe', 'UAO');


stack.print();
console.log(stack.peekBook());
console.log(stack.popBook());
console.log(stack.peekBook());
console.log(stack.isEmpty());
