'use strict'

/**
 * footer-content controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::footer-content.footer-content', ({ strapi }) => ({
  async find() {
    return await strapi.service('api::footer-content.footer-content').fetch()
  }
}))
