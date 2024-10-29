// Lets consider a simple example where encapsulation is used to controll access to sensitive data. Imagine we have a User class representing users in a system and we want to ensure that the user's password is not directly accessible from outside the class


class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    // method to authenticate user
    authenticate(enteredPassword: string) {
        return enteredPassword === this.password
    }
    // methods to change password
    changePassword(newPassword: string) {
        this.password = newPassword;
    }
}

const user = new User("Pankaj Sharma", "abcd")

console.log(user.authenticate("123456"))
console.log(user.authenticate("abcd"))

user.changePassword("abcde")

console.log(user.authenticate("abcd"))
console.log(user.authenticate("abcde"))
