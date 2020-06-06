function user(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

user.prototype.getEmail = function(newEmail)  {
  this.email = newEmail;
};

const ali = new user("ali", 25, "dah@yahoo.com");
ali.getEmail("info@yahoo.com");
console.log(ali);
