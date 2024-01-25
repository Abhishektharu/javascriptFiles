// setTimeout(function, delay, param1, param2, ...);
function sayHello() {
  console.log("Hello, world!");
}

setTimeout(sayHello, 2000); // This will print "Hello, world!" after a 2-second delay.


var timeoutId = setTimeout(sayHello, 2000);
console.log(typeof timeoutId);
// ...somewhere else in your code
clearTimeout(timeoutId); // This will cancel the scheduled execution of sayHello.
