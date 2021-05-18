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

    contains(number, current = this.root) {
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

    BFS() {
        let data = []; 
        // Recall that a queue is a FIFO data structure.
        let queue = [];
        let node = this.root;
        // First, add the root to our queue. 
        queue.push(node);
        while(queue.length !== 0) {
            // We take from the beginning...
            node = queue.shift();
            data.push(node.value);
            // and push to the end. 
            // This is hard-coded for binary trees, but we can also just loop over arbitrary children.
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }

    // Take a node, traverse the entire left side, then traverse the entire right side. 
    DFS_Pre_Order() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }
    
    DFS_Post_Order() {
        let data = [];
        function traverse(node) {
            // Just a small change here. 
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root)
        return data;
    }
    
    DFS_In_Order() {
        let data = [];
        function traverse(node) { 
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(25);
tree.insert(7);
tree.insert(17);
tree.insert(8);
console.log(tree.DFS_In_Order());