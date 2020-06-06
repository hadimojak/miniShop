class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
  static register(name, email) {
    return new User(name, email);
  }
}

let user = User.register("hadi", "info@yahoo.com");
user.changeEmail("an@yahoo");

console.log(user);
