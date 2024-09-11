export default class UserModel {
  constructor(name, email, password, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id;
  }

  static signUp(name, email, password) {
    const newUser = new UserModel(name, email, password, users.length + 1);
    users.push(newUser);
    return newUser;
  }

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
}
var users = [
  {
    id: 1,
    name: "Rocky Singh",
    email: "rocky123@gmail.com",
    password: "12345",
  },
];
