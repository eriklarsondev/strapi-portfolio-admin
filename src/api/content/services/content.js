'use strict'

/**
 * content service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::content.content', ({ strapi }) => ({
  async fetchById(id) {
    let content = await strapi.query('api::content.content').findOne({
      where: { slug: id }
    })
    return content
  }
}))
