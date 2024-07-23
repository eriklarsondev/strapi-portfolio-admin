'use strict'

/**
 * work router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::work.work', {
  only: ['find'],
  config: {
    find: {
      auth: false
    }
  }
})
