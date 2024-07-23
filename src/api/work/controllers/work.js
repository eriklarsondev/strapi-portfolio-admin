'use strict'

/**
 * work controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::work.work', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::work.work').fetch()
  }
}))
