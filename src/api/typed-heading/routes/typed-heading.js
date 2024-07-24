'use strict'

/**
 * typed-heading router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::typed-heading.typed-heading', {
  only: ['find'],
  config: {
    find: {
      auth: false
    }
  }
})
