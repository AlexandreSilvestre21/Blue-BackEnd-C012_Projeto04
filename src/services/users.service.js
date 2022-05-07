const User = require("../models/User");

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

module.exports = {
  createUserService,
  findAllUserService,
};
