// Similar to stacks, you can use an array to implement a queue.
// We use a singly-linked list: Add to the tail, remove from the head.

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Add something in.
    enqueue(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
        
    }
    // Remove
    dequeue() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}