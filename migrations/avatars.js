'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avatars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  
    name : {
        type : Sequelize.STRING(164),
        allowNull : false,
    },
    avatar : {
        type : Sequelize.STRING(164),
        allowNull : false,
    },
    status : {
        type : Sequelize.INTEGER(3),
        allowNull : false,
        defaultValue : "1"
    },
     
    });
},
async down(queryInterface, Sequelize) {
  
  await queryInterface.dropTable('avatars');
}
};