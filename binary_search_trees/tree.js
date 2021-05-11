
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(newNumber, current = this.root) {
        let newNode = new Node(newNumber)
        if (newNode.value <= current.value) {
            if (current.left === null) current.left = newNode;
            else this.insert(newNode, current.left);
        }
        else {
            if (current.right === null) current.right = newNode;
            else this.insert(newNode, current.right);
        }
        return newNode;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(15);
tree.insert(25);
tree.insert(7);
tree.insert(17);
tree.insert(8);
console.log(tree.root.left);