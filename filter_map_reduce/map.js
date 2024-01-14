const nums = [1, 2, 3,4 , 5, 6, 7, 8, 9 , 10]

const output = nums.map((nums)=>{
    return nums * 10;
}).filter((nums)=> nums > 50);

// console.log(output);


//reduce 
const reduceOutput = nums.reduce(function(accumulator, currentValue){
    console.log( `accumulator: ${accumulator} , current value: ${currentValue}`);
    return accumulator + currentValue;
},0)
console.log(reduceOutput);

