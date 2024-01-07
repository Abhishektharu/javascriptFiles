function setUsername(name) {
    this.name = name;
}


function createUser(username, password) {
    // .call to explecitely call the Object

    setUsername.call(this, username);
    this.password = password;
}

console.log(createUser('abhi', 'sfdfsd')); // this won't work because we didn't create new object 

const user = new createUser('abhi', 'sdfj');
console.log(user);