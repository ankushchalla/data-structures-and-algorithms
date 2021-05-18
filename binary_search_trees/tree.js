
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
        let newNode = new Node(newNumber);
        if (current == null) {
            this.root = newNode;
            return
        }
        if (newNode.value <= current.value) {
            if (current.left === null) current.left = newNode;
            else this.insert(newNode.value, current.left);
        }
        else {
            if (current.right === null) current.right = newNode;
            else this.insert(newNode.value, current.right);
        }
        return newNode;
    }

    find(number, current = this.root) {
        if (number < current.value) {
            if (current.left) return this.find(number, current.left);
            return false
        }
        else if (number > current.value) {
            if (current.right) return this.find(number, current.right);
            return false;
        }
        return true;
    }

}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(25);
tree.insert(7);
tree.insert(17);
tree.insert(8);
console.log(tree.find(25));