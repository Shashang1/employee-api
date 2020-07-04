const User = require('../models/user');

exports.getUser = async function (email, idAdmin) {
  return User.findOne({ email, idAdmin }).lean()
}

exports.updateUser = async function (email, payload) {
  return User.updateOne({ email }, { ...payload });
}

exports.addEmployee = async function ({ ...payload }) {
  let user = new User({ ...payload, idAdmin: false });
  return user.save();
}

exports.getEmployees = async function () {
  return User.find({ isAdmin: false });
}