const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const bcryptSevice = require('../services/bcrypt.service');


const hooks = {
  beforeCreate(user) {
    user.password = bcryptSevice().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'users';

const User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
}, {
  hooks,
  tableName,

  freezeTableName: true,

});

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};
module.exports = User;