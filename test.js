const name = 'mario';
console.log(name);

const greet = (name) => {
  console.log(`hello ${name}`);
};

greet(name);

// Global Object, similar to window obj in JS
console.log(global);

// setTimeout method
setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);
const int = setInterval(() => {
  console.log('in the Interval');
}, 1000);

console.log(__dirname);
console.log(__filename);
