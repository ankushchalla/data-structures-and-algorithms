
class Node {
    constructor(initVal) {
        this.val = initVal;
        this.next;
    }
}

class Singly_Linked_List {
    constructor(val) {
        let firstNode = new Node(val);
        this.head = firstNode;
        this.tail = firstNode;
    }

    push(newVal) {
        let newNode = new Node(newVal);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    pop() {
        let current = this.head;
        while(current) {
            if (current.next === this.tail) {
                this.tail = current;
                this.tail.next = null;
            }
            current = current.next;
        }
    }
}

Singly_Linked_List.prototype.toString = function() {
    let output = '';
    let current = this.head;
    while(current) {
        output += `${current.val} -- `;
        current = current.next;
    }
    return output;
}

let list = new Singly_Linked_List(5);
list.push(7)
list.push(1)
list.push(3)
list.push(2)
list.push(6)
console.log(list.toString());
list.pop();
console.log(list.toString());

