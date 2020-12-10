/**
 * We will construct a Binary Search Tree
 * 
 *     10
 *   /   \
 *  5    25
 *      /  \
 *     20  30
 *        /
 *      27
 */

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Bst {
	constructor(value) {
		this.root = new Node(value);
	}

	insert(value) {
		const newNode = new Node(value);
		// searchTree is a recursive function which will seach node 		
		const searchTree = node => {
			if(value < node.value) { // if the value is lesser then the root value then go to left node
				if(!node.left) { // if there is no node left then then put newNode to node.left
					node.left = newNode;
				} else { // else search recursively
					searchTree(node.left);
				}
			} else if(value > node.value) { // if the value is greater then the root value then go to right node
				if(!node.right) { // if there is no node left then then put newNode to node.right
					node.right = newNode;
				} else { // else search recursively
					searchTree(node.right);
				}
			}
		}
		searchTree(this.root);
	}

	search(value) {
		let currentNode = this.root;
		while(currentNode) { // traverse currentNode untill the value is equal to currentNode.value
			if(currentNode.value === value) return true;
			if(value < currentNode.value) currentNode = currentNode.left;
			else currentNode = currentNode.right;
		}
		return false;
	}

	showTree() {
		return this.root;
	}
}

const bst = new Bst(10);
bst.insert(5);
bst.insert(25);
bst.insert(20);
bst.insert(30);
bst.insert(27);
console.log(bst.search(24)); // false
