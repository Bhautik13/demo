var li = require('./LinkedList');
var lruCache =  require('./LruCache');
var bTree = require('./BinaryTree');

bTree.createTree(3);
 bTree.printNode();

bTree.allPossibleTraversal();
//bTree.createTree(3)
// bTree.printNode();
//bTree.printNode();






//1.   { for lru chache Uncomment This box

// lruCache.set(10,"Hii");
// lruCache.set(11,"My");
// lruCache.set(12,"Name");
// lruCache.set(13,"bhautik");
// lruCache.set(14,"Hii");
// lruCache.set(15,"My");
// lruCache.set(16,"Name");
// lruCache.set(17,"bhautik");
// lruCache.set(18,"Hii");
// lruCache.set(19,"My");
// lruCache.set(20,"Name");
// lruCache.set(21,"bhautik");
// lruCache.set(14,"Hii Bhautik")
// // lruCache.removeAt(16)
//  var str = lruCache.get(15);
// // console.log(str);
// lruCache.printLruCache();
//console.log(lruCache.head);
//}

//2.    { For LinkedList Example Uncoment this block
//
// li.add(10);
// li.add(11);
// li.add(12);
//   var str = li.printList();
// console.log(str);
// li.removeFromHead();
// console.log(li.printList());
// var str = li.find(11);
// console.log(str);
// li.insertAt(17,2);
// li.insertAt(18,3);
// li.insertAt(19,4);
// li.insertAt(20,5);
// console.log(li.printList());
// li.updateAt(25,2);
// li.updateAt(30,0);
// console.log(li.printList());
// li.remove(2);
// console.log(li.printList());
// li.remove(0);
// console.log(li.printList());
//}
