class Node {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.next = null;
      this.prev = null;
    }
  }

  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addTask(title, description) {
      const newNode = new Node(title, description);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    printTasks() {
      let current = this.head;
      while (current) {
        console.log(`Title: ${current.title}`);
        console.log(`Description: ${current.description}`);
        if (current.next) {
          console.log(`Points to next TODO: ${current.next.title}`);
        } else {
          console.log("No next TODO");
        }
        console.log("--------------");
        current = current.next;
      }
    }
  }

  
  const todoList = new DoublyLinkedList();

todoList.addTask("Task 1", "Description for Task 1");
todoList.addTask("Task 2", "Description for Task 2");
todoList.addTask("Task 3", "Description for Task 3");

todoList.printTasks();
