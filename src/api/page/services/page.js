'use strict'

/**
 * page service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::page.page', ({ strapi }) => ({
  async fetchById(id) {
    let page = await strapi.query('api::page.page').findOne({
      where: { slug: id },
      populate: ['controls', 'seo']
    })
    return page
  }
}))
