const { 
  listUsers,
  addUser,
  editUser,
  removeUser,
  userLogin,
  resetPassword,
  updatePassword,
} = require('../../use-cases/user/index');

const makeGetUsers = require('./get-users');
const makeGetUser = require('./get-user');
const makeGetUserProfile = require('./user-profile');
const makePostUser = require('./post-user');
const makePatchUser = require('./patch-user');
const makeDeleteUser = require('./delete-user');
const makeUserLogin = require('./user-login');
const makeResetPassword = require('./reset-password');
const makeUpdatePassword = require('./update-password');

const getUsers = makeGetUsers(listUsers);
const getUser = makeGetUser(listUsers);
const getUserProfile = makeGetUserProfile(listUsers);
const postUser = makePostUser(addUser);
const patchUser = makePatchUser(editUser);
const deleteUser = makeDeleteUser(removeUser);
const login = makeUserLogin(userLogin);
const resetPass = makeResetPassword(resetPassword);
const updatePass = makeUpdatePassword(updatePassword);

const userController = Object.freeze({
  getUsers,
  postUser,
  patchUser,
  deleteUser,
  userLogin: login,
  resetPassword: resetPass,
  updatePassword: updatePass,
  getUser,
  getUserProfile
});

module.exports = userController;
