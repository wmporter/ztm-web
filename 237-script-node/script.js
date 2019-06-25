// import largeNumber from './script2.js';
const script2 = require('./script2.js');

// const a = 4;
const a = script2.largeNumber;
const b = 6;
console.log(a + b);

setTimeout(console.log, 3000, a + b);

console.log(__dirname);