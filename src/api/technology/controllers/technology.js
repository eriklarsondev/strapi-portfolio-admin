'use strict'

/**
 * technology controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::technology.technology', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::technology.technology').fetch()
  }
}))
