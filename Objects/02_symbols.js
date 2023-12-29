const mySymbol = Symbol(55);

// const user = {
//     [mySymbol] : "my key 1",
//     id: 22,
//     name: 44,
// }

// console.log(user[mySymbol])
// console.log(user)

const obj1 = { 1: 'a', 2: 'b'}
const obj2 = { 3: 'c', 4: 'd'}
const obj3 = { 5: 'e', 6: 'f'}

const objAssign = Object.assign({}, obj1, obj2, obj3); 
//value is copied to { } if defined other wise it is stored in first obj and returned a copy of it
// console.log(objAssign);

// const usingSpread = {...obj1, ...obj2, ...obj3}
// console.log(usingSpread);

const obj4 = {
    'a': 'bb',
    b : 'rr',
    c: {
        d:'bb',
        e: 'dd',
    }
}
// console.log(Object.keys(obj4.c));
// console.log(Object.values(obj4.c));

console.log(obj4.c.hasOwnProperty('e'));