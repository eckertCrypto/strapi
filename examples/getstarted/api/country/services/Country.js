'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  async find(params, populate) {
    const knex = strapi.connections.default;
    const result = await knex('countries').select(
      knex.raw('sum("bigint") as summe'),
      knex.raw('count(id) as count')
    );
    console.log('sum', result);

    return strapi.query('country').find(params, populate);
  },
};
