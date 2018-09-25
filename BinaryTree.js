var li = require('./LinkedList');

class Node {
  constructor(value) {
    if (typeof value != "undefined" && value !== null) {
       this.value = value;
    }
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  hasLeft(){
    if(this.left == null){
      return false;
    }
    return true;
  }

  hasRight(){
    if(this.right == null){
      return false;
    } else {
      return true;
    }
  }

  hasParent(){
    if(this.parent == null){
      return false;
    } else {
      return true;
    }
  }

  //For Checking that current Node is Right Side node or not
  isRight(){
    if(this.parent.right.value == this.value){
      return true;
    } else {
      return false;
    }
  }


}
//Auto Generate BinaryTree Node value vary between 1 to 100
class BinaryTree {
  constructor() {
    this.depth = null;
    this.size = null;     //this.size = Math.pow(2, depth) - 1;
    this.map = {};
    this.root = null;
    this.parent = null;
    this.child = null;
  }

  randomInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }

  createTree(depth){
    this.depth = depth;
    this.size =  Math.pow(2, depth) - 1;   //Size count using (2)(N times) - 1
    var it = 0;

    while(it<this.size){
      this.parent = this.root;
      it++;
      var rndmInt = this.randomInt(1,100);  //Node value vary between 1 to 100
      var node = new Node(rndmInt);
      if(this.root == null){
        this.root = node;
        this.parent = node;
        node.parent = null;
      } else {
        var node1 = this.recursiveCall(node);
        if(node.value <= node1.value){
            node1.left = node;
        }
        if(node.value > node1.value) {
            node1.right = node;
        }
          node.parent = node1;
      }
      this.map[it] = node;
    }
  }

  recursiveCall(node){
    if(this.parent.value < node.value){
      if(this.parent.right === null){
        this.child = this.parent;
        return this.child;
      }
      this.parent = this.parent.right;
    }
    if(this.parent.value >= node.value){
      if(this.parent.left === null){
        this.child = this.parent;
        return this.child;
      }
      this.parent = this.parent.left;
    }
    return this.recursiveCall(node);
  }

  printNode(){
    console.log(this.map);
  }

  checkValue(value){
      var parent, child;
      parent = this.root;
      var key = 0;
      var sum = 0;
      var it = 0;
      while(it < this.size){
        it++;
        key++;
        sum = sum + parent.value;
        li.add(parent);
        if(sum == value){
          console.log(li.printList()+"  _MAtched");
          break;
        } else if(sum > value){
          if(parent.hasRight()){
            li.remove();
            parent = parent.right;
          } else {
            parent = this.recursiveFind(parent.parent);
          }
        } else {
          if(parent.hasLeft()){
            parent = parent.left;
          } else if(parent.hasRight()){
            li.remove();
            parent = parent.right
          } else {
            parent = this.recursiveFind(parent.parent);
          }
        }
        // if(sum > value){
        //   if(parent.hasParent()){
        //     if(parent.parent.hasRight()){
        //       parent = parent.parent.right;
        //       delete mapTarvese[key];
        //     } else {
        //       console.log("There is no root is smaller than current value");
        //       break;
        //     }
        //   } else {
        //     console.log("There is no root is smaller than current value");
        //     break;
        //   }
        //   // delete mapTarvese[key];
        //   // parent =
        // } else if(parent.hasLeft()){
        //    parent = parent.left;
        //  }
      }
      //console.log(li.printList() + "Nothing Matched");
      // console.log(mapTarvese);
      // while(parent)
  }

  // recursiveFind(node){
  //   if(node.hasRight()){
  //     return node.right;
  //   } else if(node.hasParent()) {
  //     li.remove();
  //     return this.recursiveFind(node.parent)
  //   } else {
  //     console.log("All Possibility checked No match found");
  //   }
  //
  // }

  recursiveFind(node, str, pathLength){
    if(node == null){
      return;
    }
    //var strcpy = str
    str.push(node.value);
    pathLength++;
    /* it's a leaf, so print the path that led to here  */
   if (node.left == null && node.right == null) {
      this.printArray(str, pathLength);

    } else {
       /* otherwise try both subtrees */
            this.recursiveFind(node.left, str, pathLength);
            this.recursiveFind(node.right, str, pathLength);

    }
  }

  printArray(str, pathLength){
      console.log(str);
  }

  allPossibleTraversal(){
      var str = [];
      var it = 0;
      var parent = this.root;
      this.recursiveFind(parent, str, 0);
  }



}

module.exports = new BinaryTree()
