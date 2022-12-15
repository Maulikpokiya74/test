'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('account_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
  
  account_type: {
     type: Sequelize.INTEGER,
     allowNull: false
   },
   description: {
     type: Sequelize.INTEGER,
     allowNull: false
   },
   icon : {
     type: Sequelize.STRING,
     allowNull : false
   },
   status: {
     type: Sequelize.INTEGER,
     allowNull : false,
     defaultValue : "0"
   },
   created_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 },
 updated_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 },
});
},
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('account_types');
}
};