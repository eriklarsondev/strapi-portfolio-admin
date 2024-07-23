'use strict'

/**
 * menu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::menu.menu', {
  only: ['findOne'],
  config: {
    findOne: {
      auth: false
    }
  }
})
