
class Node {
    constructor(initVal) {
        this.val = initVal;
        this.next = null;
    }
}

class Singly_Linked_List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add node to end.
    push(newVal) {
        let newNode = new Node(newVal);
        if (this.tail === this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove node from end.
    pop() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
        let current = this.head;
        while (current) {
            if (current.next === this.tail) {
                this.tail = current;
                this.tail.next = null;
            }
            current = current.next;
        }
        this.length--;
    }

    // Remove node from beginning.
    shift() {
        if (!this.head) return undefined;
        this.head = this.head.next;
        this.length--;
    }
}

Singly_Linked_List.prototype.toString = function () {
    let output = '';
    let current = this.head;
    while (current) {
        output += `${current.val} -- `;
        current = current.next;
    }
    output += `| length: ${this.length}`
    return output;
}

// TODO: Implement edge cases.

let list = new Singly_Linked_List();
console.log(list.toString());
list.push(1);
list.shift();
console.log(list.toString());

