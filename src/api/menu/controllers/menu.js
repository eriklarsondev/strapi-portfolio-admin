'use strict'

/**
 * menu controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::menu.menu', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::menu.menu').fetchById(id)
  }
}))
