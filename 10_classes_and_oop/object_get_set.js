const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
this._password = value
    },

     get email(){
         return this._email.toUpperCase()
     },

     set email(value){
        this._email = value
     }
}

const tea = Object.create(User)
console.log(tea.password);
console.log(tea.email)