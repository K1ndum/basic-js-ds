const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {

  constructor () {
    this.rooT = null;
  }

  root() {
    return this.rooT;
  }

  add(data) {
    this.rooT = addInTree(this.rooT, data);

    function addInTree (node, data) {

      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInTree(node.left, data);
      } else {
        node.right = addInTree(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasInTree(this.rooT, data);

    function hasInTree(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasInTree(node.left, data);
      } else {
        return hasInTree(node.right, data);
      }
    }
  }

  find(data) {
    return hasInTree(this.rooT, data);

    function hasInTree(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return hasInTree(node.left, data);
      } else {
        return hasInTree(node.right, data);
      }
    }
  }

  remove(data) {
    this.rooT = removeInTree(this.rooT, data);

    function removeInTree(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeInTree(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeInTree(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeInTree(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rooT) {
      return;
    }

    let node = this.rooT;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rooT) {
      return;
    }

    let node = this.rooT;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}