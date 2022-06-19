const { INTEGER } = require('sequelize');
const { DataTypes } = require('sequelize');
const db = require('../database');

const Pesanan = db.define('Pesanan', {
    id_pesanan: {
        type: DataTypes.INTEGER(5),
        autoIncrement: false,
        primaryKey: true,
    }, 
    waktu_pemesanan: DataTypes.DATE,
    harga: DataTypes.INTEGER,
    nomor_meja: INTEGER(3),
    qty: INTEGER(3),
    status: {
        type: DataTypes.ENUM("belum_dibayar", "dibayar", "selesai"),
    },
    id_menu: {
        type: DataTypes.INTEGER(5),
        references: {
            model: 'Menu',
            key: 'id_menu',
        }
    },
    id_kasir: {
        type: DataTypes.INTEGER(5),
        references: {
            model: 'Kasir',
            key: 'id_kasir',
        }
    }
})

module.exports = Pesanan;