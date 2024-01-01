const languages = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java',
    rb: 'ruby',
    py: 'python',
}
const myArray = [1, 2, 3, 4, 5, 7]

// myArray.forEach(function (item){
//     item  = item ** 2;
//     console.log(item);
// })


//by passing function
function passMe(item) {
    console.log(item);
}

// myArray.forEach(passMe => {

// });
// or
// myArray.forEach(passMe);\\

// myArray.forEach((item, index, array1) => {
//     console.log(item, index, array1);
// })

const myLanguages = [
    {
        languageName: 'python',
        languageShortForm: 'py'
    },
    {
        languageName: 'ruby',
        languageShortForm: 'rb'
    },
    {
        languageName: 'c++',
        languageShortForm: 'cpp'
    },
]

// print all the languages name;
myLanguages.forEach((item)=>{
    console.log(item.languageName + " and short form is " + item.languageShortForm);
})