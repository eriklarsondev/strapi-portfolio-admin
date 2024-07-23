'use strict'

/**
 * service service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::service.service', ({ strapi }) => ({
  async fetch(exclude) {
    let services = await strapi.query('api::service.service').findMany({
      where: { name: { $ne: exclude } },
      orderBy: { name: 'asc' }
    })
    return services
  },

  async fetchById(id) {
    let service = await strapi.query('api::service.service').findOne({
      where: { slug: id }
    })

    if (service) {
      service.otherServices = await this.fetch(service.name)
    }
    return service
  }
}))
