'use strict'

/**
 * service service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::service.service', ({ strapi }) => ({
  async fetch() {
    let services = await strapi.query('api::service.service').findMany({
      orderBy: { name: 'asc' }
    })
    return services
  },

  async fetchById(id) {
    let service = await strapi.query('api::service.service').findOne({
      where: { slug: id },
      populate: ['seo']
    })
    return service
  }
}))
