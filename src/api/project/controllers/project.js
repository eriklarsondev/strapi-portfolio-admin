'use strict'

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
  async find(ctx) {
    const { featured } = ctx.query
    return await strapi.service('api::project.project').fetch(featured ? true : false)
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::project.project').fetchById(id)
  }
}))
