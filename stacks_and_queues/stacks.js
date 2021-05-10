// You can use push and pop on an array and bam you have a stack. 
// You can also use shift and unshift. Pushing and popping takes less time though. 

// We can also use a linked list to implement a stack. 
// We need push/pop to take O(1) time.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Add to beginning of linked list. 
    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    // Remove from beginning of linked list. 
    pop() {
        if (this.size === 0) return null;
        let temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}