'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Kasir', {
      id_kasir: {
          type: Sequelize.INTEGER(5),
          autoIncrement: false,
          primaryKey: true,
        }, 
        harga: Sequelize.INTEGER,
          nama_kasir: Sequelize.CHAR(30),
          email: Sequelize.CHAR(30),
        password: Sequelize.CHAR(20),
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
