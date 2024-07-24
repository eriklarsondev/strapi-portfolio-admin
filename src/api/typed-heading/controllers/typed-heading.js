'use strict'

/**
 * typed-heading controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::typed-heading.typed-heading', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::typed-heading.typed-heading').fetch()
  }
}))
