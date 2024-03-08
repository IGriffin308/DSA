class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    var current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;

    if (val === current.val) return current;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) return undefined;

    function traverse(current) {
      if (val === current.val) return current;

      if (val < current.val) {
        if (current.left === null) return undefined;
        return traverse(current.left);
      } else {
        if (current.right === null) return undefined;
        return traverse(current.right);
      }
    }
    return traverse(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let queue = [];
    let current = this.root;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let current = this.root;
    let parent = null;
    let direction = null;

    while (current.val !== val) {
      parent = current;
      if (val < current.val) {
        current = current.left;
        direction = "left";
      } else {
        current = current.right;
        direction = "right";
      }
    }

    if (current.left === null && current.right === null) {
      if (direction === "left") {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.left === null) {
      if (direction === "left") {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else if (current.right === null) {
      if (direction === "left") {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else {
      let min = current.right;
      while (min.left !== null) {
        min = min.left;
      }
      let minVal = min.val;
      this.remove(min.val);
      current.val = minVal;
    }
    return current;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    if (this.root === null) return true;
    return maxDepth(this.root) - minDepth(this.root) <= 1;

    function maxDepth(node) {
      if (node === null) return 0;
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    }

    function minDepth(node) {
      if (node === null) return 0;
      return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(current = this.root) {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;

    while (current) {
      if (current.left && !current.right) {
        return findMax(current.left);
      }
      if (current.right && !current.right.left && !current.right.right) {
        return current.val;
      }
      current = current.right;
    }
  }
}

module.exports = BinarySearchTree;
