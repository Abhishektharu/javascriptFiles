const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 4000;

const ofExample = Array.of(score1, score2, score3, score4);
console.log(ofExample);

const array1 = [1, 2, 4, [4, 5, 6, 68], [444, [33], 44, [4, 2, ]]]

// console.log(array1);
const fromExample = array1.flat(Infinity);
console.log(fromExample);