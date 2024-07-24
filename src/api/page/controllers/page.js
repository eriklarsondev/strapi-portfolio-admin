'use strict'

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::page.page').fetchById(id)
  }
}))
