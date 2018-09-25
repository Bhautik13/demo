var path = require("path");

console.log('normalization : '+ path.normalize('/test/test1//2slashes/1slash/tab/..'));
console.log('join path :'+ path.join('/test','test1','2slashes/1slash','tab','..'));
console.log('Resolve path:'+ path.resolve('main.js'));
console.log('Ext name:'+ path.extname('main.js'));
