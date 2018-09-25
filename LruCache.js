class Node {
  constructor(key, value) {
        if (typeof key != "undefined" && key !== null) {
           this.key = key;
        }
        if (typeof value != "undefined" && value !== null) {
           this.value = value;
        }
        // this.prev = null;
        this.next = null;
  }
}


class LruCache {
  constructor(limit) {
    this.size = 0;
    (typeof limit == "number")? this.limit = limit : this.limit = 10;
    this.map = {};
    this.head = null;
    this.tail = null;
  }

  //set head node in lrucache
  setHead(node){
    //console.log(node);

    // node.prev = this.head;
    if(this.head !== null){
      this.head.next = node;
    }
    this.head = node;
    if(this.tail === null){
       this.tail = node;
    }
    this.size++;
    this.map[node.key] = node;
  }

  //insert new key value or upadte existense one
  set(key,value) {
    var node = new Node(key, value);
    if(this.map[key]) {
      this.map[key].value = node.value;
      this.removeAt(node.key);
    } else {
        if (this.size >= this.limit) {
            delete this.map[this.tail.key];
            this.size--;
            this.tail = this.tail.next;
            //this.tail.prev = null;
        }
    }
    this.setHead(node);
  }

  //get node using index.....
  get(index){
    var node = this.map[index];

    this.removeAt(index);
    node.next = null;
    this.setHead(node);
    // this.printLruCache();
    return this.map[index];
  }

  //remove node using index
  removeAt(index){
    var node = this.map[index];
    var node;
    var curr, prev;
    if(index == this.tail.key){
        delete this.map[this.tail.key];
        this.size--;
        this.tail = this.tail.next;
        // this.head = node.next;
        // this.head.next = node.next
    } else {
      curr = this.tail;
      var it = 1;
      while(it< this.size){
        it++;
        if(curr.next === null){
          break;
        }
        if(curr.next.key == index){
            delete this.map[index]
            curr.next = curr.next.next
            break;
        }
        prev = curr;
        curr = curr.next;

      }
      //prev.next = curr.next;
      //curr.next = node.next;
    }

    // if(this.map[index]){
    //     delete this.map[index];
    //     this.size--;
    //     node.prev.next = node.next;
    //     node.next.prev = node.prev;
    // }
  }

  //print map for all node
  printLruCache(){
    console.log(this.map);
  }

  // function LruCache(limit) {
  //
  // }
}

module.exports = new LruCache()
