var sf = require("./StringFrequency");

var a = sf.getFrequency("bbbbaaccccaag");
if(a === true){
  console.log("Given String has equal number of frequency");
} else {
  console.log("Given String has not equal number of frequency");
}
