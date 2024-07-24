'use strict'

/**
 * page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::page.page', {
  only: ['findOne'],
  config: {
    findOne: {
      auth: false
    }
  }
})
