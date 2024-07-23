'use strict'

/**
 * content controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::content.content', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::content.content').fetchById(id)
  }
}))
