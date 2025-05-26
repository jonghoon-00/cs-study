class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

//singly linked list, 싱글 연결 리스트
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }

  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.print(); // 1 -> 2 -> 3

// doubly linked list, 이중 연결 리스트
class DoublyLinkedListNode {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) return (this.head = newNode);

    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
    newNode.prev = current;
  }

  printForward() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" <-> "));
  }

  printBackward() {
    let current = this.head;
    while (current.next) current = current.next;

    const values = [];
    while (current) {
      values.push(current.value);
      current = current.prev;
    }
    console.log(values.join(" <-> "));
  }
}

const doublyLinkedList = new DoublyLinkedListNode();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.printForward(); // 1 <-> 2 <-> 3
doublyLinkedList.printBackward(); // 3 <-> 2 <-> 1

// circular linked list, 환형 연결 리스트
// 환형 연결 리스트는 마지막 노드가 첫 번째 노드를 가리킴
class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) current = current.next;
    current.next = newNode;
    newNode.next = this.head;
  }

  print(limit = 10) {
    const values = [];
    let current = this.head;
    let count = 0;

    while (current && count < limit) {
      values.push(current.value);
      current = current.next;
      count++;
    }

    console.log(values.join(" -> ") + " -> ... ");
  }
}

const circularSinglyLinkedList = new CircularSinglyLinkedList();
circularSinglyLinkedList.append(1);
circularSinglyLinkedList.append(2);
circularSinglyLinkedList.append(3);
circularSinglyLinkedList.print(); // 1 -> 2 -> 3 -> 1 -> 2 -> 3 -> 1 -> 2 -> 3 -> 1 -> ...

// circular doubly linked list, 환형 이중 연결 리스트
// 환형 이중 연결 리스트는 각 노드가 이전 노드와 다음 노드를 가리키고, 마지막 노드가 첫 번째 노드를 가리킴
class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
      return;
    }

    const tail = this.head.prev;

    tail.next = newNode;
    newNode.prev = tail;
    newNode.next = this.head;
    this.head.prev = newNode;
  }

  printForward(limit = 10) {
    const values = [];
    let current = this.head;
    let count = 0;
    while (current && count < limit) {
      values.push(current.value);
      current = current.next;
      count++;
    }
    console.log(values.join(" <-> ") + " <-> ...");
  }

  printBackward(limit = 10) {
    const values = [];
    let current = this.head?.prev;
    let count = 0;
    while (current && count < limit) {
      values.push(current.value);
      current = current.prev;
      count++;
    }
    console.log(values.join(" <-> ") + " <-> ...");
  }
}

const circularDoublyLinkedList = new CircularDoublyLinkedList();
circularDoublyLinkedList.append(10);
circularDoublyLinkedList.append(20);
circularDoublyLinkedList.append(30);
circularDoublyLinkedList.printForward(); // 10 <-> 20 <-> 30 <-> 10 <-> 20 <-> 30 <-> 10 <-> 20 <-> 30 <-> 10 <-> ...
circularDoublyLinkedList.printBackward(); // 30 <-> 20 <-> 10 <-> 30 <-> 20 <-> 10 <-> 30 <-> 20 <-> 10 <-> 30 <-> ...
circularDoublyLinkedList.printForward(5); // 10 <-> 20 <-> 30 <-> 10 <-> 20 <-> ...
circularDoublyLinkedList.printBackward(5); // 30 <-> 20 <-> 10 <-> 30 <-> 20 <-> ...
