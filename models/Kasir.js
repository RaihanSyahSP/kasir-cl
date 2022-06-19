const { DataTypes } = require('sequelize');
const db = require('../database');

const Kasir = db.define('Kasir', {
  id_kasir: {
    type: DataTypes.INTEGER(5),
    autoIncrement: false,
    primaryKey: true,
  }, 
  harga: DataTypes.INTEGER,
    nama_kasir: DataTypes.CHAR(30),
    email: DataTypes.CHAR(30),
  password: DataTypes.CHAR(20),
})

module.exports = Kasir;