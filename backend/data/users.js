import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Swikar Adhikari",
    email: "swikar@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Ram Adhikari",
    email: "ram@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
