class User{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    get password(){
        return this._password;
    }

    set password(value){
        return this._password = value.toUpperCase();
    }
}


const user = new User('name', 'abc');

console.log(user.password);