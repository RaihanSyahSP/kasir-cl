const { DataTypes } = require('sequelize');
const db = require('../database');

const Menu = db.define('Menu', {
  id_menu: {
    type: DataTypes.INTEGER(5),
    autoIncrement: false,
    primaryKey: true,
  }, 
  harga: DataTypes.INTEGER,
  nama_menu: DataTypes.CHAR(30),
})

module.exports = Menu;