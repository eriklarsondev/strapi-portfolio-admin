'use strict'

/**
 * menu service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::menu.menu', ({ strapi }) => ({
  async fetchById(id) {
    let menu = await strapi.query('api::menu.menu').findOne({
      where: { slug: id },
      populate: ['items']
    })
    return menu
  }
}))
