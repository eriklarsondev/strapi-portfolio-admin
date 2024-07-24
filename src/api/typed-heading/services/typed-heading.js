'use strict'

/**
 * typed-heading service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::typed-heading.typed-heading', ({ strapi }) => ({
  async fetch() {
    let data = await strapi.query('api::typed-heading.typed-heading').findOne()
    if (data.items) {
      data.items = data.items.split(',').map(item => item.trim())
    }
    return data
  }
}))
