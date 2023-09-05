// Create and handle new queue of people in one ATM.
//✓Every person in the ATM must have its name and arrived time.
//✓Fill the queue with some examples of data

class queue{
    constructor(){
        this.queue = [];
    }
}

function Person(nombre, arrivedTime) {
    this.nombre = nombre;
    this.arrivedTime = arrivedTime;
}   

queue.prototype.enqueue = function(person){
    this.queue.push(person);
}   

queue.prototype.dequeue = function(){
    return this.queue.shift();
}

queue.prototype.front = function(){
    return this.queue[0];
}

queue.prototype.isEmpty = function(){
    return this.queue.length === 0;
}

queue.prototype.print = function(){
    console.log(this.queue);
}

const queue1 = new queue();
queue1.enqueue('Juan', '8:00');
queue1.enqueue('Pedro', '8:05');
queue1.enqueue('Maria', '8:10');
queue1.enqueue('Jose', '8:15');
queue1.enqueue('Luis', '8:20');
queue1.enqueue('Ana', '8:25');
queue1.enqueue('Sofia', '8:30');
queue1.enqueue('Camila', '8:35');
queue1.enqueue('Santiago', '8:40');

queue1.print();
console.log(queue1.front());
console.log(queue1.dequeue());
console.log(queue1.front());
console.log(queue1.isEmpty());

