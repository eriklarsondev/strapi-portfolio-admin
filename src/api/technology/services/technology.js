'use strict'

/**
 * technology service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::technology.technology', ({ strapi }) => ({
  async fetch() {
    let tech = await strapi.query('api::technology.technology').findMany({
      orderBy: { name: 'asc' }
    })
    return tech
  }
}))
