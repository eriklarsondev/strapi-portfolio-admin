'use strict'

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::category.category').fetch()
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::category.category').fetchById(id)
  }
}))
