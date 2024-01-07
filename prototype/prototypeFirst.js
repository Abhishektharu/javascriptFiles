function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    // console.log(score); //throw referenceError 
    console.log(this.score);
}

const user = new createUser('abhi', 55);
user.increment();
user.printMe();