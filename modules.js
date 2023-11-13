// import people array from people file using require
const xyz = require('./people');

// using module to export content to the variable xyz from the people file
console.log(xyz);

// logged in a linear fashion
console.log(xyz.people, xyz.ages);

// OS module
const os = require('os');

console.log(os.platform(), os.homedir());
