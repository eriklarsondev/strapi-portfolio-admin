'use strict'

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    const { limit } = ctx.query
    return await strapi.service('api::article.article').fetch(limit)
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::article.article').fetchById(id)
  }
}))
