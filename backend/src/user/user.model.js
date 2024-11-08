const db = require('../knex');

const USER_LIST_TABLE = 'user_list';

module.exports = {
  USER_LIST_TABLE,

  async all() {
    return await db(USER_LIST_TABLE);
  },

  async find(id) {
    const [foundUser] = await db(USER_LIST_TABLE).where({ id });
    return foundUser || {};
  },
};
