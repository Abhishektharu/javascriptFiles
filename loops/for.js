const languages = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java',
    rb: 'ruby'
}


//for in loop

for (const key in languages) {
    // console.log(key);
    // console.log(`${key} full form is : ${languages[key]}`);
}

const myArray = [1, 2,3, 4, 5, 7]
for (const iterator of myArray) {
    console.log(iterator)
}

// note :
// use for of loop in array
// use for in loop in object