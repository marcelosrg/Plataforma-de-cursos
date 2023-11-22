
const bcrypt = require('bcrypt')

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('331400', 10)

    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Admin',
        last_name: 'User',
        phone: '555-5555',
        birth: '1990-01-01',
        email: 'marcelohrs2005@gmail.com',
        password: hashedPassword,
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, { where: { email: 'admin@email.com' } })
  }
};