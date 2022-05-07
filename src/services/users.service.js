const User = require("../models/User");
const findByEmailUserService = (email) => User.findOne ({email: email})
const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();
const findByIdUserService = (idUser) => User.findById (idUser); 

module.exports = {
  createUserService,
  findAllUserService,
  findByEmailUserService,
  findByIdUserService,
};
