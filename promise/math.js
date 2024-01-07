const pi = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(pi);

// $ node math.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
const mod = Object.defineProperty(Math,{
    writable: true,
})

console.log(mod);