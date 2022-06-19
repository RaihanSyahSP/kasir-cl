'use strict';
const { INTEGER } = require('sequelize');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Pesanan', {
      id_pesanan: {
        type: Sequelize.INTEGER(5),
        autoIncrement: false,
        primaryKey: true,
      }, 
      waktu_pemesanan: Sequelize.DATE,
      harga: Sequelize.INTEGER,
      nomor_meja: INTEGER(3),
      qty: INTEGER(3),
      status: {
          type: Sequelize.ENUM("belum_dibayar", "dibayar", "selesai"),
      },
      id_menu: {
          type: Sequelize.INTEGER(5),
          references: {
              model: 'Menu',
              key: 'id_menu',
          }
      },
      id_kasir: {
          type: Sequelize.INTEGER(5),
          references: {
              model: 'Kasir',
              key: 'id_kasir',
          }
      }
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
