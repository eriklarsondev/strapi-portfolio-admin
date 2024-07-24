'use strict'

/**
 * footer-content service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::footer-content.footer-content', ({ strapi }) => ({
  async fetch() {
    return await strapi.query('api::footer-content.footer-content').findOne()
  }
}))
