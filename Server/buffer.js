const Buffer = require('buffer').Buffer;

const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72,
 0x6c, 0x64]);
console.log(buf);

console.log(buf.toString('utf16le'));
// outputs '敨汬⁯潷汲'
console.log(buf.toString('utf8'));
