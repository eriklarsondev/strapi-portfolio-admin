'use strict'

/**
 * technology controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::technology.technology', ({ strapi }) => ({
  async find() {
    let tech = await strapi.service('api::technology.technology').fetch()
    return tech
  }
}))
