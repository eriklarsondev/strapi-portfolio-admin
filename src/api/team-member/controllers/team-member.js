'use strict'

/**
 * team-member controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::team-member.team-member', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::team-member.team-member').fetch()
  },

  async findOne(ctx) {
    const { id } = ctx.params
    return await strapi.service('api::team-member.team-member').fetchById(id)
  }
}))
