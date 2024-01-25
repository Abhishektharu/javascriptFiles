// Creating a new Map
const myMap = new Map();

// Using the set method to add key-value pairs
myMap.set('key1', 5);
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Now, the Map looks like this:
// 'key1' => 'value1'
// 'key2' => 'value2'
// 'key3' => 'value3'
// console.log(myMap.get('key1'));

for(const [key, value] of myMap){
    console.log(`${key} : ${value}`);
}