const promiseExample = new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log('promise ran ')
        resolve();
    }, 1000);
});

promiseExample.then(function (){
    console.log('final promise ');
})


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function (){
//         let error = false;

//         if(!error){
//             resolve({user: 'abhi', password: 'sfsdf'});
//         }

//         else{
//             reject('Error: Something went wrong...');
//         }
//     }, 1000)
// });

// async function consumeFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     }
// }

//call the function to execute
// consumeFive();