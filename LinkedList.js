 // var node = require("./Node");
 class Node {
   constructor(element) {
       this.element = element;
       this.next = null
   }
 }

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element){
        // creates a new node
        // var node = new Node(element);
        // to store current node
        var current;
        var node =new Node(element);
        // if list is Empty add the
        // element and make it head
        if (this.head == null){
          this.head = node;
        } else {
            current = this.head;
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }

    // for printing linked list
    printList(){
      var current = this.head;
      var str = "";
      while (current) {
        str += current.element.value + " ";
        current = current.next;
      }
      return str;
    }


    // printList(){
    //   var current = this.head;
    //   var str = "";
    //   while (current) {
    //     str += current.element + " ";
    //     current = current.next;
    //   }
    //   return str;
    // }

    //remove from Head
    removeFromHead(){
      if(this.length === 0){
          return undefined;
      }
      const val = this.head.element;
      this.head = this.head.next;
      return val;
    }
    //Finding the node from LinkedList
    find(val){
      let thisNode = this.head;
      while (thisNode) {
        if(thisNode.element === val){
          return thisNode;
        }
        thisNode =thisNode.next;
      }
      return thisNode;
    }

    // insert element at fix location
    insertAt(element, index){
      if(index>0 && index > this.size)
        return false;
      else {
        var node = new Node(element);
        var curr, prev;
        if(index == 0){
          node.next = head;
          this.head = node;
        } else {
          curr = this.head;
          var it = 0;
          while (it < index) {
              it++;
              prev = curr;
              curr = curr.next;
          }
          node.next = curr;
          prev.next = node;
        }
        this.size++;
      }
    }

    //update elements in LinkedList index location
    updateAt(element, index){
      if(index<0 && index>this.size){
        return false;
      } else {
        var node = new Node(element);
        var curr, prev;
        if(index==0){
          // node.next = head;
            node.next = this.head.next;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
            while (it < index) {
              it++;
              prev = curr;
              curr = curr.next;
            }
          node.next = curr.next;
          prev.next = node;
        }

      }
    }

    // remove element from linked list
    removeAt(index){
      if(index<0 && index > this.size){
        return false;
      } else {
        var node;
        var curr, prev;
        if(index == 0){
            this.head = this.head.next;
            // this.head = node.next;
            // this.head.next = node.next
        } else {
          curr = this.head;
          var it = 0;
          while(it < index){
            it++;
            prev = curr;
            curr = curr.next;
          }
          prev.next = curr.next;
          //curr.next = node.next;
        }
      }
    }

    remove(){
      this.removeAt(this.size-1);
    }



}
module.exports = new LinkedList()
