const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class treeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }
  root() {
    return this.treeRoot
  }

  add(data) {
    if (this.treeRoot) {
      this.insertData(this.treeRoot, new treeNode(data))
    }
    else this.treeRoot = new treeNode(data);
  }
  
  insertData(posNode, newNode) {
    if (newNode.data>posNode.data) {
      if (posNode.right===null) posNode.right = newNode
      else this.insertData(posNode.right,newNode);   
    }
    else {
      if (posNode.left===null) posNode.left = newNode
      else this.insertData(posNode.left,newNode);
    }
  }

  has(data) {
   return this.find(data)!==null;
  }

  find(data, posNode = this.treeRoot) {
    if (posNode === null || data === posNode.data) return posNode;
    if (data<posNode.data) return this.find(data,posNode.left)
    else return this.find(data,posNode.right)
  }

  remove(data) {
    this.treeRoot = this.removeNode(data)
  }

  removeNode(data, posNode = this.treeRoot) {
   if (posNode===null)
    return null;
    
    if (data<posNode.data) {
      posNode.left = this.removeNode(data,posNode.left)
      return posNode;
    }
    else if (data>posNode.data) {
      posNode.right = this.removeNode(data,posNode.right)
      return posNode;
    } else {
      if(posNode.left===null && posNode.right===null) 
        return null;
      if (posNode.left===null) 
        return posNode.right;
      if (posNode.right===null) 
        return posNode.left;
      posNode.data = this.min(posNode.right);
      posNode.right = this.removeNode(posNode.data,posNode.right)
      return posNode;
  }
}

  min(posNode=this.treeRoot) {
    if (posNode.left===null) return posNode.data
    else return this.min(posNode.left)
  }

  max(posNode=this.treeRoot) {
    if (posNode.right===null) return posNode.data
    else return this.max(posNode.right)
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree;
tree.add(6);
console.log(tree);
tree.remove(6);
console.log(tree)