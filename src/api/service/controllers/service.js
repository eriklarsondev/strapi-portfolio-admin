'use strict'

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::service.service', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::service.service').fetch()
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::service.service').fetchById(id)
  }
}))
