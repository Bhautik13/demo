class StringFrequency {
  constructor() {
    this.freq = {}
    this.string = null;
  }

  getFrequency(string) {
    this.string = string.trim();
    var freq = this.freq;
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);

        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
      return this.checkEqual()
  }

  checkEqual(){
    var character = this.string.charAt(0);
    var frequency = this.freq[character];
    for(var key in this.freq){
      if(frequency === this.freq[key]){
        continue;
      }
      return false
    }
    return true;
  }
}
module.exports = new StringFrequency()
