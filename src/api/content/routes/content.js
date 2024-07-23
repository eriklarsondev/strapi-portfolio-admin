'use strict'

/**
 * content router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::content.content', {
  only: ['findOne'],
  config: {
    findOne: {
      auth: false
    }
  }
})
